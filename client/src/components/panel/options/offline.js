import * as React from "react";
import { Xbox } from "../../../components";
import { default as Draggable } from "react-draggable";
import '../style.css';

// for iQuixotic95 features and non-website components
const offline = (props) => {
    return (
        <Draggable handle='.blue-top-box'>
            <div id={props.id} className={props.panelClassName}>
                <Xbox
                    head={props.head} clickClosed={props.clickClosed}
                    expShr={props.expShr} minimize={props.minimize}/> 
                        
                    {/* passes the clickClosed prop to an unknown child element */}
                    {React.cloneElement(props.children, {...props})}
            </div>
        </Draggable>
    );
}

export default offline;