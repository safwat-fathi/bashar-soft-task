import React, { useState, useEffect, useCallback } from "react";
// api
import { debounceFunction } from "../../api";
// assets
import SearchIcon from "./search.svg";
// styles
import "./style.scss";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [response, setResponse] = useState([]);

  const fetchQuery = (query) => {
    return fetch(
      `http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
      });
  };

  const debounceSearch = useCallback(
    debounceFunction((nextValue) => fetchQuery(nextValue), 1000),
    []
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    debounceSearch(e.target.value);
  };

  // useEffect(() => {
  //   console.log(searchQuery);
  //   fetchQuery(searchQuery);
  // }, [searchQuery]);

  useEffect(() => {
    // console.log(response);
  }, [response]);

  return (
    <div className="search">
      <div role="form" className="search__form">
        <input
          type="text"
          placeholder="search keyword"
          onChange={handleSearch}
        />
        <div className="image">
          <img src={SearchIcon} alt="Search" />
        </div>
      </div>
    </div>
  );
};

export default Search;
