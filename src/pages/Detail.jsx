import { useParams } from "react-router-dom";
import movies from "./movies";
import ReactPlayer from 'react-player';
import { useState } from "react";
import Suggestions from "./Suggestions";
import MovieCard from "../componenets/MovieCard";
import { Link } from "react-router-dom";

let UnMuteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-volume-up fill-white" viewBox="0 0 16 16">
<path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z"/>
<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z"/>
<path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11"/>
</svg>
)
  let MuteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-volume-mute fill-white" viewBox="0 0 16 16">
  <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0"/>
</svg>
  );

function Detail(){
    let {slug} = useParams();
    let movie = movies.find(m => m.slug == slug);
    let suggestions = movies.filter((m) => m.genre == movie.genre && m.imdb_rating >= movie.imdb_rating);
    console.log(suggestions);
    
    let [volume, setVolume] = useState(true);
    function muteHandler(){
        setVolume((pre) => !pre)
    }
    return (
        <>
            <div className="relative w-full h-[80vh] overflow-hidden mt-[125px] z-0">
                <ReactPlayer url={movie.youtube_trailer} width="100vw" muted={volume} playing className="scale-[1.6]" height="80vh" controls loop></ReactPlayer>
                <div className="absolute left-24 top-56 w-[500px]">
                    {
                        movie.imdb_rating > 8 ? <div className="bg-green-700 inline-block px-3 py-1 rounded text-xs text-white">IMDB Rating {movie.imdb_rating}</div> : <div className="bg-orange-700 inline-block px-3 py-1 rounded text-xs text-white">IMDB Rating {movie.imdb_rating}</div>
                    }
                    
                    <h1 className="text-white mt-2 text-5xl font-black">{movie.title}</h1>
                    <p className="mt-4 text-white">{movie.description}</p>
                    <button className="rounded-lg bg-white px-5 py-2 mt-3">Add to WatchList</button>
                </div>
                <Link to="/">
                    <button className="absolute top-5 px-4 py-1 text-white right-20 border border-white rounded-md">Go Back</button>
                </Link>
                <button className="absolute top-[330px] right-20 border border-white rounded-full h-10 w-10 flex items-center justify-center" onClick={muteHandler}>{volume ? <UnMuteIcon/> : <MuteIcon/>}</button>
                
            </div>
            <div className="mt-20 w-[90vw] mx-auto mb-16">
                <div className="text-white text-2xl">More Like these</div>
                {/* <div className="flex mt-2 flex-shrink gap-4">
                {
                    suggestions.map(sugg => <Suggestions img={sugg.img}></Suggestions>)
                }
                </div> */}
                <div className="flex mt-2 flex-shrink gap-4">
                {
                    suggestions.map(sugg => <MovieCard img={sugg.img} slug={sugg.slug}></MovieCard>)
                }
                </div>
                    
            </div>
            
        </>
    )
}

export default Detail;