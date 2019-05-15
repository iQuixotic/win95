import * as React from "react";
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
import { HELP } from "../../utils";
import './style.css';

const panel = (props) => {
    return (
        <div className={props.cn}>
            {
                // for non full-size panel, make draggable and resizable
                !props.panelSizeFull ? (
                    <div id='Portfolio' className='panel-starting-position panel-size'>

                        <Draggable >
                            <Resizable
                                enable={{
                                    top: true, right: false, bottom: false, left: true,
                                    topRight: false, bottomRight: false, bottomLeft: false, topLeft: true
                                }}
                                className='panel'
                                defaultSize={{
                                    width: props.initialWidth,
                                    height: props.initialHeight
                                }}
                                // style={`[position]: fixed; [top]: 0; [left]: 0; `}
                                >
                                <div className='blue-top-box'>
                                    <h4 className='panel_header'>{props.head}</h4>
                                    <button onClick={props.clickClosed} className='panel_btn'>X</button>
                                    <button onClick={props.expShr} className='panel_btn'>S</button>
                                    <button onClick={props.minimize} className='panel_btn'>-</button>
                                </div>
                                <div id="loadScreen"></div>
                                {
                                    // show page if it has src, else show the component's children
                                    props.src !== '' ? (
                                        <iframe 
                                        onLoad={HELP.checkIfIframeLoaded}
                                        id='iframe' 
                                        title='winder' 
                                        className='inner-frame' 
                                        src={props.src}></iframe>
                                        ) : props.children
                                }
                            </Resizable>
                        </Draggable>
                    </div>
                ) : (
                        <div id='Portfolio-full-size' className='panel-starting-position'>

                            <div className='blue-top-box'>
                                <h4 className='panel_header'>{props.head}</h4>
                                <button onClick={props.clickClosed} className='panel_btn'>X</button>
                                <button onClick={props.expShr} className='panel_btn'>S</button>
                                <button onClick={props.minimize} className='panel_btn'>-</button>
                            </div>
                            <div id="loadScreen"></div>
                                {
                                    // show page if it has src, else show the component's children
                                    props.src !== '' ? (
                                        <iframe 
                                        onLoad={HELP.checkIfIframeLoaded}
                                        id='iframe' 
                                        title='winder' 
                                        className='inner-frame' 
                                        src={props.src}></iframe>
                                        ) : props.children
                                }
                        </div>)
            }
        </div>
    );
}

export default panel;