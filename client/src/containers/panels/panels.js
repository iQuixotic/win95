import * as React from "react";
import { Panel } from "../../components";
import { Layout } from "../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I, AboutBook } from '../../assets';
import { HELP, OBJ } from "../../utils";
import './style.css';
import { default as Draggable } from "react-draggable";


class Panels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        internetInputVal: '',
        internetInputFocus: false,
    };
    // this.backgroundEditHandler = this.backgroundEditHandler.bind(this);
  }

  componentDidMount = () => {
  document.addEventListener('click', (e)=> {
    if(e.target.id === 'internet-iq-input') {
      this.setState({ internetInputFocus: true })
    } else { this.setState({ internetInputFocus: false }); }
    // console.log(this.state.internetInputFocus)
  })
  }

 
  
  // used to hide panel and change corresponding button aesthetics
 

  getPanel = () => {

  }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  render() {
    return (
      <div>
            <Panel
              cn={this.props.cn}
              minimize={this.props.minimize}
              panelSizeFull={this.props.panelSizeFull}
              head={this.props.head}
              initialHeight={450}
              initialWidth={340}
              dragDropRes={false}
              clickClosed={this.props.clickClosed}
              expShr={this.props.expShr}
              load={HELP.checkIfIframeLoaded}
              src={this.props.src}
              panelClassName={this.props.panelClassName}
               divIsDraggable={!this.state.internetInputFocus ? Draggable : 'div'}
              internetInputVal={this.state.internetInputVal}
              internetInputFocus={this.state.internetInputFocus}
              selectBG={this.props.selectBG}
              applyBG={this.props.applyBG}>

                {this.props.children}

          </Panel> 
      </div>
    );
  }
}

export default Panels;
