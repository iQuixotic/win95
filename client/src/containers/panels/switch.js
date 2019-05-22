import * as React from "react";
import { 
    DialUpPanel, ShutdownPanel,  FilesPanel, ComputerPanel, InternetPanel
} from "../../components";

class Switch extends React.Component { 

  getPanel = () => {
    switch (this.props.panelUse) {
        case 'Computer':
            return <ComputerPanel {...this.props} />
            break;
          case 'Files':
              return <FilesPanel {...this.props} />
              break;
          case 'Dialing':
              return <DialUpPanel {...this.props} />
              break;
          case 'Internet':
              return <InternetPanel {...this.props} />
              break;
          case 'RecycleBin':
              return <ShutdownPanel {...this.props} />
              break;
            default: return <ShutdownPanel {...this.props} />
              break;
          }
  }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  render() {
      const component = this.getPanel();
    return (
      <span>
          {component}
      </span>
    );
  }
}

export default Switch;
