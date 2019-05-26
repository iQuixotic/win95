import React from "react";
import './style.css';

// just the area for loading gifs into
const gifs = (props) => {
    return(
        <div className='gifs-div'>
            <div className='gif-single-div'>
                {props.resGifs.map(el => {
                return <img src={el.images.downsized_medium.url} alt='#'/>
            })}
            </div>
        </div>
    );
}

export default gifs;



