import React from "react";
import { DialUpGif } from '../../../../assets';
import Draggable from 'react-draggable';
import './style.css';

const DialUpPanel = (props) => {
    return(
        <Draggable>
        <div className='dial-up-panel'>
            <div id='internet-blue-top-box' className='blue-top-box'>
                <h4 className='panel_header'>Dialing Progress</h4>
                <button onClick={props.clickClosed} className='panel_btn'>X</button>
            </div>
            <img className='dial-up-gif' src={DialUpGif} alt='#'></img>
            <div className='dial-up-txt'>
                <h5>Connect to My Connection</h5>
                <h5 className='on-border'>Action</h5>
                <p>Dialing attempt 1 of 5</p>
                <h5 className='on-border'>Status</h5>
                <p>Dialing...</p>
                <div className='cancel-btn'>                    
                    <button className='windows-btn' onClick={props.clickClosed} ><span>Cancel</span></button>
                </div>
            </div>
        </div>
            </Draggable>

    );
}

export default DialUpPanel;