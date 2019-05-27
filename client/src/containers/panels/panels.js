import * as React from "react";
import { Panel } from "../../components";
import { HELP } from "../../utils";
import './style.css';

// I've effectively eliminated all state from this page... eventtually need to get rid of it
class Panels extends React.Component {
 
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  render() {
    return (
      <div>
            <Panel
              initialHeight={450}
              initialWidth={340}
              dragDropRes={false}
              load={HELP.checkIfIframeLoaded}
              {...this.props}>

                {this.props.children}

          </Panel> 
      </div>
    );
  }
}

export default Panels;
