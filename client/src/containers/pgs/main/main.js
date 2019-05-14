import * as React from "react";
import { Icon, Panel } from "../../../components";
import {
  Layout
} from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';
// import { API } from "../../../utils";
import './style.css';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 'Portfolio',
      isMinimized: false,
      minClass: 'minimizer-btn-open',
      panelOpen: true,
      panels: {
        'Portfolio': 'http://www.iquixotic.com',
        'Zenith': 'https://bank-manager-app-9485.herokuapp.com/'
      },
      panelSizeFull: false,
      panelShowing: 'http://www.iquixotic.com',
      startButtonActive: false,
      projArrowHover: false,
      panelHover: false
    };
    this.startButtonToggle = this.startButtonToggle.bind(this);
  }


  minUpdate = () => {
    console.log(this.state.isMinimized, this.state.minClass)
    let isMinimized = !this.state.isMinimized
    if(this.state.minClass === 'minimizer-btn-open') {
      this.setState({ isMinimized: isMinimized, minClass: 'minimizer-btn' })
    } else {
      this.setState({ isMinimized: isMinimized, minClass: 'minimizer-btn-open' })
    }
  }

  panelShowingStatusUpdate = (arg) => {
    console.log(arg)
    console.log('this state panels args', arg, this.state.panels[arg])
    let panelOpen = !this.state.panelOpen
    this.setState({
      panelOpen: panelOpen, 
      head: arg,
      panelShowing: this.state.panels[arg]
      // panelShowingStatusUpdate: arg
    })
    console.log(this.state)
  }

  panelSizeUpdate = () => {
    let panelSize = !this.state.panelSizeFull
    this.setState({
      panelSizeFull: panelSize
    })
  }

  startButtonToggle = () => {
    const toggle = !this.state.startButtonActive;
    const sm = document.getElementById('start-menu');
    if (this.state.startButtonActive) {
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

  openPanel = (e) => {
    // console.log(e.target.innerHTML)
    console.log(e.target.innerHTML)
    this.panelHover();
    this.startButtonToggle();
    if (this.state.panelOpen === false) {
      this.panelShowingStatusUpdate(e.target.innerHTML);
    }
  }

  render() {
    return (
      <Layout
        head={this.state.head}
        panelOpen={this.state.panelOpen}
        minClick={this.minUpdate}
        // minimized={this.state.isMinimized}
        minCn={this.state.minClass}
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
              // onClick={this.openPanel}
              className='gray-box'>
              <ul>
                <li onClick={this.openPanel}>Portfolio</li>
                <li onClick={this.openPanel}>Zenith</li>
                <li onClick={this.openPanel}>Cat Clicker</li>
                <li onClick={this.openPanel}>Picture Puzzles</li>
                <li onClick={this.openPanel}>Lil Libs</li>
                <li onClick={this.openPanel}>Avatar Cards</li>
              </ul>
            </div>
          ) : <div></div>
        }
        {
          this.state.panelOpen && !this.state.isMinimized ? (
            <Panel
              minimize={this.minUpdate}
              panelSizeFull={this.state.panelSizeFull}
              panelId='Portfolio-full-size'
              head={this.state.head}
              dragDropRes={false}
              clickClosed={this.panelShowingStatusUpdate}
              expShr={this.panelSizeUpdate}
              // src='https://bank-manager-app-9485.herokuapp.com/'
              src={this.state.panelShowing}
            />
          ) : <div></div>
        }
      </Layout>
    );
  }
}

export default Main;