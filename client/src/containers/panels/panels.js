import * as React from "react";
import { Icon, Panel } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';
import { AboutBook } from '../../../assets';
import { HELP, OBJ } from "../../../utils";
import './style.css';
// import { default as Draggable } from "react-draggable";


class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 'Portfolio',
      isMinimized: false
    };
    // this.startButtonToggle = this.startButtonToggle.bind(this);
  }

  
  // used to hide panel and change corresponding button aesthetics
 

  getPanel = () => {

  }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  render() {
    return (
      <div>
          {
          this.state.panelOpen ? (
            <Panel
              cn={this.state.isMinimized ? 'invisible' : ''}
              minimize={this.minUpdate}
              panelSizeFull={this.state.panelSizeFull}
              head={this.state.head}
              initialHeight={450}
              initialWidth={340}
              dragDropRes={false}
              clickClosed={this.togglePanel}
              expShr={this.panelSizeUpdate}
              load={HELP.checkIfIframeLoaded}
              src={typeof this.state.panelShowing === 'string' && (this.state.panelShowing).substring(0,4) === 'http' ? this.state.panelShowing : ''}
              panelClassName={this.state.panelClassName[this.state.head]}
               divIsDraggable={!this.state.internetInputFocus ? Draggable : 'div'}
              internetInputVal={this.state.internetInputVal}
              internetInputFocus={this.state.internetInputFocus}
            >
              {this.state.panelShowing}

          </Panel> ) : <div></div>
          }
      </div>
    );
  }
}

export default Panels;
