import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import MoviesRow from './../../components/moviesList/moviesRow';
import { useStore } from "../../store";


const Home = () => {
    const params = useParams()
    const {state, dispatch} = useStore();
    const { topMovies, upComing, nowPlaying } = state;

    return ( <div>
            <MoviesRow moviesList={topMovies}  em="top" listTitle="movies" />
            <MoviesRow moviesList={upComing} em="up" listTitle="coming" />
            <MoviesRow moviesList={nowPlaying} em="now" listTitle="playing" />
    </div> );
}
 
export default Home;