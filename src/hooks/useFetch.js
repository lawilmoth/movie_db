"use client";
import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  //const url = `https://api.themoviedb.org/3/${apiPath}?api_key=593703f8b9dbdc3441f322311948c877&query=${queryTerm}`;
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=593703f8b9dbdc3441f322311948c877&query=%22%22";
  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      console.log(response.status);
      setData(json.results);
    }
    fetchMovies();
  }, [url]);
  console.log(data);
  return { data };
};
