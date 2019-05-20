import React from "react";
import './style.css';
import { File_I } from '../../../../assets';

const FilesPanel = (props) => {
    return(
        <div className='files-panel'>
            <div className='files-panel-line'>
                <img src={File_I} alt='#' />
                <span className='line-txt'>Resume</span>
            </div>
            <div className='files-panel-line'>
                <img src={File_I} alt='#' />
                <span className='line-txt'>GitHub</span>
            </div>
            <div className='files-panel-line'>
                <img src={File_I} alt='#' />
                <span className='line-txt'>Linkedin</span>
            </div>
                
        </div>
    );
}

export default FilesPanel;