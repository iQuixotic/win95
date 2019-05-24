import * as React from "react";
import { 
    DialUpPanel, ShutdownPanel,  FilesPanel, ComputerPanel, InternetPanel, RecycleBinPanel
} from "../../components";
import { default as SECRET } from "../../master/secret";
// import { API }  from "../../utils";


class Switch extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      internetInput: '',
      resGifs: []
    };
    this.getIntenetInput = this.getIntenetInput.bind(this);
  }

  componentDidMount = () => console.log('Switch did mount.')
  componentWillUnmount = () => console.log('Switch did UN - UN - UNmount.')

  
  internetInputKeydown = (e) => {
    this.setState({[e.target.name]: e.target.value});
    console.log(this.state);
  }

  getIntenetInput = () => {
    let query = this.state.internetInput
        fetch(`${SECRET.GIPHY_URL}${query}${SECRET.GIPHY_API_KEY}`)
            .then(res => res.json())
            .then(res => this.setState({ resGifs: res.data }))
            .then(() => console.log(this.state.resGifs))
            .catch(err => console.log("Can’t access response. Blocked by browser?", err));
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
              return <InternetPanel {...this.props}
                        keydown={this.internetInputKeydown} 
                        click={this.getIntenetInput} 
                        isDialing={this.props.isDialing} 
                        resGifs={this.state.resGifs}/>
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
