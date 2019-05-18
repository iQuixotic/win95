import React from "react";
import Draggable from 'react-draggable';
import './style.css';

const ShutdownPanel = (props) => {
    return(
        <Draggable>
            <div className='dial-up-panel'>
                <div id='internet-blue-top-box' className='blue-top-box'>
                    <h4 className='panel_header'>Dialing Progress</h4>
                    <button onClick={props.clickClosed} className='panel_btn'>X</button>
                </div>
                <div className='dial-up-txt'>
                    <div className='cancel-btn'>                    
                        <button className='windows-btn' onClick={props.clickClosed} ><span>Cancel</span></button>
                    </div>
                </div>
            </div>
        </Draggable>

    );
}

export default ShutdownPanel;