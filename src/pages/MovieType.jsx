import movie from "./movies";
import MovieCard from "../componenets/MovieCard";
import { useParams } from "react-router-dom";

function MovieType(){
    let {type} = useParams();
    let movieList = movie.filter((movie) => movie.type == type)
    return (
        <>
            <div className="flex w-[90vw] mx-auto mt-[125px] flex-wrap gap-4 justify-center">
                {
                    movieList.map(movie => <MovieCard img={movie.img} slug={movie.slug}></MovieCard>)
                }
            </div>
        </>
    )
}

export default MovieType;