import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ListPokemon() {
  // const pokemons = [

  //   {
  //     id: 1,
  //     name: "Sprigatito",
  //     image: require("../../img/pok1.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 2,
  //     name: "Rowlet",
  //     image: require("../../img/pok7.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 3,
  //     name: "Bulbasaur",
  //     image: require("../../img/pok3.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 4,
  //     name: "Jigglypuff",
  //     image: require("../../img/pok4.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 5,
  //     name: "Blastoise",
  //     image: require("../../img/pok5.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 6,
  //     name: "Umbreon",
  //     image: require("../../img/pok6.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 7,
  //     name: "Mega Beedrill",
  //     image: require("../../img/pok12.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 8,
  //     name: "Mega Pidgeot",
  //     image: require("../../img/pok9.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 9,
  //     name: "Venusaur",
  //     image: require("../../img/pok10.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 10,
  //     name: "Butterfree",
  //     image: require("../../img/pok11.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 11,
  //     name: "Raticate",
  //     image: require("../../img/pok13.png"),
  //     price: "$20",
  //   },
  //   {
  //     id: 12,
  //     name: "Blastoise",
  //     image: require("../../img/pok2.png"),
  //     price: "$20",
  //   },
  // ];
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        const pokemonList = response.data.results;
        const pokemonData = [];

        for (const pokemon of pokemonList) {
          const pokemonResponse = await axios.get(pokemon.url);
          const pokemonImage =
            pokemonResponse.data.sprites.other.dream_world.front_default;

          pokemonData.push({
            name: pokemon.name,
            image: pokemonImage,
          });
        }

        setPokemons(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPokemons();
  }, []);

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
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-auto pt-10">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div className="py-10">
          <h1 className="text-2xl md:text-5xl text-white font-bold">
            List Pokemon
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {pokemons.map((pokemon, name) => (
            <div
              key={name}
              className="card w-full bg-white/25 shadow-xl rounded-lg"
            >
              <div className="card p-5 rounded-lg">
                <img
                  src={pokemon.image}
                  alt=""
                  className="object-contain h-48 w-96 lg:h-48 lg:w-96"
                />
              </div>
              <div className="p-4">
                <h2 className="uppercase text-center font-semibold my-2">
                  {pokemon.name}
                </h2>
                <div className="flex justify-between items-center my-2">
                  <div>
                    <a
                      href={`/detail/${pokemon.name}`}
                      className=" text-xs text-gray-600 underline hover:no-underline"
                    >
                      See Details
                    </a>
                  </div>
                  <button
                    onClick={() => addPokemon(pokemon)}
                    className="btn btn-warning rounded-full"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListPokemon;
