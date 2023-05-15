import React from "react";
import Navbar from "../components/Navbar";
import ListPokemon from "../components/dashboard/ListPokemon";
import Footer from "../components/Footer";

function Home () {
  return <div>
    <Navbar/>
    <ListPokemon/>
    <Footer/>
  </div>;
};

export default Home;
