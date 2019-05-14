import React from "react";
import Draggable from 'react-draggable';
import './style.css';

const Icon = (props) => {
    return(
        <Draggable>
            <div className='icon'>
                <img id={props.id} onDoubleClick={props.onDoubleClick} className='icon' src={props.src} alt='#'></img>
            </div>
        </Draggable>
    );
}

export default Icon;