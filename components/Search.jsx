import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className=" flex flex-row mt-2 mb-2 border-2 border-white/80 hover:border-fuchsia-800  justify-between rounde-md rounded-md max-w-md ">
    <div className="">
    <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mt-1 mr-2 text-white/80  transition duration-100 cursor-pointer"
          fill="none"
          viewBox="0 0 20 24"
          stroke="currentColor"
        >
          <path
            className="stroke-2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        </div>
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        className="placeholder:italic flex-auto outline-none text-white bg-transparent "
        type="text"
        placeholder="Search Hymn..."
      />
      <button className="bg-fuchsia-400 hover:bg-fuchsia-800 ml-2 rounded-r-sm bg-contain item ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-12 text-fuchsia-800 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            className="stroke-1"
            d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
          />
        </svg>
        
      </button>
    </div>
  );
}

export default Search;