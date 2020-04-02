import React from 'react';
import { useEffect } from 'react';
import {useStore} from '../../store'
import './detail.css'

const Details = ({match}) => {
    const {state , dispatch } = useStore()
    const {selected} = state;

    useEffect(()=>{
        dispatch({type:"Get_Movie_byID", id:`${match.params.id}`})
    },[])
    useEffect(()=>{
        console.log('selected',selected)
    },[selected])

    return ( <div>
        {
            selected ?
            <div className='movie-detail__container' style={{position:'relative'}}>
       
            <div className='movie-detail' >
        <img className='movie-detail__image' src={`https://image.tmdb.org/t/p/w500/${selected.poster_path}`}></img>
        <div className='movie-detail__details'>
        <div className='movie-detail__title'> {selected.title} </div>
        <div className='movie-detail__overview'> {selected.overview} </div>
            <div className="detail-items">
            <div className="detail-item">
                <div className="type">release</div>
                <div className="value"> {selected.release_date} </div>
            </div>
            <div className="detail-item">
                <div className="type">vote</div>
                <div className="value">{selected.vote_average}</div>
              
            </div>
            </div>
        </div>
        </div>
        <img className='movie-detail__background' src={`https://image.tmdb.org/t/p/w500/${selected.backdrop_path}`}/>
        </div>
        :
        <div>Loooading..... </div>             
        }

    </div>
     );
}
 
export default Details;