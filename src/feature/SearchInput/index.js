import React, { useState, useEffect, useCallback } from "react";
// api
import { debounceFunction } from "../../services";
// assets
import SearchIcon from "./search.svg";
// styles
import styles from "./SearchInput.module.scss";

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
    debounceFunction((nextValue) => fetchQuery(nextValue), 800),
    []
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    debounceSearch(e.target.value);
  };

  useEffect(() => {
    // console.log(response);
  }, [response]);

  return (
    <div className={styles.search}>
      <div role="form" className={styles.form}>
        <input
          type="text"
          placeholder="search keyword"
          onChange={handleSearch}
        />
        <div className={styles.image}>
          <img src={SearchIcon} alt="Search" />
        </div>
      </div>
      <div className={styles.results}>
        <ul>
          <li>
            <a href="#">link 1</a>
          </li>
          <li>
            <a href="#">link 2</a>
          </li>
          <li>
            <a href="#">link 3</a>
          </li>
          <li>
            <a href="#">link 3</a>
          </li>
          <li>
            <a href="#">link 3</a>
          </li>
          <li>
            <a href="#">link 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
