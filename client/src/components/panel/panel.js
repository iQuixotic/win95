import * as React from "react";
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
// import { Corners } from '../../containers';
import './style.css';

const panel = (props) => {
    return (
                <Draggable>
                {/* className='panel-starting-position panel'> */}
                    <div id={props.panelId} className='panel-starting-position panel'>    
            <Resizable className='panel'>
                        <div  className='blue-top-box'>
                            <h4 className='panel_header'>{props.head}</h4>
                            <button onClick={props.clickClosed} className='panel_btn'>X</button>
                            <button className='panel_btn'>S</button>
                            <button className='panel_btn'>-</button>
                        </div>
                        <iframe title='winder' className='inner-frame' src="http://www.iquixotic.com"></iframe>
                        {/* <Corners cn='corner top-right'/>
                        <Corners cn='corner top-left'/>
                        <Corners cn='corner bottom-right'/>
                        <Corners cn='corner bottom-left'/> */}
                </Resizable>
                    </div>
            </Draggable>
    );
}

export default panel;