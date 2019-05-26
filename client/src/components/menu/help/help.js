import React from "react";
import { HelpPanelNav, QA } from '../../../components';
import './style.css';

const helpPanel = (props) => {
    return(
        <div className='help-panel'>
            <div className='help-panel-content'>

                {/* Navigation area for help page */}
                <HelpPanelNav />

{/* - - - - - - - - - - - - - - - - - How do I - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                    
                <h4 id='help-pg-how-to'>How?</h4>
                    <ul>
                        <li>
                            <p className='help-question'>{QA.questions.a}</p>
                            <p className='help-answer'>{QA.answers.a}<br/>{QA.answers.a2}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.b}</p>
                            <p className='help-answer'>{QA.answers.b}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.c}</p>
                            <p className='help-answer'>{QA.answers.c}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.d}</p>
                            <p className='help-answer'>{QA.answers.d}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.e}</p>
                            <p className='help-answer'>{QA.answers.e}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.f}</p>
                            <p className='help-answer'>{QA.answers.f}</p>
                        </li>
                    </ul>
{/* - - - - - - - - - - - FAQs - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
                <HelpPanelNav />                
                <h4 id='help-pg-faqs'>FAQ's</h4>
                <ul>
                    <li>
                        <p className='help-question'>{QA.questions.g}</p>
                        <p className='help-answer'>{QA.answers.g}</p>
                    </li>
                    <li>
                        <p className='help-question'>{QA.questions.h}</p>
                        <p className='help-answer'>{QA.answers.h}</p>
                    </li>
                    <li>
                        <p className='help-question'>{QA.questions.i}</p>
                        <p className='help-answer'>{QA.answers.i}</p>
                    </li>
                    </ul>
{/* - - - - - - - - - - - - - - - Acknowledgements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                <HelpPanelNav />         
                <h4 id='help-pg-acknowledgements'>Acknowledgements</h4>    
                    <ul>
                        <li>
                            <p className='help-question'>{QA.questions.j}</p>
                            <p className='help-answer'>{QA.answers.j}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.k}</p>
                            <p className='help-answer'>{QA.answers.k}</p>
                        </li>
                        <li>
                            <p className='help-question'>{QA.questions.l}</p>
                            <p className='help-answer'>{QA.answers.l}</p>
                        </li>

                    </ul>
{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}

            </div>
        </div>

    );
}

export default helpPanel;