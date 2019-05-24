import React from "react";
import './style.css';

// for mobile and modals
const backDrop = (props) => {
    return(
        <div className='backdrop'>
            {props.children}
        </div>
    );
}

export default backDrop;