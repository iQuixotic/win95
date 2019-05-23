import React from "react";
import './style.css';

const Icon = (props) => {
    return(
        <div className={props.cn}
            id={props.id} onClick={props.onClick}
            onDoubleClick={props.onDoubleClick}>
            <img  className='icon' src={props.src} alt='#' />
            <p className='icon-txt'>{props.iconName}</p>
        </div>
    );
}

export default Icon;