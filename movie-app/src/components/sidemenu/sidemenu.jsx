import React from 'react';
import './sidemenu.css';
import { Link } from 'react-router-dom'
import {Video ,Play ,Heart ,Activity ,ChevronsDown } from 'react-feather'

const Sidemenu = () => {
    return ( <div className="sidemenu-container">
        <div className="sidemenu-logo">
            <p>M</p>
            <Video size='2rem'/>
        </div>
        <div className='sidemenu-menu'>
            <div className='sidemenu-section'>
            <p className='sidemenu-section__title'>discover</p>
            <ul>
                <li className={['sidemenu-section__subsection', 'selected'].join(' ')}>
                    <Link  to="/movies/discover/topmovies">
                        <Activity />
                        <p>top movies</p>
                    </Link>
                </li>
                <li className='sidemenu-section__subsection'>
                    <Link  to="/movies/discover/upcoming">
                        <ChevronsDown />
                        <p>up coming</p>
                    </Link>
                </li>
                <li className='sidemenu-section__subsection'>
                    <Link  to="/movies/discover/nowplaying">
                        <Play />
                        <p>now playing</p>
                    </Link>
                </li>
            </ul>
            </div>
            <div className='sidemenu-section'>
            <p className='sidemenu-section__title'>favorites</p>
            <ul className='sidemenu-section__subsection'>
                <Link to="/movies/favorites">
                    <Heart className="favorites-icon" />
                </Link>
            </ul>
            </div>
         
        </div>
      
    </div> 
    );
}
 
export default Sidemenu;