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

            {/* Do NOT map over this one for now */}
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

            {/* map over the AI (About Info) object to get inner text */}
           {AI.projectKeys.map((el) => { return (
                <span>
                   <h4 className='about-panel-header'>{AI[el].projectName}</h4>
                   <AboutStruct 
                       projectName={AI[el].projectName}
                       question1={AI[el].q1}
                       question2={AI[el].q2}
                       projHref={AI[el].href}
                       front={AI[el].frontend}
                       back={AI[el].backend}
                       db={AI[el].db}
                       mResponsive={AI[el].mResponsive} />
               </span>)
           })}

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


