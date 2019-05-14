import React from "react";
import { DialUpGif } from '../../assets'
import './style.css';

const DialUpPanel = (props) => {
    return(
        <div className='dial-up-panel'>

            <img className='dial-up-gif' src={DialUpGif} alt='#'></img>
        </div>
    );
}

export default DialUpPanel;