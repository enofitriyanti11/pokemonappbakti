import React from "react";

const pokemons = [
  {
    id: 1,
    name: "Sprigatito",
    image: require("../img/pok1.png"),
    price: "$20",
  },
  {
    id: 2,
    name: "Rowlet",
    image: require("../img/pok7.png"),
    price: "$20",
  },
  {
    id: 3,
    name: "Bulbasaur",
    image: require("../img/pok3.png"),
    price: "$20",
  },
  {
    id: 4,
    name: "Jigglypuff",
    image: require("../img/pok4.png"),
    price: "$20",
  },
  {
    id: 5,
    name: "Blastoise",
    image: require("../img/pok5.png"),
    price: "$20",
  },
  {
    id: 6,
    name: "Umbreon",
    image: require("../img/pok6.png"),
    price: "$20",
  },
  {
    id: 7,
    name: "Mega Beedrill",
    image: require("../img/pok12.png"),
    price: "$20",
  },
  {
    id: 8,
    name: "Mega Pidgeot",
    image: require("../img/pok9.png"),
    price: "$20",
  },
  {
    id: 9,
    name: "Venusaur",
    image: require("../img/pok10.png"),
    price: "$20",
  },
  {
    id: 10,
    name: "Butterfree",
    image: require("../img/pok11.png"),
    price: "$20",
  },
  {
    id: 11,
    name: "Raticate",
    image: require("../img/pok13.png"),
    price: "$20",
  },
  {
    id: 12,
    name: "Blastoise",
    image: require("../img/pok2.png"),
    price: "$20",
  },
];
function addPokemon(pokemon) {
  // Ambil data dari local storage (jika ada)
  const existingData = localStorage.getItem("myPokemon");

  // Jika data tidak ditemukan, buat array kosong
  const myPokemon = existingData ? JSON.parse(existingData) : [];

  const isDataExist = myPokemon.some((p) => p.id === pokemon.id);

  if (isDataExist) {
    alert("Pokemon sudah ada!");
  } else {
    // Tambahkan pokemon yang dipilih ke dalam array myPokemon
    myPokemon.push(pokemon);
    // Simpan data ke local storage
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
    // Tampilkan pesan sukses
    alert("Pokemon berhasil ditambahkan ke koleksi kamu!");
  }
}

export default function ListPokemon() {
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
          {pokemons.map((pokemon, id) => (
            <div key={id} class="card w-full bg-base-100 shadow-xl rounded-lg">
              <div class="card p-9 rounded-lg">
                <img
                  src={pokemon.image}
                  alt=""
                  class="rounded-t-lg object-cover h-full w-full"
                />
              </div>
              <div class="p-4">
                <h2 class="text-xl font-semibold my-2">{pokemon.name}</h2>
                <div class="flex justify-between items-center my-2">
                  <p class="text-gray-600">Price:</p>
                  <p class="text-gray-800">{pokemon.price}</p>
                </div>
                <div class="flex justify-start my-2">
                  <button
                    onClick={() => addPokemon(pokemon)}
                    class="btn btn-warning rounded-full"
                  >
                    Add Pokemon
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
