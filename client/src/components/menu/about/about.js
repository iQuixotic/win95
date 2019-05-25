import React from "react";
import './style.css';
import { AwsSaCert, Linkedin, Github } from "../../../assets";

const aboutPanel = (props) => {
    return(
        <div className='about-panel'>

            <h4 id='about-panel-main-project' className='about-panel-header'>iQuixotic95 </h4>
            <div className='about-panel-info'>
                <div className='gray-line'></div>
                <label className='fancy-checkbox'>
                    <div className='checkbox-div-for-fa'>
                        <input type='checkbox'/>   
                        <span className='more-less bg-white'> View </span>             
                        <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
                        <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
                        <div className='about-project-info'>
                            <em>Why is this project important?</em>
                            <p>
                            </p>
                            <em>What can you do with it?</em>
                            <p>
                            </p>
                            <div className='github-spacing'>
                                <img className='github-token' src={Github} alt='#' /> 
                                <span className='github-txt'>  Github Project Page: </span>
                                <a className='github-link' href=''></a>
                            </div>
                            <em>Quick and dirty</em>
                            <table>
                                <tbody>
                                    <tr><th>Subject</th><th>Tech</th></tr>
                                    <tr><td>Frontend</td><td></td></tr>
                                    <tr><td>Backend</td><td></td></tr>
                                    <tr><td>Database</td><td>None</td></tr>
                                    <tr><td>Mobile Responsive</td><td>Yes</td></tr>
                                </tbody>
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
                            <em>Why is this project important?</em>
                            <p>This was my first Portfolio and I was super excited about it! It was the first time I bought 
                                a custom domain, and I hosted it on an Amazon EC2 instance. I also used jQuery, and Materialize. 
                                I was really happy with how clean and readable the code turned out. It was also quite colorful (and 
                                I do love my oversaturated bright colors).
                            </p>
                            <em>What can you do with it?</em>
                            <p>You can navigate to other projects I have posted. The carousel spins and changes the bottom 
                                paragraph text and header text with Javascript. There are links everywhere!! 
                            </p>
                            <div className='github-spacing'>
                                <img className='github-token' src={Github} alt='#' /> 
                                <span className='github-txt'>  Github Project Page: </span>
                                <a className='github-link' href='https://github.com/iQuixotic/portfolio-website'>Personal Portfolio</a>
                            </div>
                            <em>Quick and dirty</em>
                            <table>
                                <tbody>
                                    <tr><th>Subject</th><th>Tech</th></tr>
                                    <tr><td>Frontend</td><td>jQuery</td></tr>
                                    <tr><td>Backend</td><td>Express</td></tr>
                                    <tr><td>Database</td><td>None</td></tr>
                                    <tr><td>Mobile Responsive</td><td>Looks great on a phone!!</td></tr>
                                </tbody>
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
                                it shows. The speed of this app is incredible considering you're working with 
                                persistent data. Numbers are converted to strings complete with commas and dollar strings 
                                via a custom function.</p>
                            <em>What can you do with it?</em>
                            <p>You can add or subtract money from an account, check out previous transactions,
                                or create your own account. Data is persistent. Feel free to give it a shot! </p>
                            <div className='github-spacing'>
                                <img className='github-token' src={Github} alt='#' /> 
                                <span className='github-txt'>  Github Project Page: </span>
                                <a className='github-link' href='https://github.com/iQuixotic/bank-app'>Zenith Holdings</a>
                            </div>
                            <em>Quick and dirty</em>
                            <table>
                                <tbody>
                                    <tr><th>Subject</th><th>Tech</th></tr>
                                    <tr><td>Frontend</td><td>Reactjs with Typescript</td></tr>
                                    <tr><td>Backend</td><td>Nodejs</td></tr>
                                    <tr><td>Database</td><td>MongoDB</td></tr>
                                    <tr><td>Mobile Responsive</td><td>Yes</td></tr>
                                </tbody>
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
                        <div className='about-project-info'>
                            <em>Why is this project important?</em>
                            <p>This was really special to me because of the idea. I wanted to be able to 
                                take a picture, break it apart, and move the pieces around to put 
                                it back together. It was one of the first ideas I had when I started 
                                teaching myself to code, but at the time, I was unsure how I would even 
                                begin something like this. The idea of being able to drag and drop something to 
                                another part of the screen, was initially incomprehensible, yet here I am.
                            </p>
                            <em>What can you do with it?</em>
                            <p>Select a puzzle to complete. Move each of the 16 pieces independantly by dragging
                                 and dropping. If you want to see a reference picture, click the button at the 
                                 bottom. Once you are done, click the 'How did I do?' button to find out your 
                                 score.
                            </p>
                            <div className='github-spacing'>
                                <img className='github-token' src={Github} alt='#' /> 
                                <span className='github-txt'>  Github Project Page: </span>
                                <a className='github-link' href='https://github.com/iQuixotic/picture-puzzles'>Picture Puzzles</a>
                            </div>
                            <em>Quick and dirty</em>
                            <table>
                                <tbody>
                                    <tr><th>Subject</th><th>Tech</th></tr>
                                    <tr><td>Frontend</td><td>Vanilla Javascript</td></tr>
                                    <tr><td>Backend</td><td>Express Server</td></tr>
                                    <tr><td>Database</td><td>None</td></tr>
                                    <tr><td>Mobile Responsive</td><td>Yes</td></tr>
                                </tbody>
                            </table>

                        </div>
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
                        <div className='about-project-info'>
                            <em>Why is this project important?</em>
                            <p>
                            </p>
                            <em>What can you do with it?</em>
                            <p>
                            </p>
                            <div className='github-spacing'>
                                <img className='github-token' src={Github} alt='#' /> 
                                <span className='github-txt'>  Github Project Page: </span>
                                <a className='github-link' href=''></a>
                            </div>
                            <em>Quick and dirty</em>
                            <table>
                                <tbody>
                                    <tr><th>Subject</th><th>Tech</th></tr>
                                    <tr><td>Frontend</td><td></td></tr>
                                    <tr><td>Backend</td><td></td></tr>
                                    <tr><td>Database</td><td>None</td></tr>
                                    <tr><td>Mobile Responsive</td><td>Yes</td></tr>
                                </tbody>
                            </table>

                        </div>
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
                        <div className='about-project-info'>
                            <em>Why is this project important?</em>
                            <p>
                            </p>
                            <em>What can you do with it?</em>
                            <p>
                            </p>
                            <div className='github-spacing'>
                                <img className='github-token' src={Github} alt='#' /> 
                                <span className='github-txt'>  Github Project Page: </span>
                                <a className='github-link' href=''></a>
                            </div>
                            <em>Quick and dirty</em>
                            <table>
                                <tbody>
                                    <tr><th>Subject</th><th>Tech</th></tr>
                                    <tr><td>Frontend</td><td></td></tr>
                                    <tr><td>Backend</td><td></td></tr>
                                    <tr><td>Database</td><td>None</td></tr>
                                    <tr><td>Mobile Responsive</td><td>Yes</td></tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </label>
            </div>
            <div className='nav-about-aws'>
                <div className='aws-about'>
                    <img className='aws-sa-cert' src={Linkedin} alt='#' />
                </div>
                <div className='aws-about'>
                    <img className='aws-sa-cert' src={Github} alt='#' />
                </div>
                <div className='aws-about'>
                    <img className='aws-sa-cert' src={AwsSaCert} alt='#' />
                </div>
            </div>
        </div>
    );
}

export default aboutPanel;