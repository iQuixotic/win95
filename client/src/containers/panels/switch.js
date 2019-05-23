import * as React from "react";
import { 
    DialUpPanel, ShutdownPanel,  FilesPanel, ComputerPanel, InternetPanel, RecycleBinPanel
} from "../../components";
import { API }  from "../../utils";


class Switch extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      internetInput: ''
    };
    this.getIntenetInput = this.getIntenetInput.bind(this);
  }

  internetInputKeydown = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  getIntenetInput = (e) => {
    API.getQueryGiphy(this.state.internetInput)
  }

  getPanel = () => {
    switch (this.props.panelUse) {
        case 'Computer':
            return <ComputerPanel {...this.props} />
          case 'Files':
              return <FilesPanel {...this.props} />
          case 'Dialing':
              return <DialUpPanel {...this.props} />
          case 'Internet':
              return <InternetPanel 
                        keydown={this.internetInputKeydown} 
                        click={this.getIntenetInput} {...this.props} />
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
