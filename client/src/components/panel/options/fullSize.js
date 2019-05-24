import * as React from "react";
import { Frame, Xbox, LoadScreen } from "../../../components";
import '../style.css';

// fullsize version of project (website)
const fullSize = (props) => {
    return (
        <div id='Portfolio-full-size' className='panel-starting-position'>
            <Xbox
                head={props.head}
                clickClosed={props.clickClosed}
                expShr={props.expShr}
                minimize={props.minimize}/>  
            <LoadScreen/>
            <Frame load={props.load} src={props.src}/>  
        </div>
    );
}

export default fullSize;