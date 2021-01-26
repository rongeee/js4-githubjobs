import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const JobDetailPage = () => {
  const location = useLocation();
  const params = useParams();
  const [currentData, setCurrentData] = useState(location?.state?.item);

  const getJobDetails = () => {
    const url = `https://us-central1-wands-2017.cloudfunctions.net/githubjobs?id=${params.id}`;

    return fetch(url).then((res) => res.json());
  };

  useEffect(() => {
    if (!currentData) {
      getJobDetails().then((data) => setCurrentData(data));
    }
  }, []);

  return (
    <Wrapper>
      {currentData && (
        <div>
          <h2>{currentData.title}</h2>
          <img src={currentData.company_logo} alt="Logotype" />
          <strong>{currentData.type}</strong>
          <a href={currentData.company_url}>Apply Now!</a>
          <div dangerouslySetInnerHTML={{ __html: currentData.description }} />
        </div>
      )}
    </Wrapper>
  );
};

export default JobDetailPage;

const Wrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
