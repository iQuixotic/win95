import React from "react";
import { Cat } from "../../../assets";
import './style.css';

const ContactPanel = (props) => {
    return(
            <div className='contact-panel'>
                <div className='contact-panel-content'>
                    <img src={Cat} alt='#' />
                    <p>Email: <span className='contact-panel-info'>treyw1850@gmail.com</span></p>
                    <p>Phone: <span className='contact-panel-info'>(334) 342-8086</span></p>
                    <p>Github: <span className='contact-panel-info'>httpsomethingsomething..</span></p>
                    <p>Linkedin: <span className='contact-panel-info'>httpsomethinglinkedin..</span></p>
                    <p>Alternate-portfolio: <span className='contact-panel-info'>www.iquixotic.com</span></p>
                </div>
                <div className='cancel-btn'>                    
                    <button className='windows-btn' onClick={props.clickClosed} ><span>Got it!!!</span></button>
                </div>
            </div>

    );
}

export default ContactPanel;