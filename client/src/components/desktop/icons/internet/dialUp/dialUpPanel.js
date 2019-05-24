import React from "react";
import { DialUpGif } from '../../../../../assets';
import './style.css';

// dial up box for while internet is loading
const dialUpPanel = (props) => {
    return(
        <div className='dial-up-panel'>
            <div id='internet-blue-top-box' className='blue-top-box'>
                <h4 className='panel_header'>Dialing Progress</h4>
                <button onClick={props.clickClosed} className='panel_btn'>X</button>
            </div>
            <img className='dial-up-gif' src={DialUpGif} alt='#'></img>
            <div className='dial-up-txt'>
                <h5>Connect to My Connection</h5>
                <span className='on-border'>Action</span>
                <p>Dialing attempt 1 of 5</p>
                <span className='on-border'>Status</span>
                <p>Dialing...</p>
                <div className='cancel-btn'>                    
                    <button className='windows-btn' onClick={props.clickClosed} ><span>Cancel</span></button>
                </div>
            </div>
        </div>
    );
}

export default dialUpPanel;