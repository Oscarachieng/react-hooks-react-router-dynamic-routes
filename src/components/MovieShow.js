import React from "react";
import { useParams } from "react-router-dom";


const MovieShow = ({movies}) => {

    const params = useParams()
    console.log(params)
    return (
        <div>
            <h3>Show my movies List here today.</h3>
            {/* <h3>{movies[params.movieId].title}</h3> */}
        </div>
    )
}

export default MovieShow;