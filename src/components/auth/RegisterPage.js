import React from "react";
import { AiOutlineVerticalRight } from "react-icons/ai";
import bg from "../../img/takeshi.jpg";

const RegisterPage = () => {
  return (
    <div class="hero min-h-screen">
      <div className="mask">
        <img
          className="into-img w-screen h-screen object-cover"
          src={bg}
          alt="bg"
        />
      </div>
      <div className="hero-overlay bg-opacity-60">
        <a href="/login">
          <button className="btn btn-link text-white no-underline">
            <AiOutlineVerticalRight size={20} className="text-white" /> Back
          </button>
        </a>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-center font-bold">Register Account</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
              <button className="btn btn-primary">Daftar</button>
            </div>
            <p className="text-center text-sm text-gray-500">
              <a
                href="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
