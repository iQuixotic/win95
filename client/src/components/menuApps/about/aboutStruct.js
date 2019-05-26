import React from "react";
import { AboutTable } from '../../../components';
import { Github } from '../../../assets';
import './style.css';

const aboutStruct = (props) => {
    return(
        <div className='about-panel-info'>
            <div className='gray-line'></div>

            {/* Here starts the invisible checkbox/eyeball */}
            <label className='fancy-checkbox'>
                <div className='checkbox-div-for-fa'>
                    <input type='checkbox'/>   
                    <span className='more-less bg-white'> View </span>
                    <i className="fas  bg-white fa-eye unchecked">
                        <span className='more-less bg-white'> More</span></i>
                    <i className="fas  bg-white fa-eye-slash checked">
                        <span className='more-less bg-white'> Less</span></i>
                    
                    {/* Questions about the project */}
                    <div className='about-project-info'>
                        <em>Why is this project important?</em>
                        <p>{props.question1}</p>
                        <em>What can you do with it?</em>
                        <p>{props.question2}</p>

                        {/* Link to project's Github page */}
                        <div className='github-spacing'>
                            <img className='github-token' src={Github} alt='#' /> 
                            <span className='github-txt'>  Github Project Page: </span>
                            <a className='github-link' href={props.projHref}>{props.projectName}</a>
                        </div>

                        <em>Quick and dirty</em>
                        <AboutTable {...props} />

                    </div>
                </div>
            </label>
        </div>
    );
}

export default aboutStruct;