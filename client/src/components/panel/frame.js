import * as React from "react";
// import { HELP } from "../../utils";
import './style.css';

const frame = (props) => {
    return (
        <iframe 
            onLoad={props.load}
            id='iframe' 
            title='winder' 
            className='inner-frame' 
            src={props.src}>
        </iframe>
    );
}

export default frame;