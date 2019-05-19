import React from "react";
// import { Panel } from '../../../components';
import './style.css';

const HelpPanel = (props) => {
    return(
        <div className='help-panel'>
            <div className='help-panel-content'>
                <h4>FAQ's</h4>
                <ul>
                    <li>
                        <p className='help-question'>Why?</p>
                        <p className='help-answer'>Windows 95, while not as performant as 
                        more recent OS, is objectively more aesthetically pleasing than any operating 
                        system before or since.</p>
                    </li>
                    <li>
                        <p className='help-question'>What inspired this?</p>
                        <p className='help-answer'>Whenever I was first learning javascript and css,
                        my peers once told me that the style reminded them of the 90s... At some point, 
                        this website was destined to be.</p>
                    </li>
                    <li>
                        <p className='help-question'>Are the panels draggable?</p>
                        <p className='help-answer'>Yes. All panels are draggable and can be grabbed
                        at the blue area and dropped anywhere on screen.</p>
                    </li>
                    <li>
                        <p className='help-question'>How can I resize a panel?</p>
                        <p className='help-answer'>Either use the SQUARE expansion button OR 
                        click and drag panels at the edge (only portfolio items).</p>
                    </li>
                    <li>
                        <p className='help-question'>Is this website mobile responsive?</p>
                        <p className='help-answer'>Not yet.</p>
                    </li>
                    <li>
                        <p className='help-question'>How do I view your previous projects?</p>
                        <p className='help-answer'>Navigate from Start > Projects > (Pick One) </p>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default HelpPanel;