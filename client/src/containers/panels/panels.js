import * as React from "react";
import { Panel } from "../../components";
import { HELP } from "../../utils";
import './style.css';
// import { default as Draggable } from "react-draggable";


class Panels extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       internetInputVal: '',
  //       internetInputFocus: false,
  //   };
  // }

  // componentDidMount = () => {
  // document.addEventListener('click', (e)=> {
  //   if(e.target.id === 'internet-iq-input') {
  //     this.setState({ internetInputFocus: true })
  //   } else { this.setState({ internetInputFocus: false }); }
  // })
  // }

 
  
  // used to hide panel and change corresponding button aesthetics
 

  // getPanel = () => {

  // }


  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  render() {
    return (
      <div>
            <Panel
              {...this.props}
              // cn={this.props.cn}
              // minimize={this.props.minimize}
              // head={this.props.head}
              // clickClosed={this.props.clickClosed}
              // expShr={this.props.expShr}
              // panelSizeFull={this.props.panelSizeFull}
              // panelClassName={this.props.panelClassName}
              // src={this.props.src}
              // selectBG={this.props.selectBG}
              // applyBG={this.props.applyBG}
              initialHeight={450}
              initialWidth={340}
              dragDropRes={false}
              load={HELP.checkIfIframeLoaded}
              // internetInputVal={this.state.internetInputVal}
              // internetInputFocus={this.state.internetInputFocus}
              >

                {this.props.children}

          </Panel> 
      </div>
    );
  }
}

export default Panels;
