import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillBackward } from "react-icons/ai";

function addPokemon(pokemon) {
  Swal.fire({
    title: "Confirmation",
    text: "Sure you want to add this Pokemon?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
    reverseButtons: true,
  }).then((result) => {
    if (result.value) {
      // Ambil data dari local storage (jika ada)
      console.log("pokemon", pokemon);
      let myPokemonList =
        JSON.parse(localStorage.getItem("myPokemonList")) || [];
      const isDataExist = myPokemonList.find((p) => p.name === pokemon.name);

      if (isDataExist) {
        Swal.fire({
          title: "Error",
          text: "Pokemon Already Exist!",
          icon: "error",
          confirmButtonText: "OK",
        });
      } else {
        // Tambahkan pokemon yang dipilih ke dalam array myPokemon
        myPokemonList.push(pokemon);
        localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));

        Swal.fire({
          title: "Success",
          text: "Successfully Added My Pokemon!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        title: "Cancelled",
        text: "Adding Pokemon Cancelled!",
        icon: "info",
        confirmButtonText: "OK",
      });
    }
  });
}

function DetailPokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getPokemonDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPokemonDetail = async () => {
    try {
      // Mengambil data pokemon
      const pokemonResponse = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemonData = pokemonResponse.data;

      // Mendapatkan move dari pokemon
      const moveUrls = pokemonData.moves.map((move) => move.move.url);
      const moveResponses = await Promise.all(
        moveUrls.map((url) => axios.get(url))
      );
      const moves = moveResponses.map((response) => response.data.name);

      const pokemonImage = pokemonData.sprites.other.dream_world.front_default;
      const pokemonWeight = pokemonData.weight;
      const pokemonHeight = pokemonData.height;
      const pokemonMoves = moves;

      // Mengupdate state pokemon
      setPokemon({
        name: pokemonData.name,
        image: pokemonImage,
        weight: pokemonWeight,
        height: pokemonHeight,
        moves: pokemonMoves,
        // Tambahkan data lain yang Anda inginkan
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-auto min-h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="py-10">
          <h1 className="text-2xl md:text-5xl text-white font-bold">
            Detail Pokemon
          </h1>
        </div>

        <div className="bg-white/25 items-center mt-10 px-8 md:px-14 p-4 rounded-3xl mx-auto max-w-xs md:max-w-[70rem] grid lg:grid-cols-2">
          <div className="hidden lg:block px-5">
            <div className="flex justify-start">
              <a href="/pokemon">
                <button className="btn btn-link text-white no-underline">
                  <AiFillBackward size={20} className="text-white" />{" "}
                  Back
                </button>
              </a>
            </div>
            <div className="p-9 rounded-lg ">
              <img
                src={pokemon.image}
                alt="event"
                className="object-contain h-48 w-96"
              />
            </div>
          </div>
          <div className="py-2 wd:py-12">
            <h2 className="uppercase text-3xl font-semibold text-slate-700 md:text-3xl lg:text-4xl">
              {pokemon.name}
            </h2>
            <p className="text-sm text-gray-600">Weight: {pokemon.weight}</p>
            <p className="text-sm text-gray-600">Height: {pokemon.height}</p>

            <p className="text-slate-600 font-bold text-justify text-2xl mt-10">
              Moves
            </p>
            <p className="text-slate-600">
              {pokemon.moves.slice(0, 30).map((move) => (
                <span style={{ marginRight: 4 }}>{move}</span>
              ))}
            </p>
            <div className="justify-items-center text-center pt-8 font-bold">
              <button
                onClick={() => addPokemon(pokemon)}
                className="btn btn-warning rounded-full"
              >
                Add to My Pokemon
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPokemon;
