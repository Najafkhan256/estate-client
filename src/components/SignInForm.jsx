import React from "react";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-center text-3xl font-semibold my-5 uppercase">
        sign in
      </h2>
      <div>
        <form>
          <div className="flex flex-col gap-4">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white rounded border-2 border-gray-300 focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 resize-none transition-colors duration-200 ease-in-out"
            />

            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-white rounded border-2 border-gray-300 focus:border-gray-500 text-base outline-none text-gray-700 py-3 px-3 resize-none transition-colors duration-200 ease-in-out"
            />

            <button
              type="submit"
              className="text-white bg-gray-700 border-0 py-3 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg w-full uppercase"
            >
              Sign in
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
      </div>
    </div>
  );
};

export default SignInForm;
