import React, { useContext } from "react";
import SearchActionBar from "../components/SearchActionBar";
import JobList from "../components/JobList";
import { JobsContext } from "../provider/JobsProvider";

const SearchPage = () => {
  const { setSearchResults, searchResults } = useContext(JobsContext);
  return (
    <div className="search-container">
      <SearchActionBar setSearchResults={setSearchResults} />
      <JobList results={searchResults} />
    </div>
  );
};

export default SearchPage;
