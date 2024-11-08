import React from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  return (
    <>
      <div className="mt-2 mb-5">
        <div className="flex items-center justify-between gap-10 px-6 py-2">
          <Link to={"/Chapter/1"}>
            <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5">
              <div className="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
                <h1 className="text-yellow-500 text-lg">1</h1>
              </div>
            </button>
          </Link>

          <Link to={"/Chapter/1"}>
            <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
              <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
                <h1 className="text-yellow-500 text-lg">2</h1>
              </div>
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">3</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">4</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">5</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">6</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">7</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">8</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">9</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">10</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">11</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">12</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">13</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">14</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">15</h1>
            </div>
          </button>
          <button className="flex items-center h-16  w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">16</h1>
            </div>
          </button>
        </div>

        <div className="flex items-center justify-between gap-10 px-6">
          <button className="flex items-center h-16 w-96 rounded-md bg-blue-500 mt-5 ">
            <div class="bg-red-600 w-12 h-12 rounded-full ml-2 flex items-center justify-center">
              <h1 className="text-yellow-500 text-lg">17</h1>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Collection;
