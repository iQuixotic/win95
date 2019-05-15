import * as React from "react";
import { Icon, Panel } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';
import { HELP, OBJ } from "../../../utils";
import './style.css';

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

  // used to hide panel and change corresponding button aesthetics
  minUpdate = () => {
    this.setState({
      isMinimized: !this.state.isMinimized, 
      minClass: HELP.minUpdate(this.state.minClass)
    });
  }
    
  // panel is made visible/invisible with 'X' button
  togglePanel = () => {
    this.setState({ panelOpen: !this.state.panelOpen });
  }
    
  // panel size adjust between partial and full-size when hit 'SQUARE' button
  panelSizeUpdate = () => {
    this.setState({ panelSizeFull: !this.state.panelSizeFull });
  }

  // opens pannel with correct content (dispayed in title bar)
  panelShowingStatusUpdate = (arg) => {
    this.setState({
      panelOpen: true,
      head: arg,
      panelShowing: OBJ.panels.srcs[arg] ? OBJ.panels.srcs[arg] : OBJ.panels.comps[arg]
    })
    // const iframe = document.getElementById('iframe')
    // console.log(iframe)
    // iframe.src = iframe.src;
    // iframe.contentWindow.location.reload();
  }

  // show/hide start menu 
  startButtonToggle = () => {
    HELP.toggleStartVisibility(this.state.startButtonActive);
    this.setState({ startButtonActive: !this.state.startButtonActive });
  }

  // lets state know to open sub-panel
  projArrowHover = () => {
    this.setState({ projArrowHover: !this.state.projArrowHover });
  }

  // lets state know to keep sub-panel open
  panelHover = () => {
    this.setState({ panelHover: !this.state.panelHover });
  }

  // opens a draggable, resizable panel or iframe
  openPanel = (e) => {
    if(e.target.innerHTML !== '') this.panelHover();
    if (this.state.startButtonActive) this.startButtonToggle();
    this.panelShowingStatusUpdate(e.target.innerHTML === '' ? e.target.id : e.target.innerHTML);
  }

  render() {
    const panelChoicesArr = Object.keys(OBJ.panels.srcs);
    const menuMapper = panelChoicesArr.map(each => (
      <li key={each} onClick={this.openPanel}>{each}</li>
    ));
    const projectList = (
      <div
      onMouseEnter={this.panelHover}
      onMouseLeave={this.panelHover}
      className='gray-box'>
        <ul>
          {menuMapper}
        </ul>
      </div>
    )
    return (
      // Start button and taskbar plus 
      <Layout
        head={this.state.head}
        panelOpen={this.state.panelOpen}
        minClick={this.minUpdate}
        minCn={this.state.minClass}
        sbClick={this.startButtonToggle}
        hover={this.projArrowHover}
        noHover={this.projArrowHover}>

        {/* Icons */}
        <Icon src={RecycleBin_I} />
        <Icon src={Computer_I} />
        <Icon id='Internet' onDoubleClick={this.openPanel} src={IE_I} />
        <Icon src={File_I} />
        
        {/* start menu items */}
        {
          this.state.projArrowHover || this.state.panelHover ? projectList : <div></div>
        }

        {/* Inner window/panel */}
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
              {this.state.panelShowing}
            </Panel>
          ) : <div></div>
        }

      </Layout>
    );
  }
}

export default Main;