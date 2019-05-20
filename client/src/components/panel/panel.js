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

                    <Draggable>
                    {props.src !== '' ? (
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
                            <div id="loadScreen">
                                <div className="cssload-thecube">
                                    <div className="cssload-cube cssload-c1"></div>
                                    <div className="cssload-cube cssload-c2"></div>
                                    <div className="cssload-cube cssload-c4"></div>
                                    <div className="cssload-cube cssload-c3"></div>
                                </div>
                            </div> 
                            <Frame load={props.load} src={props.src}/>
                        </Resizable>
                            ) : (
                                <div className={props.panelClassName}>
                                    <Xbox
                                        head={props.head}
                                        clickClosed={props.clickClosed}
                                        expShr={props.expShr}
                                        minimize={props.minimize}/>
                                    {/* passes the clickClosed prop to an unknown child element */}
                                    {React.cloneElement(props.children, {clickClosed: props.clickClosed})}
                                </div>
                            )
                    }
                    </Draggable>
                </div>
            ) : (
                props.src !== '' ? (
                    <div id='Portfolio-full-size' className='panel-starting-position'>
                        <Xbox
                            head={props.head}
                            clickClosed={props.clickClosed}
                            expShr={props.expShr}
                            minimize={props.minimize}/>  
                        <div id="loadScreen"></div>
                        <Frame load={props.load} src={props.src}/>  
                    </div>
                ) : (
                    <div id='Portfolio-full-size' className='panel-starting-position'>
                        <Xbox
                            head={props.head}
                            clickClosed={props.clickClosed}
                            expShr={props.expShr}
                            minimize={props.minimize}/>  
                        {props.children}
                    </div>
                ))
                // <div id='Portfolio-full-size' className='panel-starting-position'>

                //     <Xbox
                //         head={props.head}
                //         clickClosed={props.clickClosed}
                //         expShr={props.expShr}
                //         minimize={props.minimize}/>                            
                //     <div id="loadScreen"></div>

                //     { props.src !== '' ? <Frame load={props.load} src={props.src}/> : props.children }
                // </div>)
            }
        </div>
    );
}

export default panel;