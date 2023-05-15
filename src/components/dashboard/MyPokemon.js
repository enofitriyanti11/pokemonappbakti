import React, { useState, useEffect } from "react";

export default function MyPokemons() {
  const [myPokemon, setMyPokemons] = useState([]);

  const getMyPokemons = () => {
    const savedData = JSON.parse(localStorage.getItem("myPokemon"));
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
      // membuat salinan array
      const updatedMyPokemon = [...myPokemon];

      // mencari index data yang akan dihapus
      const index = updatedMyPokemon.findIndex((p) => p.id === pokemon.id);

      //  kodnisi menghapus data dari array jika ditemukan
      if (index !== -1) {
        updatedMyPokemon.splice(index, 1);
        //splice() adalah sebuah method built-in pada JavaScript array yang digunakan untuk menambah, menghapus, dan/atau mengganti elemen pada sebuah array. Method ini menerima dua parameter: index dan howMany, dimana index adalah posisi dari elemen yang ingin diubah dan howMany adalah jumlah elemen yang ingin diubah.
        //mengubah array updatedMyPokemon dengan menghapus satu elemen dari array tersebut pada indeks yang ditentukan dengan nilai index
        //elemen yang dihapus adalah elemen yang memiliki indeks yang sama dengan indeks dari pokemon yang ingin dihapus dari array.

        // menyimpan array yang diperbarui ke local storage
        localStorage.setItem("myPokemon", JSON.stringify(updatedMyPokemon));

        // memperbarui state dengan array yang diperbarui
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
          {myPokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              class="card w-full bg-base-100 shadow-xl rounded-lg"
            >
              <div className="card p-9 rounded-lg ">
                <img
                  src={pokemon.image}
                  alt=""
                  className="rounded-t-lg object-cover h-full w-full"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold my-2">{pokemon.name}</h2>
                <div className="flex justify-between items-center my-2">
                  <p className="text-gray-600">Price:</p>
                  <p className="text-gray-800">{pokemon.price}</p>
                </div>
                <div className="flex justify-start my-2">
                  <button
                    onClick={() => deletePokemon(pokemon)}
                    className="btn btn-warning rounded-full"
                  >
                    Release Pokemon
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
