import React from "react";
import './style.css';

// just the area for loading gifs into
const gifs = (props) => {
    return(
        <div className='gif-div'>
            <div className='gif-div'>
                {props.resGifs.map(el => {
                return <img src={el.images.fixed_height.url} alt='#'/>
            })}
            </div>
        </div>
    );
}

export default gifs;



