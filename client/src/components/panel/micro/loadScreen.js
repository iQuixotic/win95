import * as React from "react";
import './loader.css';

const loadScreen = (props) => {
    return (
        <div id="loadScreen">
            <div className="cssload-thecube">
                <div className="cssload-cube cssload-c1"></div>
                <div className="cssload-cube cssload-c2"></div>
                <div className="cssload-cube cssload-c4"></div>
                <div className="cssload-cube cssload-c3"></div>
            </div>
        </div> 
    );
}

export default loadScreen;