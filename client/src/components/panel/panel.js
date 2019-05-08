import * as React from "react";
import Draggable from 'react-draggable';
import { Corners } from '../../containers';
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
                        <iframe title='winder' className='inner-frame' src="http://www.iquixotic.com"></iframe>
                        <Corners cn='corner top-right'/>
                        <Corners cn='corner top-left'/>
                        <Corners cn='corner bottom-right'/>
                        <Corners cn='corner bottom-left'/>
                    </div>
            </Draggable>
    );
}

export default panel;