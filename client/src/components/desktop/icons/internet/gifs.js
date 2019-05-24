import React from "react";
import './style.css';

const Gifs = (props) => {
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

export default Gifs;



