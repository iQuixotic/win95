import * as React from "react";
import './style.css';

const xbox = (props) => {
    return (
        <div className='blue-top-box'>
            <h4 className='panel_header'>{props.head}</h4>
            <button onClick={props.clickClosed} className='panel_btn'>X</button>
            <button onClick={props.expShr} className='panel_btn'>S</button>
            <button onClick={props.minimize} className='panel_btn'>-</button>
        </div>
    );
}

export default xbox;