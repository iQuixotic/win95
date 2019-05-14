import * as React from "react";
import Draggable from 'react-draggable';
import Resizable from 're-resizable';
import './style.css';
const panel = (props) => {

    return (
        <div className={props.cn}>  
        {
            !props.panelSizeFull ? ( 
        <div id='Portfolio' className='panel-starting-position panel-size'>  

            <Draggable >
                <Resizable 
                    enable={{top:true, right:false, bottom:false, left:true, 
                    topRight:false, bottomRight:false, bottomLeft:false, topLeft:true}}
                    className='panel'
                    defaultSize={{
                        width:620,
                        height:470
                      }}>
                        <div  className='blue-top-box'>
                            <h4 className='panel_header'>{props.head}</h4>
                            <button onClick={props.clickClosed} className='panel_btn'>X</button>
                            <button onClick={props.expShr} className='panel_btn'>S</button>
                            <button  onClick={props.minimize} className='panel_btn'>-</button>
                        </div>
                        {
                        props.src !== '' ? (
                        <iframe id='iframe' title='winder' className='inner-frame' src={props.src}></iframe>
                        ) : props.children
                    }
                </Resizable>
            </Draggable>
        </div>
                    ): (
        <div id='Portfolio-full-size' className='panel-starting-position'>  
        
                        <div  className='blue-top-box'>
                            <h4 className='panel_header'>{props.head}</h4>
                            <button onClick={props.clickClosed} className='panel_btn'>X</button>
                            <button onClick={props.expShr} className='panel_btn'>S</button>
                            <button onClick={props.minimize} className='panel_btn'>-</button>
                        </div>
                        {
                        props.src !== '' ? (
                        <iframe id='iframe' title='winder' className='inner-frame' src={props.src}></iframe>
                        ) : props.children
                        }
                    </div>)
        }  
        </div>
    );
}

export default panel;