import React from "react";
// import Draggable from 'react-draggable';
import './style.css';

const Icon = (props) => {
    return(
        <div className='icon-plus-txt' 
            id={props.id} onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <img  className='icon' src={props.src} alt='#' />
            <p className='icon-txt'>{props.iconName}</p>
        </div>
    );
}

export default Icon;