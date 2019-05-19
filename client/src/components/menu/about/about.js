import React from "react";
import {Icon} from 'react-fa';
import './style.css';

const AboutPanel = (props) => {
    return(
        <div className='about-panel'>
            <h4 className='about-panel-header'>iQuixotic95 (This Site)</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <input  type='checkbox'/>                
                    <i className="fas fa-eye unchecked"></i>
                    <i className="fas fa-eye-slash checked"></i>
                    <p>Something, something, something....iQuixotic95</p>
                </label>
            </div>

            <h4 className='about-panel-header'>Old Portfolio</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <input type='checkbox'/>
                <p>Something, something, something....Old</p>
            </div>

            <h4 className='about-panel-header'>Zenith Holdings</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <input type='checkbox'/>
                <p>Something, something, something....Zenith</p>
            </div>

            <h4 className='about-panel-header'>Picture Puzzles</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <input type='checkbox'/>
                <p>Something, something, something....Picture</p>
            </div>

            <h4 className='about-panel-header'>Lil Libs</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <input type='checkbox'/>
                <p>Something, something, something....Lil</p>
            </div>

            <h4 className='about-panel-header'>Avatar Cards</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <input type='checkbox'/>
                <p>Something, something, something....Avatar</p>
            </div>
        </div>
    );
}

export default AboutPanel;