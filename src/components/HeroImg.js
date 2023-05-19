import React from "react";
import IntroImg from "../img/pika.png";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../service/login";

function HeroImg() {
  const isUserLoggedIn = isLoggedIn();
  return (
    <div className="hero min-h-screen">
      <div className="mask">
        <img
          className="into-img w-screen h-screen object-cover"
          src={IntroImg}
          alt="IntroImg"
        />
      </div>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content max-w-1/2 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {isUserLoggedIn ? (
            <Link to="/pokemon">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
