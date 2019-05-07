import * as React from "react";
import { Logo } from '../../../assets';
// import { Li } from '../../../components';
// import {Icon} from 'react-fa';
import './style.css';

const Taskbar = (props) => {
    return (
        <nav className='toolbar'>            
            <button className='start-btn' onClick={props.click}>
                <img className='logo-btn' src={Logo} alt='#'></img>
                <span className='txt-btn'>Start</span>
            </button>
            <div id='start-menu' className='invisible'>
                <div id="left">
                    <div className="b">
                        iQuixotic
                        <span className="num95">95</span>
                    </div>
                </div>
                <ul className='menu-items'>
                    <li className='menu-item expander' onMouseEnter={props.hover} onMouseLeave={props.noHover}>Projects</li>
                    <li className='menu-item'>Calculator</li>
                    <li className='menu-item'>Paint</li>
                    <li className='menu-item'>Help</li>
                </ul>
            </div>

            <div id="notifications">
                <div id="clock"></div>
            </div>
        </nav>
    );
}

export default Taskbar;