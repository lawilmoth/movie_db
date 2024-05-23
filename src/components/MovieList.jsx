import { useFetch } from "@/hooks/useFetch";
import { useTitle } from "@/hooks/useTitle";
import { Card1 } from "./";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => (
            <Card1 key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
