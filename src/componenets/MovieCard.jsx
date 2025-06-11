import { Link } from "react-router-dom";

function MovieCard({img,slug}){
    return (
        <>
            <Link to={`/detail/${slug}`}>
                <div className="">
                    <img src={img} alt="" className="w-40 h-60 shrink-0 object-cover flex-grow rounded-xl" />
                </div>
            </Link>       
        </>
    )
}

export default MovieCard;