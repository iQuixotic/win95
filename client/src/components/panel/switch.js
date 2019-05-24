import * as React from "react";
import { FullSize,  Offline, Project } from "../../components";

/* - - - - - - - - - - - - - - - - - - - - - - - - -
 IMPORTANT NOTE: This file is named as 'switch.js, 
but will export the component PANEL 
- - - - - - - - - - - - - - - - - - - - - - - - - */

// checks for panel size and if panel has an src (to 
// determine if the content comes from the internet)
const panel = (props) => {
    return (
        <div className={props.cn}>
            {
            // if the panel SHOULD NOT be full size
            !props.panelSizeFull ? (
                <div id='Portfolio' className='panel-starting-position panel-size'>
                    {props.src !== '' ? <Project {...props} /> : <Offline {...props} />}
                </div>
                ) : (
            // if the panel SHOULD be full size
            props.src !== '' ? (
                <FullSize {...props} /> ) : (<Offline id='Portfolio-full-size' 
                panelClassName='panel-starting-position' {...props}/>)
              )
            }
        </div>
    );
}

export default panel;