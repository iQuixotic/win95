import * as React from "react";
import { Logo } from '../../../assets';
import { Li } from '../../../components';
// import {Icon} from 'react-fa';
import './style.css';

const Taskbar = (props) => {
    return (
        <nav className='toolbar'>
            
            
            <button class='start-btn'>
                <img className='logo-btn' src={Logo} alt='#'></img>
                <span className='txt-btn'>Start</span>
            </button>
            <ul id='start-menu' className='menu-closed'>
                <li className='menu-item'>Programs</li>
                <li className='menu-item'>Calculator</li>
                <li className='menu-item'>Paint</li>
                <li className='menu-item'>Help</li>
            </ul>
        </nav>
    );
}

export default Taskbar;