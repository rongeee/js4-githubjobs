import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const JobList = ({ results }) => {
  if (results && results.length < 1)
    return (
      <JobWrapper>
        <p>No Jobs Found</p>
      </JobWrapper>
    );
  return (
    <>
      {results &&
        results.map((item, i) => {
          return (
            <JobWrapper key={i} className="job-list">
              <Image src={item.company_logo} alt="Logotype" className="image" />
              <TextWrapper>
                <p>{item.title}</p>
                <div>
                  <small>{item.location}</small>
                </div>
              </TextWrapper>
              <StyledLink to={{ pathname: `/jobs/${item.id}`, state: { item } }} className="job-link">
                View Listing
              </StyledLink>
            </JobWrapper>
          );
        })}
    </>
  );
};

export default JobList;

const JobWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 500px;
  margin: 1em auto;
  border-radius: 15px;
  border: 1px solid #b6b6b6;
  padding: 1em;
`;

const Image = styled.img`
  max-width: 75px;
  height: 100%;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
  margin-left: 1em;
`;

const StyledLink = styled(Link)`
  width: 85px;
`;
