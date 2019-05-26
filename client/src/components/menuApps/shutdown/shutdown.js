import React from "react";
import './style.css';

const shutdownPanel = (props) => {
    return(
        <div className='shutdown-panel'>
            <div className='shutdown-panel-content'>
                <p className='red-txt'>FEATURE COMING SOON! </p>
                <p>Feature development is currently in progress...</p>
            </div>
            <div className='cancel-btn'>                    
                <button className='windows-btn' onClick={props.clickClosed} ><span>OK</span></button>
            </div>
        </div>

    );
}

export default shutdownPanel;