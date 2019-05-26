import React from "react";
import { 
    NinetiesBG, RedBlocksBG , GreenTilesBG, DiamondsBG, 
    ChainsBG, CarvedBG, BluePrismsBG, BlackWhiteSpecsBG, 
    BlackBubblesBG } from '../../../../assets';
import './style.css';

const computerPanel = (props) => {
    return(
        <div className='computer-panel'>
            <h3>Choose a Background</h3>
            <div className={props.panelSizeFull ? 'container' : ''}>

                <div className='row'>
                    <div onClick={props.selectBG} id='classic-bg' className='background-choice'>
                        <div className='classic-div'></div>
                        <p>Windows 95 Classic</p>
                    </div>

                    <div onClick={props.selectBG} id='red-blocks-bg' className='background-choice'>
                        <img src={RedBlocksBG} alt='#' />
                        <p>Red Blocks</p>
                    </div>

                    <div  onClick={props.selectBG} id='green-tiles-bg' className='background-choice'>
                        <img src={GreenTilesBG} alt='#' />
                        <p>Green Tiles</p>
                    </div>

                    <div onClick={props.selectBG} id='diamond-wallpaper-bg' className='background-choice'>
                        <img src={DiamondsBG} alt='#' />
                        <p>Diamonds</p>
                    </div>
                </div>

                <div className='row'>
                    <div onClick={props.selectBG} id='chains-bg' className='background-choice'>
                        <img src={ChainsBG} alt='#' />
                        <p>Chains</p>
                    </div>

                    <div onClick={props.selectBG} id='carved-blocks-bg' className='background-choice'>
                        <img src={CarvedBG} alt='#' />
                        <p>Carved Stone</p>
                    </div>

                    <div onClick={props.selectBG} id='green-bg' className='background-choice'>
                        <div className='green-div'></div>
                        <p>Plain Green</p>
                    </div>

                    <div onClick={props.selectBG} id='purple-bg' className='background-choice'>
                        <div className='purple-div'></div>
                        <p>Plain Purple</p>
                    </div>
                    
                </div>
                
                <div className='row'>
                    <div onClick={props.selectBG} id='blue-prisms-bg' className='background-choice'>
                        <img src={BluePrismsBG} alt='#' />
                        <p>Blue Prisms</p>
                    </div>
                    <div onClick={props.selectBG} id='black-bubbles-bg' className='background-choice'>
                        <img src={BlackBubblesBG} alt='#' />
                        <p>Black Bubbles</p>
                    </div>

                    <div  onClick={props.selectBG} id='saved-by-the-90s-bg' className='background-choice'>
                        <img src={NinetiesBG} alt='#' />
                        <p>Nineties Theme</p>
                    </div>
                    
                    <div onClick={props.selectBG} id='black-white-specs-bg' className='background-choice'>
                        <img src={BlackWhiteSpecsBG} alt='#' />
                        <p>Black and White</p>
                    </div>                
                </div>

                <div className='bg-apply'> 
                    <button onClick={props.applyBG} className='bg-apply-btn'>Apply</button> 
                    <button onClick={props.clickClosed} className='bg-cancel-btn'>Cancel</button>
                </div>
            </div> 
        </div>
    );
}

export default computerPanel;