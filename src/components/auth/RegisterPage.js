import React, { useState } from "react";
import { AiOutlineVerticalRight } from "react-icons/ai";
import bg from "../../img/takeshi.jpg";
import axios from "axios";
import { Navigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email: email,
        password: password
      });
      console.log(response); // Menampilkan respons dari server\
      localStorage.setItem('authToken', true);

      setIsRegistered(true);
    }
     catch (error) {
      console.log(error);
    }
  };

  if (isRegistered) {
    return <Navigate to="/" />
  }

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
        <a href="/login">
          <button className="btn btn-link text-white no-underline">
            <AiOutlineVerticalRight size={20} className="text-white" /> Back
          </button>
        </a>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register </h1>
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
                  Register
                </button>
              </div>
              <label className="label text-2xl">
                <a href="/login" className="label-text-alt link link-hover">
                  already have an account?
                </a>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
