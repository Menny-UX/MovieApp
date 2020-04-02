import React, { createContext, useContext, useReducer, useEffect } from 'react';
import {reducer} from './reducer'

const StoreContext = createContext();
const initialState = {
    topMovies: { fetching:false, status:'', data:[], page:0 ,totalPage:0, error: ''},
    upComing: {fetching:false, status:'', data:[], page:0 ,totalPage:0, error: ''},
    nowPlaying: {fetching:false, status:'', data:[], page:0 ,totalPage:0, error: ''},
    favorits: [],
    favoritsObj: [],
    search: [],
    selected : ''
    
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <StoreContext.Provider value={{state, dispatch}}>
        {children}
      </StoreContext.Provider>
    )
  }
  
  export const useStore = () => useContext(StoreContext);