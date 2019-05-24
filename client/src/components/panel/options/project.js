import * as React from "react";
import { Frame, Xbox, LoadScreen } from "../../../components";
import { default as Draggable } from "react-draggable";
import Resizable from 're-resizable';
import '../style.css';

// resizable version of project (website)
const project = (props) => {
    return (
        <Draggable>
            <Resizable enable={{ top: true, right: false, bottom: false, left: true,
                topRight: false, bottomRight: false, bottomLeft: false, topLeft: true }}
                className='panel' defaultSize={{ width: props.initialWidth, 
                height: props.initialHeight }}>
                
                <Xbox
                    head={props.head} clickClosed={props.clickClosed}
                    expShr={props.expShr} minimize={props.minimize}/>

                <LoadScreen/>
                <Frame load={props.load} src={props.src}/>
            </Resizable>
        </Draggable>
    );
}

export default project;