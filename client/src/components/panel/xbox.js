import * as React from "react";
import { Square } from '../../assets'
import './style.css';

const xbox = (props) => {
    return (
        <div className='blue-top-box'>
            <h4 className='panel_header'>{props.head}</h4>
            <button onClick={props.clickClosed} className='panel_btn'>X</button>
            <button onClick={props.expShr} className='panel_btn'><img src={Square} alt='#'/></button>
            <button onClick={props.minimize} className='panel_btn'>_</button>
        </div>
    );
}

export default xbox;