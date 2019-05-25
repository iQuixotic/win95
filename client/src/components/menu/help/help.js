import React from "react";
import './style.css';

const helpPanel = (props) => {
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
                        click and drag panels along the left and top sides (only portfolio items).</p>
                    </li>
                    <li>
                        <p className='help-question'>Is this website mobile responsive?</p>
                        <p className='help-answer'>Not yet.</p>
                    </li>
                    <li>
                        <p className='help-question'>How do I view your previous projects?</p>
                        <p className='help-answer'>Navigate from Start > Projects > (Pick One) </p>
                    </li>
{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                    <li>
                        <p className='help-question'>What are the colors of iQuixotic Brand?</p>
                        <p className='help-answer'>Orange, Lime Green, and my favorite Deep Purple.</p>
                    </li>

                    <li>
                        <p className='help-question'>Why can't I...?</p>
                        <p className='help-answer'>Although inspired by Windows 95, this is not an operating system.
                        Although I could add several other features to make it more authentic, I don't want
                        to dwell on this project forever. These projects are meant to be beautiful... and ephemeral...
                        I could deffinately have added feature xyz, should I have wanted, but I like it this way.</p>
                    </li>
                    <li>
                        <p className='help-question'>Why can't I resize the non-website windows?</p>
                        <p className='help-answer'>I didn't want to stress on the mobile responsivity of each
                        tiny component and was much more concerned with capturing the essence of my style. ;)</p>
                    </li>

{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}

                </ul>
            </div>
        </div>

    );
}

export default helpPanel;