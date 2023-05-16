import React, { useState, useEffect } from "react";

export default function MyPokemons() {
  const [myPokemon, setMyPokemons] = useState([]);

  const getMyPokemons = () => {
    const savedData = JSON.parse(localStorage.getItem("myPokemonList"));
    console.log(savedData);
    if (savedData) {
      setMyPokemons(savedData);
    }
  };

  useEffect(() => {
    getMyPokemons();
  }, []);

  const deletePokemon = (pokemon) => {
    const confirmation = window.confirm(
      "Apakah Anda yakin ingin melepaskan Pokemon ini dari My Pokemon?"
    );

    if (confirmation) {
      const updatedMyPokemon = [...myPokemon];
      const index = updatedMyPokemon.findIndex((p) => p.name === pokemon.name);

      if (index !== -1) {
        updatedMyPokemon.splice(index, 1);

        localStorage.setItem("myPokemonList", JSON.stringify(updatedMyPokemon)); // mengubah key menjadi "myPokemonList"

        setMyPokemons(updatedMyPokemon);
        alert("Pokemon berhasil dilepas dari My Pokemon!");
      }
    }
  };

  return (
    <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-auto pt-10">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div class="py-10">
          <h1 class="text-2xl md:text-5xl text-white font-bold">
            List Pokemon
          </h1>
        </div>
      </div>
      <div class="mx-auto max-w-screen-xl flex justify-center p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {myPokemon.map((pokemon, name) => (
            <div
              key={name}
              className="card w-full bg-base-100 shadow-xl rounded-lg"
            >
              <div className="card p-5 rounded-lg">
                <img
                  src={pokemon.image}
                  alt=""
                  className="rounded-t-lg object-cover h-44 mx-auto"
                />
              </div>
              <div className="p-4">
                <h2 className="uppercase text-center font-semibold my-2">
                  {pokemon.name}
                </h2>
                <div className="flex justify-between items-center my-2">
                  <div>
                    <p className="text-gray-600">See Details</p>
                    <p className="text-gray-800"></p>
                  </div>
                  <button
                    onClick={() => deletePokemon(pokemon)}
                    className="btn btn-warning rounded-full"
                  >
                    Delete
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
