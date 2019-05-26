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


