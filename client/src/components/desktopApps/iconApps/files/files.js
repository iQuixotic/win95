import React from "react";
import { Linkedin, Octocat, ReactLogo, Resume } from '../../../../assets';
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
            <a href='http://www.iquixotic.com' alt='#' className='files-panel-line'>
                <img src={ReactLogo} alt='#' />
                <span className='line-txt'>Old Portfolio</span>
            </a>
           
        </div>
    );
}

export default filesPanel;