import React, { useEffect, useState , useRef} from 'react';
import './moviesRow.css';
import {ChevronsRight, ChevronsLeft} from 'react-feather'

import Movie from './movie/movie'
const MoviesRow = ({ moviesList ,listTitle, em}) => {
    const [x, setX ] = useState(-44.4)
    const maxWidth = useRef(null)
    const handelGoLft = () =>{
       x === 0 ? setX(-44.4*(moviesList.length - 1)) : setX(x + 44.4)
    }
    const handelGoRgt = () =>{
        x === -44.4*(moviesList.length - 1) ? setX(0) : setX(x - 44.4)
    }

    return ( 
    <div className='movieList-container' ref={maxWidth}>
        <h3 className='movieList-title'>
            <strong>{em}</strong>  {listTitle}
        </h3>
        <div className="movieList-Row__list">
            <div className="movieList-Row__slider">
                    {
                        moviesList.status === 'pending' ?
                        <div>Loooooding!!!</div>
                        :
                        moviesList.data.map((el,idx) => {
                         return < Movie key={idx} movie={el} style={{transform:`translateX(${x}rem)`}} />
                        })
                    } 
            </div>
            {
                x===0 ||
            <div className="goLft" onClick={handelGoLft}>
                <ChevronsLeft/>
            </div>
            }
            <div className="goRgt" onClick={handelGoRgt}>
                <ChevronsRight/>
            </div>
        </div>
    </div> 
    );
}
 
export default MoviesRow;