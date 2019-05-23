import * as React from "react";
import './style.css';

const xbox = (props) => {
    return (
        <div className='blue-top-box'>
            <h4 className='panel_header'>{props.head}</h4>
            <button onClick={props.clickClosed} className='panel_btn'><i size='lg' className="fas fa-times" /></button>
            <button onClick={props.expShr} className='panel_btn'><i className="far fa-window-maximize" /></button>
            <button onClick={props.minimize} className='panel_btn'><i className="far fa-window-minimize" /></button>
        </div>
    );
}

export default xbox;