import React from "react";
import Draggable from 'react-draggable';
import './style.css';

const Icon = (props) => {
    return(
        <Draggable>
            <div onDoubleClick={props.onDoubleClick} className='icon'>
                <img className='icon' src={props.src} alt='#'></img>
            </div>
        </Draggable>
    );
}

export default Icon;