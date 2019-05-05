import * as React from "react";
import './style.css';

const NavItem = props => {
    return (
        <li className={props.cn}>
            {props.children}
        </li>
    );
}

export default NavItem;