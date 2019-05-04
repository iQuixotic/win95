import * as React from "react";
import { NavItems } from '../../../components';
// import {Icon} from 'react-fa';
import './style.css';

const Taskbar = (props) => {
    return (
        <nav className='toolbar'>
            <ul>
                <NavItems
                    link1='home' />
            </ul>
        </nav>
    );
}

export default Taskbar;