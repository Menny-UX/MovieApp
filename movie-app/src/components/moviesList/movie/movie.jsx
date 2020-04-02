import React, { useState } from 'react';
import './movie.css'
import { useStore } from "../../../store";
import {Heart} from "react-feather";
import {useHistory} from 'react-router-dom';

const Movie = ({movie, style}) => {
    const {state, dispatch} = useStore();
    const {favorits} = state;
    const history = useHistory()

    const handelLike = (e, movieId) =>{
        if(favorits.includes(movieId)) {
            dispatch({type:'Remove_Favourit', id:movieId})
        }else{
            dispatch({type:'Add_Favourit', id:movieId})
        }
    }
    const handelDetail = (e, movieId) =>{
        history.push(`/movies/${movieId}`)
    }

    return ( <div  style={style} onDoubleClick={(e)=>handelDetail(e,`${movie.id}`)} onClick={(e)=>handelLike(e,`${movie.id}`)}>
        <div className="movie-container__card" >
            { favorits.includes(`${movie.id}`) && 
            <Heart className='movie-fav__icon'/> }
            <img className="movie-card__image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <div className="movie-card__overlay">
                <div className="movie-card__detail">
                    <h4 className="movie-card__title">{movie.title}</h4>
                    <div className="movie-card__stats">
                        <div className="card-stat">
                            <div className="type">release</div>
                            <div className="value">{movie.release_date}</div>
                        </div>
                        <div  className="card-stat">
                            <div className="type">vote</div>
                            <div className="value">{movie.vote_average}</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
    );
}
 
export default Movie;