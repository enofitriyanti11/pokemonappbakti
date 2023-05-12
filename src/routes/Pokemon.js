import React from "react";
import Navbar from "../components/Navbar";
import ListPokemon from "../components/ListPokemon";
import Footer from "../components/Footer";

const Home = () => {
  return <div>
    <Navbar/>
    <ListPokemon/>
    <Footer/>
  </div>;
};

export default Home;
