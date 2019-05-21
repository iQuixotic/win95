import React from "react";
import { 
    NinetiesBG, RedBlocksBG , GreenTilesBG, DiamondsBG, 
    ChainsBG, CarvedBG, BluePrismsBG, BlackWhiteSpecsBG, 
    BlackBubblesBG } from '../../../../assets';
import './style.css';

const ComputerPanel = (props) => {
    return(
        <div className='computer-panel'>
            <h3>Choose a Background</h3>
            <div className='row'>
                <div className='background-choice'>
                    <img src={NinetiesBG} alt='#' />
                    <p>Nineties Theme</p>
                </div>

                <div className='background-choice'>
                    <img src={RedBlocksBG} alt='#' />
                    <p>Red Blocks</p>
                </div>

                <div className='background-choice'>
                    <img src={GreenTilesBG} alt='#' />
                    <p>Green Tiles</p>
                </div>

                <div className='background-choice'>
                    <img src={DiamondsBG} alt='#' />
                    <p>Diamonds</p>
                </div>
            </div>

            <div className='row'>
                <div className='background-choice'>
                    <img src={ChainsBG} alt='#' />
                    <p>Chains</p>
                </div>

                <div className='background-choice'>
                    <img src={CarvedBG} alt='#' />
                    <p>Carved Stone</p>
                </div>

                <div className='background-choice'>
                    <img src={BluePrismsBG} alt='#' />
                    <p>Blue Prisms</p>
                </div>

                <div className='background-choice'>
                    <img src={BlackWhiteSpecsBG} alt='#' />
                    <p>Black and White</p>
                </div>
            </div>
            <div className='row'>
                <div className='background-choice'>
                    <img src={BlackBubblesBG} alt='#' />
                    <p>Black Bubbles</p>
                </div>
                <div className='background-choice'>
                <div className='classic-div'></div>
                    <p>Windows 95 Classic</p>
                </div>
                <div className='background-choice'>
                <div className='purple-div'></div>
                    <p>Plain Purple</p>
                </div>
                <div className='background-choice'>
                    <div className='green-div'></div>
                    <p>Plain Green</p>
                </div>
            </div>

            <div className='bg-apply'> 
                <button onClick={props.applyBG}>Apply</button> 
                <button className='bg-cancel'>Cancel</button>
            </div>
        </div>
    );
}

export default ComputerPanel;