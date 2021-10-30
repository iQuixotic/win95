import React from "react";
import { Linkedin, Octocat, ReactLogo, Resume, AwsSaCert } from '../../../../assets';
import './style.css';

const filesPanel = (props) => {
    return(
        <div className='files-panel'>
            <div className='space'></div>
            <a href='https://docs.google.com/document/d/1Rdn_Fjy_iVgVykVBH0CtJOY_bPfmtm2lRJ0RkaCMQks/edit' alt='#' className='files-panel-line'>
                <img src={Resume} alt='#' />
                <span className='line-txt'>Resume</span>
            </a>
            <div className='space'></div>
            <a href='https://github.com/iQuixotic' alt='#' className='files-panel-line'>
                <img src={Octocat} alt='#' />
                <span className='line-txt'>GitHub</span>
            </a>
            <div className='space'></div>
            <a href='https://www.linkedin.com/in/trey-warrick-928547169' alt='#' className='files-panel-line'>
                <img src={Linkedin} alt='#' />
                <span className='line-txt'>Linkedin</span>
            </a>
            <div className='space'></div>
            <a href='http://3.144.85.76:4040/' alt='#' className='files-panel-line'>
                <img src={ReactLogo} alt='#' />
                <span className='line-txt'>Old Portfolio</span>
            </a>

            <nav className='files-footer'>
                <div className='files-footer-contact'>
                    <em>Phone: </em>(334) 342-8086 <br/>
                    <em>Email: </em>treyw1850@gmail.com
                </div>
                <img src={AwsSaCert} alt='#'></img>
            </nav>
           
        </div>
    );
}

export default filesPanel;