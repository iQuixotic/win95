import * as React from "react";
import { Logo, AboutBook, Programs, AboutBookHover, ProgramsHover} from '../../../assets';
import './style.css';

const Taskbar = (props) => {
    return (
        <nav className='toolbar'>            
            <button className='start-btn windows-btn' onClick={props.click}>
                <img className='logo-btn' src={Logo} alt='#'></img>
                <span className='txt-btn'>Start</span>
            </button>
            {
                props.panelOpen ? (
                <button onClick={props.minClick} className={props.minCn}>{props.head}</button>
                ): <div></div>
            }
            <div id='start-menu' className='invisible'>
                <div id="left">
                    <div className="b">
                        iQuixotic
                        <span className="num95">95</span>
                    </div>
                </div>
                <ul className='menu-items'>
                    <li id='menu-item0' className='menu-item expander' onMouseEnter={props.hover} onMouseLeave={props.noHover}>
                        <img src={props.src1} alt='#'/>
                        <span className='vertical-center'>Projects</span>
                    </li>
                    <li onClick={props.smiClick} id='menu-item1' className='menu-item' onMouseEnter={props.hover} onMouseLeave={props.noHover}>
                        <img src={props.src2} alt='#'/>
                        <span className='vertical-center'>About</span>
                    </li>
                    <li onClick={props.smiClick} id='menu-item2' className='menu-item' onMouseEnter={props.hover} onMouseLeave={props.noHover}>
                        <img src={props.src3} alt='#'/>
                        <span className='vertical-center'>Help</span>
                    </li>
                    <li onClick={props.smiClick} id='menu-item3' className='menu-item' onMouseEnter={props.hover} onMouseLeave={props.noHover}>
                        <img src={props.src4} alt='#'/>
                        <span className='vertical-center'>Contact</span>
                    </li>
                </ul>
                <div className='one-line'></div>
                <div onClick={props.smiClick} id='menu-item-SD' className='menu-item' onMouseEnter={props.hover} onMouseLeave={props.noHover}>
                    <img src={props.src5} alt='#'/>
                    <span className='vertical-center'>Shut Down</span>
                </div>
            </div>

            <div id="notifications">
                <div id="clock"></div>
            </div>
        </nav>
    );
}

export default Taskbar;