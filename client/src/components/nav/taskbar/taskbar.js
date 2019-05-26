import * as React from "react";
import { AwsSaCert, Programs, Shutdown, Logo } from '../../../assets';
import { SM } from '../../../components';

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

                    { /*  List over the Contact, About, and Help menu items */}
                    {SM.menuText.map((each) => { return (
                        <li onClick={props.smiClick} id={SM.menuItemNumber[each]} className='menu-item' >
                            <img src={SM.srcs[each]} alt='#'/>
                            <span className='vertical-center'>{each}</span>
                        </li>)
                    })}
                    
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