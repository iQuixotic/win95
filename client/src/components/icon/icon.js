import React from "react";
import Draggable from 'react-draggable';
import './style.css';

const Icon = (props) => {
    return(
        // <Draggable>
            <div className='icon-plus-txt' >
                <img id={props.id} onDoubleClick={props.onDoubleClick} 
                className='icon' src={props.src} alt='#'></img>
                <p className='icon-txt'>{props.iconName}</p>
            </div>
        // </Draggable>
    );
}

export default Icon;