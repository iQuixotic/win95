import * as React from "react";
import { 
    DialUpPanel, ShutdownPanel,  FilesPanel, ComputerPanel, InternetPanel, RecycleBinPanel
} from "../../components";

class Switch extends React.Component { 

  getPanel = () => {
    switch (this.props.panelUse) {
        case 'Computer':
            return <ComputerPanel {...this.props} />
          case 'Files':
              return <FilesPanel {...this.props} />
          case 'Dialing':
              return <DialUpPanel {...this.props} />
          case 'Internet':
              return <InternetPanel {...this.props} />
          case 'Recycle':
              return <RecycleBinPanel {...this.props} />
            default: return <ShutdownPanel {...this.props} />
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
