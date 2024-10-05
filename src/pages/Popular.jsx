import movies from "./movies";
import MovieCard from "../componenets/MovieCard";

function Popular(){
    let movieList = movies.filter((movie) => movie.imdb_rating > 8);
    return (
        <>
            <div className="flex w-[90vw] mx-auto mt-[125px] flex-wrap gap-4 justify-center">
                {
                   movieList.map((movie) => <MovieCard img={movie.img} slug={movie.slug}></MovieCard>) 
                }
            </div>
        </>
    )
}

export default Popular;