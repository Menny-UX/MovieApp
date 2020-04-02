import React, { useEffect } from 'react';
import './App.css';
import Search from './components/search/search'
import Sidemenu from './components/sidemenu/sidemenu'
import Home from './views/home/home'
import Favorites from './views/favorites/favorites'
import Detail from './views/detail/detail'
import {getTopMovies , getUpComing , getNowPlaying} from './store/service';

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";

import { useStore } from "./store"

function App({props}) {
  const {state, dispatch} = useStore();
  useEffect(()=>{
    dispatch({type: "Get_Fav_Local"})
    dispatch({type: "Getting_TOP_MOVIES"})
    dispatch({type: "Getting_UpComing"})
    dispatch({type: "Getting_NowPlaying"})

    const Response = getTopMovies();
    Response.then((res)=>{
        dispatch({type: "Set_TOP_MOVIES", response:{...res}})
    }).catch((err)=>{
        console.log('err',err)
    })
    const UpComingRes = getUpComing()
    UpComingRes.then((res)=>{
        dispatch({type: "Set_UpComing", response:{...res}})
    }).catch((err)=> {
        console.log('err',err)
    })
    const NowPlayingRes = getNowPlaying ()
    NowPlayingRes.then((res)=>{
        dispatch({type: "Set_NowPlaying", response:{...res}})
    }).catch((err)=>{
        console.log('err',err)
    })
  },[])

  useEffect(()=>{
    console.log('state.Favorites', state.Favorites)
  },[state.Favorites])
  return (
    <Router>
    <div className="layout-container" >
        <Sidemenu />
        <div className="layout-body" >
          <Search />
          <div className="page-container" >
            <Switch>
              <Route exact path="/movies/favorites" component={Favorites} />
              <Route exact path="/movies/discover/:type" component={Home} />
              <Route exact path="/movies/:id" component={Detail} />
              <Route path="/movies" component={Home} />
              <Redirect from='/' to="/movies" />
            </Switch>
          </div>
        </div>
    </div>
    </Router>

  );
}

export default App;







