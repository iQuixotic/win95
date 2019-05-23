import * as React from "react";
import './style.css';

const xbox = (props) => {
    return (
        <div className='blue-top-box'>
            <h4 className='panel_header'>{props.head}</h4>
            <button onClick={props.clickClosed} className='panel_btn'><i className="fas fa-times lg" /></button>
            <button onClick={props.expShr} className='panel_btn'><i className="far fa-window-maximize maxi" /></button>
            <button onClick={props.minimize} className='panel_btn'><i className="far fa-window-minimize min" /></button>
        </div>
    );
}

export default xbox;