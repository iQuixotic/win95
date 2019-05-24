import React from "react";
import './style.css';
import { DialUpPanel } from '../../../../components';

const InternetPanel = (props) => {
    return(
        props.isDialing ? <DialUpPanel  {...props} /> : (
        <div className={props.panelSizeFull ? 'keep-it-one-hundred' : 'internet-panel-outer'}>
            <div className='internet-panel'>
                <div className='center-page'>
                    {/* <span className='lb'>i</span> */}
                    <span className='green'>Q</span>
                    <span className='red'>u</span><span className='lb'>o</span>
                    <span className='yellow'>o</span><span className='green'>g</span>
                    <span className='lb'>l</span><span className='red'>e</span>

                    <div><input name='internetInput' onChange={props.keydown} id='internet-iq-input' className='googlish-txt-box' type='text' /></div>
                    <div><input onClick={props.click} className='googlish-btn' type='submit' value='SEARCH'/></div>
                </div>
            </div>
        </div>)
    );
}

export default InternetPanel;