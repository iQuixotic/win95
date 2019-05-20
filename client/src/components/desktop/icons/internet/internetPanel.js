import React from "react";
import './style.css';
// import { DialUpPanel } from '../../../../components';

const InternetPanel = (props) => {
    return(
        <div className='internet-panel'>
            <div className='center-page'>
                <span className='lb'>i</span><span className='green'>Q</span>
                <span className='red'>u</span><span className='lb'>o</span>
                <span className='yellow'>o</span><span className='green'>g</span>
                <span className='lb'>l</span><span className='red'>e</span>

                <div><input className='googlish-txt-box' type='text' /></div>
                <div><input className='googlish-btn' type='button' value='Search'/></div>
            </div>
        </div>
    );
}

export default InternetPanel;