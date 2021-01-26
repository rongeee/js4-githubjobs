import React, { useState, useContext } from "react";
import styled from "styled-components";
import { JobsContext } from "../provider/JobsProvider";

const SearchActionBar = ({ setSearchResults }) => {
  const [searchInput, setSearchInput] = useState("");
  const { setData, data } = useContext(JobsContext);

  const replaceSpaces = () => {
    return searchInput.split(" ").join("+");
  };

  const getJobs = () => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?description=${replaceSpaces()}`;
    const searchHistory = data.find((item) => item.keyword === searchInput);

    if (searchHistory) {
      return setSearchResults(searchHistory.results);
    } else {
      return fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setSearchResults(result);
          setData((prevState) => [...prevState, { keyword: searchInput, results: result }]);
        });
    }
  };

  return (
    <Wrapper className="actionbar-container">
      <input type="text" name="search" value={searchInput} id="search" placeholder="Search Jobs..." onChange={(e) => setSearchInput(e.target.value)} />
      <button onClick={getJobs} className="search-button">
        Search
      </button>
    </Wrapper>
  );
};

export default SearchActionBar;

const Wrapper = styled.div`
  display: flex;
  margin: 2em;
  justify-content: center;
`;
