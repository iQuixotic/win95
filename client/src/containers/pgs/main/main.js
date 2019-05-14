import * as React from "react";
import { Icon, Panel, DialUpPanel } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';
import './style.css';

const panels = {
  'Portfolio': 'http://www.iquixotic.com',
  'Zenith': 'https://bank-manager-app-9485.herokuapp.com/',
  'Cat Clicker': 'https://iquixotic.github.io/cat-clicker-game/',
  'Picture Puzzles': 'https://picture-puzzles.herokuapp.com/',
  'Lil Libs': 'https://req-libs.herokuapp.com/',
  'Avatar Cards': 'https://avatar-card-tribute-game-89458.herokuapp.com/',
  'Internet': <DialUpPanel />
  // 'Github': 'https://github.com/iQuixotic'
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 'Portfolio',
      isMinimized: false,
      minClass: 'minimizer-btn-open',
      panelOpen: true,
      panelSizeFull: false,
      panelShowing: 'http://www.iquixotic.com',
      startButtonActive: false,
      projArrowHover: false,
      panelHover: false
    };
    this.startButtonToggle = this.startButtonToggle.bind(this);
  }


  minUpdate = () => {
    // console.log(this.state.isMinimized, this.state.minClass)
    let isMinimized = !this.state.isMinimized
    if(this.state.minClass === 'minimizer-btn-open') {
      this.setState({ isMinimized: isMinimized, minClass: 'minimizer-btn' })
    } else {
      this.setState({ isMinimized: isMinimized, minClass: 'minimizer-btn-open' })
    }
  }

  togglePanel = () => {
    let panelOpen = !this.state.panelOpen
    this.setState({
      panelOpen: panelOpen
    })
  }

  panelShowingStatusUpdate = (arg) => {
    this.setState({
      panelOpen: true,
      head: arg,
      panelShowing: panels[arg]
    })
    // const iframe = document.getElementById('iframe')
    // console.log(iframe)
    // iframe.src = iframe.src;
    // iframe.contentWindow.location.reload();
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
    this.panelHover();
    this.startButtonToggle();
    // console.log(panels[e.target.innerHTML].substring(0, 4))
    if(e.target.innerHTML === '' ) {
      console.log(e.target.id)
      this.panelShowingStatusUpdate(e.target.id);
    } else {
      this.panelShowingStatusUpdate(e.target.innerHTML);
    }      
    // if (this.state.panelOpen === false) {
    // }
  }

  openInternet = () => {

  }

  render() {
    return (
      <Layout
        head={this.state.head}
        panelOpen={this.state.panelOpen}
        minClick={this.minUpdate}
        minCn={this.state.minClass}
        sbClick={this.startButtonToggle}
        hover={this.projArrowHover}
        noHover={this.projArrowHover}>
        <Icon src={RecycleBin_I} />
        <Icon src={Computer_I} />
        <Icon id='Internet' onDoubleClick={this.openPanel} src={IE_I} />
        <Icon src={File_I} />
        {/* <DialUpPanel /> */}
        
        {
          this.state.projArrowHover || this.state.panelHover ? (
            <div
              onMouseEnter={this.panelHover}
              onMouseLeave={this.panelHover}
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
          this.state.panelOpen ? (
            <Panel
              cn={this.state.isMinimized ? 'invisible' : ''}
              minimize={this.minUpdate}
              panelSizeFull={this.state.panelSizeFull}
              head={this.state.head}
              dragDropRes={false}
              clickClosed={this.togglePanel}
              expShr={this.panelSizeUpdate}
              src={typeof this.state.panelShowing === 'string' && (this.state.panelShowing).substring(0,4) === 'http' ? this.state.panelShowing : ''}
            >
            <h1>Something good will go here</h1>
            {this.state.panelShowing}
            </Panel>
          ) : <div></div>
        }
      </Layout>
    );
  }
}

export default Main;