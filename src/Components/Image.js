import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Image.css";

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
    <div className="Image">
      <h1>{nasaData.title}</h1>
      {nasaData.media_type === "image" ? (
        <img alt="NASA" className="img" src={nasaData.hdurl} />
      ) : (
        <iframe
          src={nasaData.url}
          width="50%"
          height="400"
          title="Today's Video"
        />
      )}
      <div>
        <p>Date: {nasaData.date}</p>
        <p>Copyright: {nasaData.copyright}</p>
        <p>{nasaData.explanation}</p>
      </div>
      {/* <input type="date"/> */}{" "}
      {/*//! MAKE DYNAMIC TO CHOOSE WHATEVER DATE IS CHOSEN FROM INPUT*/}
    </div>
  );
}

export default Image;
