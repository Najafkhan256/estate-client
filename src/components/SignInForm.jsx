import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const SignInForm = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hanldeChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-center text-3xl font-semibold my-5 uppercase">
        sign in
      </h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white rounded border-2 border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 resize-none transition-colors duration-200 ease-in-out"
              onChange={hanldeChange}
            />

            <input
              id="password"
              type="password"
              name="password"
              autoComplete="true"
              placeholder="Password"
              className="w-full bg-white rounded border-2 border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 resize-none transition-colors duration-200 ease-in-out"
              onChange={hanldeChange}
            />

            <button
              type="submit"
              // disabled={loading}
              className="text-white bg-gray-700 border-0 py-3 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg w-full uppercase"
            >
              {loading ? "Loading..." : "Sign in"}
            </button>
          </div>
        </form>
        <button className="text-white bg-red-600 border-0 py-3 px-6 mt-4 focus:outline-none hover:bg-red-500 rounded text-lg w-full uppercase">
          continue with google
        </button>
        <p className="text-md text-gray-500 mt-3">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-500 underline">
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default SignInForm;
