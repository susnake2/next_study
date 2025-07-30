import { Suspense } from "react";
import MovieVideos from "../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../components/movie-info";

export async function generateMetadata({ params }: any) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: any) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}
