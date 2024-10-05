import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsLetter = () => {
  return (
    <section className="bg-slate-800 text-white py-12 rounded-lg shadow-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold tracking-wide">
          Stay Connected
        </h2>
        <p className="mt-4 md:text-lg text-slate-300">
          Subscribe to our newsletter and be the first to receive the latest
          updates in your inbox.
        </p>

        {/* Subscription Form */}
        <form className="mt-8 sm:max-w-md mx-auto sm:flex sm:justify-center">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Your email address"
              className="w-full bg-slate-700 text-white border border-slate-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-500"
              required
            />
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <Button className="w-full sm:w-auto bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
