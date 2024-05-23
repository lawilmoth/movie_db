"use client";

import { MovieList } from "../components";

export default function App() {
  return <MovieList apiPath={"movie/now_playing"} title={"Home"} />;
}
