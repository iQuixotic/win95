import React from "react";
import {Icon} from 'react-fa';
import './style.css';

const AboutPanel = (props) => {
    return(
        <div className='about-panel'>

            <h4 id='about-panel-main-project' className='about-panel-header'>iQuixotic95 </h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input checked='checked'  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'> 
                            <em>Thank you so much for viewing my page !! </em>

                            
                            <em>Why is this project important? </em>
                            <p>This is the first project I built using Typescript! Don't be fooled by the 
                                simplistic look! When I made this, I wanted to focus heavily on the logic and 
                                it shows. the speed of this app is incredible considering you're working with 
                                persistent data.</p>
                            <em>What can you do with it?</em>
                            <p>You can add or subtract money from an account, check out previous transactions,
                                or create your own account. Data is persistent. Feel free to give it a shot! </p>
                            <em>Quick and dirty</em>
                            <table>
                                <tr>
                                    <th>Subject</th> <th>Tech</th>
                                </tr>
                                <tr>
                                    <td>Frontend</td><td>Reactjs with Typescript</td>
                                </tr>
                                <tr>
                                    <td>Backend</td><td>Nodejs</td>
                                </tr>
                                <tr>
                                    <td>Database</td><td>MongoDB</td>
                                </tr>
                                <tr>
                                    <td>Mobile Responsive</td><td>Yes</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Old Portfolio</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
            <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'> 
                            <em>Thank you so much for viewing my page !!</em>
                            <em>Why is this project important?</em>
                            <p> This is the first project I built using Typescript! Don't be fooled by the 
                                simplistic look! When I made this, I wanted to focus heavily on the logic and 
                                it shows. the speed of this app is incredible considering you're working with 
                                persistent data.</p>
                            <em>What can you do with it?</em>
                            <p>You can add or subtract money from an account, check out previous transactions,
                                or create your own account. Data is persistent. Feel free to give it a shot! </p>
                            <em>Quick and dirty</em>
                            <table>
                                <tr>
                                    <th>Subject</th> <th>Tech</th>
                                </tr>
                                <tr>
                                    <td>Frontend</td><td>Reactjs with Typescript</td>
                                </tr>
                                <tr>
                                    <td>Backend</td><td>Nodejs</td>
                                </tr>
                                <tr>
                                    <td>Database</td><td>MongoDB</td>
                                </tr>
                                <tr>
                                    <td>Mobile Responsive</td><td>Yes</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Zenith Holdings</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'>
                            <em>Why is this project important?</em>
                            <p>This is the first project I built using Typescript! Don't be fooled by the 
                                simplistic look! When I made this, I wanted to focus heavily on the logic and 
                                it shows. the speed of this app is incredible considering you're working with 
                                persistent data.</p>
                            <em>What can you do with it?</em>
                            <p>You can add or subtract money from an account, check out previous transactions,
                                or create your own account. Data is persistent. Feel free to give it a shot! </p>
                            <em>Quick and dirty</em>
                            <table>
                                <tr>
                                    <td>Frontend</td><td>Reactjs with Typescript</td>
                                </tr>
                                <tr>
                                    <td>Backend</td><td>Nodejs</td>
                                </tr>
                                <tr>
                                    <td>Database</td><td>MongoDB</td>
                                </tr>
                                <tr>
                                    <td>Mobile Responsive</td><td>Yes</td>
                                </tr>
                            </table>

                        </div>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Picture Puzzles</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'> </div>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Lil Libs</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'> </div>
                    </div>
                </label>
            </div>

            <h4 className='about-panel-header'>Avatar Cards</h4>
            <div className='about-panel-info'>
            <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input  type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'> </div>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default AboutPanel;