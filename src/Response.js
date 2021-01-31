import React, { useState, useEffect } from "react";
import axios from "axios";

function Response() {
  const API__KEY = "b220f8c71cf6183dc2e4a9e23be929dc";
  const id = 213;
  const [response, setResponse] = useState({});
  const [response2, setResponse2] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API__KEY}&language=en-US`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/network/${id}?api_key=${API__KEY}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return <div></div>;
}

export default Response;

// https://api.themoviedb.org/3/network/${id}?api_key=${API_KEY}
