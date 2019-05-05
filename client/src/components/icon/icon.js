import React from "react";
import './style.css';

const Icon = (props) => {
    return(
        <div className='icon'>
            <img className='icon' src={props.src} alt='#'></img>
        </div>
    );
}

export default Icon;