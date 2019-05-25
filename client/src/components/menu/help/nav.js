import React from "react";
import './style.css';

const helpPanelNav = (props) => {
    return(
        // Navigation area for help page 
        <nav className='help-nav-area'>
            <a href="help.js#help-pg-how-to">How to</a>
            <a href="help.js#help-pg-faqs">FAQ's</a>
            <a href="help.js#help-pg-acknowledgements">Acknowledgements</a>
        </nav>
    );
}

export default helpPanelNav;
