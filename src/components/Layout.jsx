import React from "react";
import Header from "./Header";
import Footer from "./Footer"; // Ensure case matches
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-[#2f2f2f]">
      <>
        <Header />
        {/* Navigation buttons can be included here */}
        <div>
          <div>
            <div>
              <h1 className="font-samarkan text-5xl text-center mt-5 md:text-6xl lg:text-7xl">
                Chanakya Neethi
              </h1>
              <p className="mt-3 text-lg font-semibold text-gray-100 bg-gray-800 p-4 rounded-lg shadow-md sm:text-base md:text-lg lg:text-xl">
                <b className="text-yellow-400">Chanakya Neethi</b> (or Chanakya
                Niti) is a compilation of aphorisms and teachings by Chanakya,
                also known as Kautilya or Vishnugupta, who was an ancient Indian
                teacher, philosopher, economist, and advisor to Emperor
                Chandragupta Maurya. His strategic acumen and insights laid the
                foundation for the Maurya Empire in ancient India, and his works
                continue to be highly regarded for their practical wisdom on
                various aspects of life, governance, and personal conduct.
              </p>
            </div>
          </div>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mx-auto mb-8 max-w-screen-lg px-4">
          {[...Array(17)].map((_, index) => (
            <div key={index} className="mb-8">
              <Link to={`/chapter/${index + 1}`} className="w-full">
                <button className="flex items-center justify-start h-16 w-full sm:w-96 rounded-md bg-blue-500 mt-4 p-4">
                  <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <h1 className="text-yellow-500 text-xl font-bold">
                      {index + 1}
                    </h1>
                  </div>
                  <h1 className="text-2xl ml-6 font-bold text-white">
                    Chapter {index + 1}
                  </h1>
                </button>
              </Link>
            </div>
          ))}
        </div>
        <Outlet /> {/* This will render the content of the nested routes */}
        <Footer />
      </>
    </div>
  );
};

export default Layout;
