import React from "react";
import {Icon} from 'react-fa';
import './style.css';

const AboutPanel = (props) => {
    return(
        <div className='about-panel'>

            <h4 id='about-panel-main-project' className='about-panel-header'>iQuixotic95 </h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <p>Something, something, something....iQuixotic95</p>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Old Portfolio</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
            <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <p>Something, something, something....iQuixotic95</p>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Zenith Holdings</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <p>Something, something, something....iQuixotic95</p>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Picture Puzzles</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <p>Something, something, something....iQuixotic95</p>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Lil Libs</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <p>Something, something, something....iQuixotic95</p>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Avatar Cards</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <p>Something, something, something....iQuixotic95</p>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default AboutPanel;