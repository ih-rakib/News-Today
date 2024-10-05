"use client";

import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    // console.log(credentials);
    alert("Logged in successfully!");
    // Reset form
    setCredentials({ email: "", password: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className="block text-slate-600 dark:text-slate-300 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={credentials.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400"
            />
          </div>

          <div>
            <label
              className="block text-slate-600 dark:text-slate-300 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 dark:focus:ring-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-600 text-white py-3 rounded-lg shadow-md hover:bg-slate-700 dark:hover:bg-slate-500 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <a
            href="/register"
            className="text-slate-600 dark:text-slate-300 hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
