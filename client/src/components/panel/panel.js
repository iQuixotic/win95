import * as React from "react";
import Draggable from 'react-draggable';
// import { Li } from '../../../components';
import './style.css';

const panel = (props) => {
    return (
        <Draggable>
            <div id={props.panelId} className='panel panel-starting-position'>    
                <div  className='blue-top-box'>
                    <h4 className='panel_header'>{props.head}</h4>
                    <button onClick={props.clickClosed} className='panel_btn'>X</button>
                    <button className='panel_btn'>S</button>
                    <button className='panel_btn'>-</button>
                </div>
            {/* <div  className='inner-frame '>

            </div> */}
                <iframe  className='inner-frame' src="http://www.iquixotic.com"></iframe>
            </div>
        </Draggable>
    );
}

export default panel;