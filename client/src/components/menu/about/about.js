import React from "react";
// import Draggable from 'react-draggable';
import {Icon} from 'react-fa';
import './style.css';

{/* <i class="far fa-caret-square-down"></i> */}
const AboutPanel = (props) => {
    return(
        <div className='about-panel'>
            <h4 className='about-panel-header'>iQuixotic95 (This Site)</h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <input type='checkbox'/>
                <p>Something, something, something....iQuixotic95</p>
                <Icon className="fas fa-chevron-down caret-color" />
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