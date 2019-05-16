import * as React from "react";
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
import { Frame, Xbox } from "../../components";
import './style.css';

const panel = (props) => {
    return (
        <div className={props.cn}>
            {
            // for non full-size panel, make draggable and resizable
            !props.panelSizeFull ? (
                <div id='Portfolio' className='panel-starting-position panel-size'>

                    <Draggable className='windows-theme-border'>
                        <Resizable
                            enable={{ top: true, right: false, bottom: false, left: true,
                                topRight: false, bottomRight: false, bottomLeft: false, topLeft: true }}
                            className='panel'
                            defaultSize={{ width: props.initialWidth,
                                height: props.initialHeight }}>
                            <Xbox
                                head={props.head}
                                clickClosed={props.clickClosed}
                                expShr={props.expShr}
                                minimize={props.minimize}/>
                            <div id="loadScreen"></div>

                            {/* show page if it has src, else show the component's children */}
                            { props.src !== '' ? <Frame load={props.load} src={props.src}/> : props.children }

                        </Resizable>
                    </Draggable>
                </div>
            ) : (
                <div id='Portfolio-full-size' className='panel-starting-position'>

                    <Xbox
                        head={props.head}
                        clickClosed={props.clickedClosed}
                        expShr={props.expShr}
                        minimize={props.minimize}/>                            
                    <div id="loadScreen"></div>

                    {/* show page if it has src, else show the component's children */}
                    { props.src !== '' ? <Frame load={props.load} src={props.src}/> : props.children }
                </div>)
            }
        </div>
    );
}

export default panel;