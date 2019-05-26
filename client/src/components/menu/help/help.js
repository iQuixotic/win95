import React from "react";
import { HelpPanelNav } from '../../../components';
import './style.css';

const helpPanel = (props) => {
    return(
        <div className='help-panel'>
            <div className='help-panel-content'>

                {/* Navigation area for help page */}
                <HelpPanelNav />

{/* - - - - - - - - - - - - - - - - - How do I - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                    
                <h4 id='help-pg-how-to'>How?</h4>
                    <ul>
                        <li>
                            <p className='help-question'>How do I get in contact with you?</p>
                            <p className='help-answer'><br/>Email: <strong>treyw1850@gmail.com</strong> <br/>Phone: <strong>(334) 342-8086</strong></p>
                        </li>
                        <li>
                            <p className='help-question'>Are the panels draggable?</p>
                            <p className='help-answer'>Yes. All panels are draggable and can be grabbed
                            at the blue area and dropped anywhere on screen.</p>
                        </li>
                        <li>
                            <p className='help-question'>The non-website windows won't resize along the edges.</p>
                            <p className='help-answer'>Resizing of this content is not allowed. This was a design choice. 
                            I wanted to focus on getting the style to look really nice inside a window so as not to hide all 
                            the hard work I put in on the desktop splash background.</p>
                        </li>
                        <li>
                            <p className='help-question'>How can I resize a panel?</p>
                            <p className='help-answer'>Either use the SQUARE expansion button OR 
                            click and drag panels along the left and top sides (only portfolio items).</p>
                        </li>
                        <li>
                            <p className='help-question'>How do I view your other projects?</p>
                            <p className='help-answer'>Navigate from Start > Projects > (Pick One) </p>
                        </li>
                        <li>
                            <p className='help-question'>Do the icons do anything?</p>
                            <p className='help-answer'>Yes. Double click them to open. The Internet icon contains a mini app
                            that allows you to type in a search term and 20 gifs will be displayed. The Computer contains 
                            a way to change the background. Files provides you with contact links.  </p>
                        </li>
                    </ul>
{/* - - - - - - - - - - - FAQs - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
                <HelpPanelNav />                
                <h4 id='help-pg-faqs'>FAQ's</h4>
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
                        <p className='help-question'>What are the colors of iQuixotic Brand?</p>
                        <p className='help-answer'>Orange, Lime Green, and my favorite Deep Purple.</p>
                    </li>
                    </ul>
{/* - - - - - - - - - - - - - - - Acknowledgements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                <HelpPanelNav />         
                <h4 id='help-pg-acknowledgements'>Acknowledgements</h4>    
                    <ul>
                        <li>
                            <p className='help-question'>Is this website mobile responsive?</p>
                            <p className='help-answer'>Not yet. Version 2 will be released shortly, 
                            which will include mobile responsivity</p>
                        </li>
                        <li>
                            <p className='help-question'>If the Recycle Bin and Shudown don't do anything yet, 
                            then why did you put them in the app?</p>
                            <p className='help-answer'>Partly design. Partly ambition. For now, you will
                            recieve some screen that lets you know that the feature has not been implemented yet.</p>
                        </li>
                        <li>
                            <p className='help-question'>Why can't I...?</p>
                            <p className='help-answer'>Although inspired by Windows 95, this is not an operating system 
                            and I didn't feel like it needed to be. The features I included really were what I felt at 
                            the time were the core features I wanted to have. Simply put, I make it the way I thought 
                            was cool.</p>
                        </li>

                    </ul>
{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}

            </div>
        </div>

    );
}

export default helpPanel;