import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
// import { Link } from 'react-router-dom';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('a');

  const getSearchSuggetions = async () => {
    // const res = await fetch(
    //   `https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${searchQuery}`,
    //   {
    //     mode: 'no-cors',
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //     },
    //   }
    // );

    // const str = await res.text();
    // console.log(str, res);

    const url =
      'https://search-query-autocomplete-api.p.rapidapi.com/youtube?query=how%20to';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'dbac0d585fmsh448c81ac5484f0fp11a9d8jsn8c2bd168a140',
        'x-rapidapi-host': 'search-query-autocomplete-api.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    console.log(searchQuery);
    getSearchSuggetions();
  }, [searchQuery]);

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        <img
          onClick={() => toggleMenuHandler()}
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="menu"
        />
        <a href="/">
          <img
            className="w-40 mx-2 p-2"
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className="col-span-10 border-black px-10 mt-1">
        <input
          className="border border-gray-400 w-1/2 p-2 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 mt-1">
        <img
          className="w-10"
          src="https://freesvg.org/img/abstract-user-flat-4.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
