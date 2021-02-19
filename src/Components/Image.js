import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Image.css";
import styled, { keyframes } from "styled-components";

const opaque = keyframes`
100%{
  opacity:0;
}

`;

const StyledImage = styled.div`
  img {
    width: 45%;
    border-radius: 10%;
    border: double 4px #a9def9;
    &:hover {
      animation: ${opaque} 3.5s step-start;
    }
  }

  h1 {
    color: #a9def9;
    font-size: 4em;
    font-family: "Courier New", Courier, monospace;
  }
`;

const StyledP1 = styled.p`
  color: #a9def9;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

const StyledP2 = styled.p`
  color: #a9def9;
  max-width: 60%;
  margin: 0 auto;
  padding-top: 1em;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;

const StyledP3 = styled.p`
  color: #a9def9;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
`;
function Image() {
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=lMOsXvCCkltaQipn1fW9XzGqZWvvOoo7d4pNSdZa&date=`
      )
      .then((response) => {
        setNasaData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!nasaData) return <h1> Loading ...</h1>;

  return (
    <StyledImage>
      <h1>{nasaData.title}</h1>
      {nasaData.media_type === "image" ? (
        <img alt="NASA" src={nasaData.hdurl} />
      ) : (
        <iframe
          src={nasaData.url}
          width="50%"
          height="400"
          title="Today's Video"
        />
      )}
      <div>
        <StyledP1>Date: {nasaData.date}</StyledP1>
        <input input type="date" />

        <StyledP2>{nasaData.explanation}</StyledP2>
      </div>
      <StyledP3>Copyright: {nasaData.copyright} </StyledP3>{" "}
      {/*//! MAKE DYNAMIC TO CHOOSE WHATEVER DATE IS CHOSEN FROM INPUT*/}
    </StyledImage>
  );
}

export default Image;
