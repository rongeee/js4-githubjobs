import React, { useState } from "react";
import SearchActionBar from "../components/SearchActionBar";
import JobList from "../components/JobList";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState();

  return (
    <div className="search-container">
      <SearchActionBar setSearchResults={setSearchResults} />
      <JobList results={searchResults} />
    </div>
  );
};

export default SearchPage;
