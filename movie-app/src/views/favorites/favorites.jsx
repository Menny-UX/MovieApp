import React, {useEffect} from 'react';
import {useStore} from '../../store'
import './favorites.css'
import {useHistory} from 'react-router-dom';

const Favorites = () => {
    const {state , dispatch } = useStore()
    const {favoritsObj, favorits}  = state;
    const history = useHistory()
 
    useEffect(()=>{
        dispatch({type:"Get_Fav_Movies"})
    },[])

    const handelDetail = (e, movieId) =>{
        history.push(`/movies/${movieId}`)
    }

    return ( <div>
          <div className='' >
          <h2 className='favourit-title'>
                my favourits
            </h2>
            <div className='favourits-grid'>
                {favoritsObj && favoritsObj.length > 0?
                    favoritsObj.map((el)=> <div className="favourit-movie" onClick={(e)=>handelDetail(e,`${el.id}`)}>
                        <div key={el.id} className="favourit-movie__image">
                            <img src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}></img>
                        </div>
                        <div  className="favourit-movie__title">{el.title}</div>
                      </div>
                        
                    )
                    :
                    <div>No Favorites Available...</div>
                }
                
            </div>
          </div>
    </div> );
}
 
export default Favorites;