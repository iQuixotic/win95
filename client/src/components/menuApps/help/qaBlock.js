import React from "react";
import './style.css';

const qaBlock = (props) => {
    return(
        <li>
            <p className='help-question'>{props.question}</p>
            <p className='help-answer'>{props.children}</p>
        </li>
    );
}

export default qaBlock;
