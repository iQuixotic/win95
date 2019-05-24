import React from "react";
import { Cat } from "../../../assets";
import './style.css';

const contactPanel = (props) => {
    return(
            <div className='contact-panel'>
                <div className='contact-panel-content'>
                    <img src={Cat} alt='#' />
                    <p><span className='subj'> Email: </span><span className='contact-panel-info'>treyw1850@gmail.com</span></p>
                     <p><span className='subj'> Phone: </span><span className='contact-panel-info'>(334) 342-8086</span> </p>
                     <p><span className='subj'> Github: </span> <a className='contact-panel-info' href='https://github.com/iQuixotic' alt='#'>https://github.com/iQuixotic </a></p>
                     <p><span className='subj'> Linkedin: </span><a className='contact-panel-info' href='https://www.linkedin.com/in/trey-warrick-928547169' alt='#'>https://www.linkedin.com/in/trey-warrick-928547169 </a></p>
                     <p><span className='subj'> Alternate Portfolio: </span> <a  className='contact-panel-info' href='http://www.iquixotic.com' alt='#'>http://www.iquixotic.com </a></p>
                </div>
                <div className='cancel-btn'>                    
                    <button className='windows-btn' onClick={props.clickClosed} ><span>Got it!!!</span></button>
                </div>
            </div>
    );
}

export default contactPanel;