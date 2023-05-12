import React from "react";
import { AiOutlineVerticalRight } from "react-icons/ai";
import bg from "../img/takeshi.jpg";
const LoginPage = () => {
  return (
    <div class="hero min-h-screen">
      <div className="mask">
        <img
          className="into-img w-screen h-screen object-cover"
          src={bg}
          alt="bg"
        />
      </div>
      <div class="hero-overlay bg-opacity-60">
        <a href="/">
          <button class="btn btn-link text-white no-underline">
            <AiOutlineVerticalRight size={20} className="text-white" /> Back
          </button>
        </a>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-6xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label text-2xl">
              <a href="/register" className="label-text-alt link link-hover">
                Register?
              </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
