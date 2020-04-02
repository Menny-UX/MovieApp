import React, { useState, useEffect } from 'react';
import './search.css'
import {Search, ChevronDown} from 'react-feather'
import { useStore } from "../../store";
import {useHistory} from "react-router-dom"

const MovieSearch = () => {
    const {state, dispatch} = useStore();
    const [name, setName] = useState('');
    const [selection, setSelection] = useState('');
    const [dropdown, setDropdown] = useState(true)
    const {search, selected } = state;
    const history = useHistory()

    const handelSearch =(e)=>{
        setName(e.target.value)
        const tempname = e.target.value.toLowerCase()
        if( tempname.length >= 2 ){
            dispatch({type: "Search_Similar", string:`${tempname}`})
        }else if(tempname.length === 0){
            dispatch({type: "Clear_Search"})
        }
    }
    const handelSelection = (e) =>{
        setSelection(e.target.value)
        console.log('e.target.name',e.target.value)
        dispatch({type:"Get_Movie_byID", id:`${e.target.value}`})
    }

    useEffect(()=>{
        setName(selected.title)
        history.push(`/movies/${selection}`)
    },[selection])

    return ( 
    <div className="search-container">
        <div className='search-header'>
            <input  className='search-input' 
            value={name} name='search'
            onChange={(e)=>{handelSearch(e)}}
            placeholder="Search By Movie Name...."
            />
           
            <Search/>
        </div>
        <div className='search-dropdown__container'>
            {
                search.length > 0 &&
                <>
                {
                    dropdown ?
                    <div className='dropdown'>
                        <select className='search-dropdown' 
                        onChange={(e)=>handelSelection(e)}>
                            {
                                search.map((opt)=> <option 
                                         key={opt.id}
                                         value={opt.id}>
                                             {opt.title}
                                         </option> 
                             )}
                        </select>
                    </div>
                    : null
                }
                <ChevronDown className='search-dropdown__icon'/>
                </>
            }
        
        </div>

    </div> 
    );
}
 
export default MovieSearch;