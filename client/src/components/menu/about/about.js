import React from "react";
import './style.css';
import { AwsSaCert, Linkedin, Github, Seagulls } from "../../../assets";

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//   !IMPORTANT NOTE: For context, AI stands for AboutInfo    //
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
import { AboutStruct, AI } from "../../../components";


const aboutPanel = (props) => {
    return(
        <div className='about-panel'>
            <img className='gulls' src={Seagulls} alt='#'/>


            <h4 id='about-panel-main-project' className='about-panel-header'>iQuixotic95</h4>
            <AboutStruct 
                projectName={AI.iquixotic.projectName}
                question1={AI.iquixotic.q1}
                question2={AI.iquixotic.q2}
                projHref={AI.iquixotic.href}
                front={AI.iquixotic.frontend}
                back={AI.iquixotic.backend}
                db={AI.iquixotic.db}
                mResponsive={AI.iquixotic.mResponsive} />

            <h4 className='about-panel-header'>Portfolio</h4>
            <AboutStruct 
            projectName={AI.portfolio.projectName}
                question1={AI.portfolio.q1}
                question2={AI.portfolio.q2}
                projHref={AI.portfolio.href}
                front={AI.portfolio.frontend}
                back={AI.portfolio.backend}
                db={AI.portfolio.db}
                mResponsive={AI.portfolio.mResponsive} />

            <h4 className='about-panel-header'>Zenith Holdings</h4>
            <AboutStruct 
                question1={AI.zenith.q1}
                question2={AI.zenith.q2}
                projHref={AI.zenith.href}
                projectName={AI.zenith.projectName}
                front={AI.zenith.frontend}
                back={AI.zenith.backend}
                db={AI.zenith.db}
                mResponsive={AI.zenith.mResponsive} />

            <h4 className='about-panel-header'>Picture Puzzles</h4>
            <AboutStruct 
                question1={AI.picturePuzzles.q1}
                question2={AI.picturePuzzles.q2}
                projHref={AI.picturePuzzles.href}
                projectName={AI.picturePuzzles.projectName}
                front={AI.picturePuzzles.frontend}
                back={AI.picturePuzzles.backend}
                db={AI.picturePuzzles.db}
                mResponsive={AI.picturePuzzles.mResponsive} />

            <h4 className='about-panel-header'>Lil Libs</h4>
            <AboutStruct 
               question1={AI.lilLibs.q1}
               question2={AI.lilLibs.q2}
               projHref={AI.lilLibs.href}
               projectName={AI.lilLibs.projectName}
               front={AI.lilLibs.frontend}
               back={AI.lilLibs.backend}
               db={AI.lilLibs.db}
               mResponsive={AI.lilLibs.mResponszenith} />

            <h4 className='about-panel-header'>Avatar Cards</h4>
            <AboutStruct 
                question1={AI.avatarCards.q1}
                question2={AI.avatarCards.q2}
                projHref={AI.avatarCards.href}
                projectName={AI.avatarCards.projectName}
                front={AI.avatarCards.frontend}
                back={AI.avatarCards.backend}
                db={AI.avatarCards.db} 
                mResponsive={AI.avatarCards.mResponsive} />

            {/* footer for about page */}
            <div className='nav-about-aws'>                
                <div className='aws-about'>
                    <a href='https://www.linkedin.com/in/trey-warrick-928547169' alt='#'><img className='aws-sa-cert' src={Linkedin} alt='#' /></a>
                </div>                
                <div className='aws-about'>
                    <a href='https://github.com/iQuixotic/' alt='#'><img className='aws-sa-cert' src={Github} alt='#' /></a>
                </div>                
                <div className='aws-about'>
                    <img className='aws-sa-cert' src={AwsSaCert} alt='#' />
                </div>
            </div>
        </div>
    );
}

export default aboutPanel;









// import React from "react";
// import './style.css';
// import { AwsSaCert, Linkedin, Github, Seagulls } from "../../../assets";

// const aboutPanel = (props) => {
//     return(
//         <div className='about-panel'>
//             {/* <div className='image-block'> */}
//                 <img className='gulls' src={Seagulls} alt='#'/>
               


//             <h4 id='about-panel-main-project' className='about-panel-header'>iQuixotic95</h4>
//             <div className='about-panel-info'> 
//                 <div className='gray-line'></div>
//                 <label className='fancy-checkbox'>
//                     <div className='checkbox-div-for-fa'>
//                         <input type='checkbox'/>   
//                         <span className='more-less bg-white'> View </span>             
//                         <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
//                         <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
//                         <div className='about-project-info'>
//                             <em>Why is this project important?</em>
//                             <p>This project turned out bigger, better, and more beautiful that I could have ever hoped for. I 
//                                 was heavily inspired by Windows 95 if that wasn't obvious. I wanted to use a mix 
//                                 of fonts and colors to put my own spin on a 'classic' look. I feel that my style really shines
//                                 through on this project. I hope you enjoy using it as much as I enjoyed making it!!
//                             </p>
//                             <em>What can you do with it?</em>
//                             <p>There are links everywhere!! If you are absolutely lost, or unsure why I did something, check out the 
//                                 'help' page from the start menu to gain a little clarity. Enjoy!
//                             </p>
//                             <div className='github-spacing'>
//                                 <img className='github-token' src={Github} alt='#' /> 
//                                 <span className='github-txt'>  Github Project Page: </span>
//                                 <a className='github-link' href='https://github.com/iQuixotic/win95'>iQuixotic Portfolio</a>
//                             </div>
//                             <em>Quick and dirty</em>
//                             <table>
//                                 <tbody>
//                                     <tr><th>Subject</th><th>Tech</th></tr>
//                                     <tr><td>Frontend</td><td>Reactjs</td></tr>
//                                     <tr><td>Backend</td><td>Express</td></tr>
//                                     <tr><td>Database</td><td>None</td></tr>
//                                     <tr><td>Mobile Responsive</td><td>Not Yet...</td></tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </div>
//                 </label>
//             </div>

//             <h4 className='about-panel-header'>Portfolio</h4>
//             <div className='about-panel-info'>
//             <div className='gray-line'></div>
//             <label className='fancy-checkbox'>
//                     <div className='checkbox-div-for-fa'>
//                         <input  type='checkbox'/>   
//                         <span className='more-less bg-white'> View </span>             
//                         <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
//                         <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
//                         <div className='about-project-info'>
//                             <em>Why is this project important?</em>
//                             <p>This was my first Portfolio and I was super excited about it! It was the first time I bought 
//                                 a custom domain, and I hosted it on an Amazon EC2 instance. I also used jQuery and Materialize. 
//                                 I was really happy with how clean and readable the code turned out. It was also quite colorful (and 
//                                 I do love my oversaturated bright colors).
//                             </p>
//                             <em>What can you do with it?</em>
//                             <p>You can navigate to other projects I have posted. The carousel spins and changes the bottom 
//                                 paragraph text and header text with Javascript. There are links everywhere!! 
//                             </p>
//                             <div className='github-spacing'>
//                                 <img className='github-token' src={Github} alt='#' /> 
//                                 <span className='github-txt'>  Github Project Page: </span>
//                                 <a className='github-link' href='https://github.com/iQuixotic/portfolio-website'>Personal Portfolio</a>
//                             </div>
//                             <em>Quick and dirty</em>
//                             <table>
//                                 <tbody>
//                                 <tr><td>Frontend</td><td>jQuery</td></tr>
//                                     <tr><td>Backend</td><td>Express</td></tr>
//                                     <tr><td>Database</td><td>None</td></tr>
//                                     <tr><td>Mobile Responsive</td><td>Looks great on a phone!!</td></tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </div>
//                 </label>
//             </div>

//             <h4 className='about-panel-header'>Zenith Holdings</h4>
//             <div className='about-panel-info'>
//             <div className='gray-line'></div>
//                 <label className='fancy-checkbox'>
//                     <div className='checkbox-div-for-fa'>
//                         <input  type='checkbox'/>   
//                         <span className='more-less bg-white'> View </span>             
//                         <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
//                         <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
//                         <div className='about-project-info'>
//                             <em>Why is this project important?</em>
//                             <p>This is the first project I built using Typescript! Don't be fooled by the 
//                                 simplistic look! When I made this, I wanted to focus heavily on the logic and 
//                                 it shows. The speed of this app is incredible considering you're working with 
//                                 persistent data. Numbers are converted to strings complete with commas and dollar strings 
//                                 via a custom function.</p>
//                             <em>What can you do with it?</em>
//                             <p>You can add or subtract money from an account, check out previous transactions,
//                                 or create your own account. Data is persistent. Feel free to give it a shot! </p>
//                             <div className='github-spacing'>
//                                 <img className='github-token' src={Github} alt='#' /> 
//                                 <span className='github-txt'>  Github Project Page: </span>
//                                 <a className='github-link' href='https://github.com/iQuixotic/bank-app'>Zenith Holdings</a>
//                             </div>
//                             <em>Quick and dirty</em>
//                             <table>
//                                 <tbody>
//                                     <tr><th>Subject</th><th>Tech</th></tr>
//                                     <tr><td>Frontend</td><td>Reactjs with Typescript</td></tr>
//                                     <tr><td>Backend</td><td>Nodejs</td></tr>
//                                     <tr><td>Database</td><td>MongoDB</td></tr>
//                                     <tr><td>Mobile Responsive</td><td>Yes</td></tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </div>
//                 </label>
//             </div>

//             <h4 className='about-panel-header'>Picture Puzzles</h4>
//             <div className='about-panel-info'>
//             <div className='gray-line'></div>
//                 <label className='fancy-checkbox'>
//                     <div className='checkbox-div-for-fa'>
//                         <input  type='checkbox'/>   
//                         <span className='more-less bg-white'> View </span>             
//                         <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
//                         <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
//                         <div className='about-project-info'>
//                             <em>Why is this project important?</em>
//                             <p>This was really special to me because of the concept. I wanted to be able to 
//                                 take a picture, break it apart, and move the pieces around to put 
//                                 it back together. It was one of the first ideas I had when I started 
//                                 teaching myself to code, but at the time, I was unsure how I would even 
//                                 begin something like this. The idea of being able to drag and drop something to 
//                                 another part of the screen, was initially incomprehensible, yet here I am.
//                             </p>
//                             <em>What can you do with it?</em>
//                             <p>Select a puzzle to complete. Move each of the 16 pieces independantly by dragging
//                                  and dropping. If you want to see a reference picture, click the button at the 
//                                  bottom. Once you are done, click the 'How did I do?' button to find out your 
//                                  score.
//                             </p>
//                             <div className='github-spacing'>
//                                 <img className='github-token' src={Github} alt='#' /> 
//                                 <span className='github-txt'>  Github Project Page: </span>
//                                 <a className='github-link' href='https://github.com/iQuixotic/picture-puzzles'>Picture Puzzles</a>
//                             </div>
//                             <em>Quick and dirty</em>
//                             <table>
//                                 <tbody>
//                                     <tr><th>Subject</th><th>Tech</th></tr>
//                                     <tr><td>Frontend</td><td>Vanilla Javascript</td></tr>
//                                     <tr><td>Backend</td><td>Express Server</td></tr>
//                                     <tr><td>Database</td><td>None</td></tr>
//                                     <tr><td>Mobile Responsive</td><td>Yes</td></tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </div>
//                 </label>
//             </div>

//             <h4 className='about-panel-header'>Lil Libs</h4>
//             <div className='about-panel-info'>
//             <div className='gray-line'></div>
//                 <label className='fancy-checkbox'>
//                     <div className='checkbox-div-for-fa'>
//                         <input  type='checkbox'/>   
//                         <span className='more-less bg-white'> View </span>             
//                         <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
//                         <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
//                         <div className='about-project-info'>
//                             <em>Why is this project important?</em>
//                             <p>I worked on this project with a team and I really learned a lot because of it. This was a really 
//                                 involved application and it took 4 people 6 days to make it. I feel accomplished to have been 
//                                 one of those four. :)
//                             </p>
//                             <em>What can you do with it?</em>
//                             <p>You can make your own stories by filling in the blanks. You can also save and view saved stories.
//                             </p>
//                             <div className='github-spacing'>
//                                 <img className='github-token' src={Github} alt='#' /> 
//                                 <span className='github-txt'>  Github Project Page: </span>
//                                 <a className='github-link' href='https://github.com/vleague2/req.libs'>Lil Libs</a>
//                             </div>
//                             <em>Quick and dirty</em>
//                             <table>
//                                 <tbody>
//                                     <tr><th>Subject</th><th>Tech</th></tr>
//                                     <tr><td>Frontend</td><td>Handlebars (Javascript)</td></tr>
//                                     <tr><td>Backend</td>Nodejs<td></td></tr>
//                                     <tr><td>Database</td><td>SQL</td></tr>
//                                     <tr><td>Mobile Responsive</td><td>Yes</td></tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </div>
//                 </label>
//             </div>

//             <h4 className='about-panel-header'>Avatar Cards</h4>
//             <div className='about-panel-info'>
//             <div className='gray-line'></div>
//                 <label className='fancy-checkbox'>
//                     <div className='checkbox-div-for-fa'>
//                         <input  type='checkbox'/>   
//                         <span className='more-less bg-white'> View </span>             
//                         <i className="fas  bg-white fa-eye unchecked"> <span className='more-less bg-white'> More</span></i>
//                         <i className="fas  bg-white fa-eye-slash checked"><span className='more-less bg-white'> Less</span></i>
//                         <div className='about-project-info'>
//                             <em>Why is this project important?</em>
//                             <p>This was the very first project I built using React. Its beauty is in its simplicity. This was also 
//                                 one of the first projects that I remember really the 'feel' of. It just turned out really 
//                                 great, and in the end, I was all around happy with it. Also, I made it fully mobile responsive and 
//                                 it looks great on a phone.
//                             </p>
//                             <em>What can you do with it?</em>
//                             <p>Click the cards one at the time. Try to click each one once. If you perform 12 clicks without ever clicking 
//                                 the same card twice, you will be rewarded with a fancy Gif.
//                             </p>
//                             <div className='github-spacing'>
//                                 <img className='github-token' src={Github} alt='#' /> 
//                                 <span className='github-txt'>  Github Project Page: </span>
//                                 <a className='github-link' href='https://github.com/iQuixotic/react-cards'>React Cards</a>
//                             </div>
//                             <em>Quick and dirty</em>
//                             <table>
//                                 <tbody>
//                                     <tr><th>Subject</th><th>Tech</th></tr>
//                                     <tr><td>Frontend</td><td>Reactjs</td></tr>
//                                     <tr><td>Backend</td><td>Express</td></tr>
//                                     <tr><td>Database</td><td>None</td></tr>
//                                     <tr><td>Mobile Responsive</td><td>Yes</td></tr>
//                                 </tbody>
//                             </table>

//                         </div>
//                     </div>
//                 </label>
//             </div>
//             <div className='nav-about-aws'>
//                 <div className='aws-about'>
//                     <a href='https://www.linkedin.com/in/trey-warrick-928547169' alt='#'><img className='aws-sa-cert' src={Linkedin} alt='#' /></a>
//                 </div>
//                 <div className='aws-about'>
//                     <a href='https://github.com/iQuixotic/' alt='#'><img className='aws-sa-cert' src={Github} alt='#' /></a>
//                 </div>
//                 <div className='aws-about'>
//                     {/* <a href='' alt='#'> */}
//                         <img className='aws-sa-cert' src={AwsSaCert} alt='#' />
//                         {/* </a> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default aboutPanel;