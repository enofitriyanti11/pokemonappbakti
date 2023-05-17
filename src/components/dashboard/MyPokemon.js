import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
// import { AiFillDelete } from "react-icons/ai";

export default function MyPokemons() {
  const [myPokemon, setMyPokemons] = useState([]);

  const getMyPokemons = () => {
    const savedData = JSON.parse(localStorage.getItem("myPokemonList")) || [];
    console.log(savedData);
    if (savedData) {
      setMyPokemons(savedData);
    }
  };

  console.log("======MyPoke", myPokemon);
  console.log("======MyPoke length", myPokemon.length);
  useEffect(() => {
    getMyPokemons();
  }, []);

  const deletePokemon = (pokemon) => {
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      warningButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedMyPokemon = [...myPokemon];
        const index = updatedMyPokemon.findIndex((p) => p.id === pokemon.id);
        if (index !== -1) {
          updatedMyPokemon.splice(index, 1);
          localStorage.setItem(
            "myPokemonList",
            JSON.stringify(updatedMyPokemon)
          );
          setMyPokemons(updatedMyPokemon);
          Swal.fire("Success", "Pokemon has been remove", "success");
        }
      }
    });
  };

  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-auto pt-10">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div class="py-10">
          <h1 class="text-2xl md:text-5xl text-white font-bold">
            My Pokemon
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {myPokemon.map((pokemon, name) => (
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
                <div className="flex justify-center  my-2">
                  {/* <div>
                    <a
                      href={`/detail/${pokemon.name}`}
                      className=" text-xs text-gray-600 underline hover:no-underline"
                    >
                      See Details
                    </a>
                  </div> */}
                  <button
                    onClick={() => deletePokemon(pokemon)}
                    className="btn btn-warning rounded-full"
                  >
                    Delete Pokemon
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
