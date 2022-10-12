import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useGetSongRelatdQuery } from "../redux/services/shazamCore";

import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setsearchQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };
  // search value 放到 query
  // const { data, isFetching, error } = useGetSongRelatdQuery(value);
  // server 處理好 data -> 直接 render 頁面
  return (
    <div>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className=" w-[800px] p-2 text-gray-400 focus-within:text-gray-600"
      >
        <label htmlFor="search-field" className="sr-only">
          Search all songs
        </label>
        <div className="flex flex-row justify-start items-center">
          <FiSearch className="w-5 h-5 ml-4" />
          <input
            name="search-field"
            id="search-field"
            autoComplete="off"
            placeholder="Search"
            type="search"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            className="flex-1  bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
