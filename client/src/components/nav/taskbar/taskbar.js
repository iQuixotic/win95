import * as React from "react";
import { AwsSaCert, HelpBook, Programs,  Contact, Shutdown, Info, Logo } from '../../../assets';
import './style.css';

// start bar with clock at bottom of screen
const taskbar = (props) => {
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
                        <img src={Programs} alt='#'/>
                        <span className='vertical-center'>Projects</span>
                    </li>
                    <li onClick={props.smiClick} id='menu-item1' className='menu-item' >
                        <img src={Info} alt='#'/>
                        <span className='vertical-center'>About</span>
                    </li>
                    <li onClick={props.smiClick} id='menu-item2' className='menu-item'>
                        <img src={HelpBook} alt='#'/>
                        <span className='vertical-center'>Help</span>
                    </li>
                    <li onClick={props.smiClick} id='menu-item3' className='menu-item' >
                        <img src={Contact} alt='#'/>
                        <span className='vertical-center'>Contact</span>
                    </li>
                </ul>
                <div className='one-line'></div>
                <div onClick={props.smiClick} id='menu-item-SD' className='menu-item' >
                    <img src={Shutdown} alt='#'/>
                    <span className='vertical-center'>Shut Down</span>
                </div>
            </div>

            <div className='aws-toolbar'>
                <img className='aws-sa-cert' src={AwsSaCert} alt='#' />
            </div>

            <div id="notifications">
                <div id="clock"></div>
            </div>
        </nav>
    );
}

export default taskbar;