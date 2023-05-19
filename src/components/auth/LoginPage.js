import React, { useState } from "react";
import { AiOutlineVerticalRight } from "react-icons/ai";
import bg from "../../img/takeshi.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", { email, password })
      .then((response) => {
        localStorage.setItem("authToken", true);
        Swal.fire("Success", "Login successful!", "success").then(() => {
          window.location.href = "/";
        });
        navigate("/");
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="mask">
        <img
          className="into-img w-screen h-screen object-cover"
          src={bg}
          alt="bg"
        />
      </div>
      <div className="hero-overlay bg-opacity-60">
        <a href="/">
          <button className="btn btn-link text-white no-underline">
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
        <div className="card flex-shrink-0 w-full max-w-sm shadow-6xl bg-white/70">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  className="input input-bordered"
                  type="email"
                  placeholder="youremail@gmail.com"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  className="input input-bordered"
                  type="password"
                  placeholder="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
              <label className="label text-2xl">
                <a href="/register" className="label-text-alt link link-hover">
                  Register?
                </a>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
