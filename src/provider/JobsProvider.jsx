import React, { createContext, useState } from "react";

export const JobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  return <JobsContext.Provider value={{ data, setData }}>{children}</JobsContext.Provider>;
};

export default JobsProvider;
