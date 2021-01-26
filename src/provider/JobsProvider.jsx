import React, { createContext, useState } from "react";

export const JobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState();
  return <JobsContext.Provider value={{ data, setData, searchResults, setSearchResults }}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
