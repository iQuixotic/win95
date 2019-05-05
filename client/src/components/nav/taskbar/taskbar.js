import * as React from "react";
import { Logo } from '../../../assets';
// import {Icon} from 'react-fa';
import './style.css';

const Taskbar = (props) => {
    return (
        <nav className='toolbar'>
            {/* <ul>
                <NavItems
                    link1='home' />
            </ul> */}
            
            <button class='start-btn'>
                <img className='logo-btn' src={Logo} alt='#'></img>
                <span className='txt-btn'>Start</span>
            </button>
        </nav>
    );
}

export default Taskbar;