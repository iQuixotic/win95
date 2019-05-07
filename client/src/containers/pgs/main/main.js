import * as React from "react";
import { Icon, Panel } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';

// import { API } from "../../../utils";

import './style.css';
// drummand
class Main extends React.Component {
    constructor(props) {  
        super(props);
        this.state = {
            panelOpen: true,
            panelShowing: 'Portfolio',
            startButtonActive: false,
            projArrowHover: false,
            panelHover: false
        };
        this.startButtonToggle = this.startButtonToggle.bind(this);
      }

      panelShowingStatusUpdate = () => {
          let panelOpen = !this.state.panelOpen
          this.setState({
              panelOpen: panelOpen
          })
      }

      startButtonToggle = () => {
        const toggle = !this.state.startButtonActive;
        const sm = document.getElementById('start-menu');
        if(this.state.startButtonActive) {
          sm.className += ' invisible';
          this.setState({ startButtonActive: toggle });
        } else {
          this.setState({ startButtonActive: toggle });
        sm.className -= ' invisible';
        }
      }

      projArrowHover = () => {
        const x = !this.state.projArrowHover;
        this.setState({
            projArrowHover: x
        })
      }

      panelHover = () => {
        const x = !this.state.panelHover;
        this.setState({
            panelHover: x
        })
      }

      openPanel = () => {
          this.panelHover();
          this.startButtonToggle();
          if(this.state.panelOpen === false) {
            this.panelShowingStatusUpdate(); 
          } 
      }

    render() {
    return(
        <Layout
            sbClick={this.startButtonToggle}
            hover={this.projArrowHover}
            noHover={this.projArrowHover}>
            <Icon src={RecycleBin_I} />
            <Icon src={Computer_I} />
            <Icon src={IE_I} />
            <Icon src={File_I} />
            {
                this.state.projArrowHover || this.state.panelHover ? (
                    <div 
                        onMouseEnter={this.panelHover} 
                        onMouseLeave={this.panelHover} 
                        onClick={this.openPanel} 
                        className='gray-box'>
                        <ul><li>Old Portfolio</li></ul>
                    </div>
                ): <div></div>
            }
            {
                this.state.panelOpen ? (
                    <Panel
                        panelId='Portfolio'
                        head='Portfolio' 
                        clickClosed={this.panelShowingStatusUpdate}/>
                ): <div></div>
            }
            
        </Layout>
    );
  }
}

export default Main;