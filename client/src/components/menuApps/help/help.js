import React from "react";
import { HelpPanelNav, QA, QABlock } from '../../../components';
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
                        <QABlock question={QA.questions.a}>{QA.answers.a}<br/>{QA.answers.a2}</QABlock>
                        <QABlock question={QA.questions.b}>{QA.answers.b}</QABlock>
                        <QABlock question={QA.questions.c}>{QA.answers.c}</QABlock>
                        <QABlock question={QA.questions.d}>{QA.answers.d}</QABlock>
                        <QABlock question={QA.questions.e}>{QA.answers.e}</QABlock>
                        <QABlock question={QA.questions.f}>{QA.answers.f}</QABlock>
                    </ul>
{/* - - - - - - - - - - - FAQs - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */}
                
                {!props.panelSizeFull ? <HelpPanelNav />  : <div></div>}              
                <h4 id='help-pg-faqs'>FAQ's</h4>
                <ul>
                    <QABlock question={QA.questions.g}>{QA.answers.g}</QABlock>
                    <QABlock question={QA.questions.h}>{QA.answers.h}</QABlock>
                    <QABlock question={QA.questions.i}>{QA.answers.i}</QABlock>
                </ul>
{/* - - - - - - - - - - - - - - - Acknowledgements - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
                
                {!props.panelSizeFull ? <HelpPanelNav />  : <div></div>}         
                <h4 id='help-pg-acknowledgements'>Acknowledgements</h4>    
                <ul>
                    <QABlock question={QA.questions.j}>{QA.answers.j}</QABlock>
                    <QABlock question={QA.questions.k}>{QA.answers.k}</QABlock>
                    <QABlock question={QA.questions.l}>{QA.answers.l}</QABlock>
                </ul>
{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */}
            </div>
        </div>
    );
}

export default helpPanel;