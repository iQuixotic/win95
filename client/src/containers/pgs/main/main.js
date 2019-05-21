import * as React from "react";
import { Icon, Panel } from "../../../components";
import { Layout } from "../../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../../assets';
// import { Building, Cards, Cat, LilLibs, Portfolio, Puzzle } from '../../../assets';
import { 
  AboutBook, Programs,  Contact, Shutdown,
  ProgramsHover,  AboutBookHover, ContactHover, 
  InfoHover, Info 
} from '../../../assets';
import { HELP, OBJ } from "../../../utils";
import './style.css';
import { default as Draggable } from "react-draggable";
// import Resizable from "re-resizable";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 'Portfolio',
      isMinimized: false,
      minClass: 'minimizer-btn-open',
      menuItemHover: [false, false, false, false],
      panelHover: false,
      panelOpen: true,
      panelShowing: 'http://www.iquixotic.com',
      panelSizeFull: false,
      projArrowHover: false,
      startButtonActive: false,
      panelClassName: OBJ.panelClassName,
      internetInputVal: '',
      internetInputFocus: false
    };
    this.startButtonToggle = this.startButtonToggle.bind(this);
    this.menuItemHover = this.menuItemHover.bind(this);
  }

  componentDidMount = () => {

    // document.body.classList += 'chains-bg';
  document.addEventListener('click', (e)=> {
    if(e.target.id === 'internet-iq-input') {
      console.log(e.target)
      this.setState({ internetInputFocus: true })
    } else { this.setState({ internetInputFocus: false }); console.log(e.target)}
    console.log(this.state.internetInputFocus)
  })
  }

  // basically, passing through an ID which will spit out which items are being hovered over to update pic...
  menuItemHover = (e) => {
    let id = e.currentTarget.id;
    if(id === 'menu-item0') this.projArrowHover();
    let arrNum = parseInt(id.substring(9));
    let oldArr = this.state.menuItemHover;
    oldArr[arrNum] = !oldArr[arrNum]
    let newArr = oldArr
    if(this.state.menuItemHover[0] !== newArr[0]) this.projArrowHover();
    this.setState({ menuItemHover: newArr })
  }

  // start-menu-item handler
  smiClickHandler = (e) => {
    // console.log(e.currentTarget.id)
    // this.panelShowingStatusUpdate(e.currentTarget.id)
    this.setState({ 
      panelShowing: OBJ.startMenu[e.currentTarget.id].show, 
      head: OBJ.startMenu[e.currentTarget.id].head,
      panelOpen: true 
    });
    this.startButtonToggle();
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
      panelOpen: false,
      head: arg,
      panelShowing: OBJ.panels.srcs[arg] ? OBJ.panels.srcs[arg] : OBJ.panels.comps[arg]
    });
    HELP.wait(this.togglePanel, 100);
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
    if(e.currentTarget.innerHTML !== '') this.panelHover();
    if(this.state.startButtonActive) this.startButtonToggle();
    if(e.currentTarget.id === 'Internet') HELP.giveMeInternet(this.panelShowingStatusUpdate);
    // if it's a clicked icon, open by ID, ELSEIF it's from the start menu, only gets html after the image
    else this.panelShowingStatusUpdate(e.currentTarget.id)
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  render() {
    const panelChoicesArr = Object.keys(OBJ.panels.srcs);
    const menuMapper = panelChoicesArr.map(each => (
      <li id={each} key={each} onClick={this.openPanel}>
        {OBJ.pictures[each]}<span className='menu-word-spacing'>{each}</span>
      </li>
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
        hover={this.menuItemHover}
        noHover={this.menuItemHover}
        src1={this.state.menuItemHover[0] ? ProgramsHover : Programs}
        src2={this.state.menuItemHover[1] ? InfoHover : Info}
        src3={this.state.menuItemHover[2] ? AboutBookHover : AboutBook}
        src4={this.state.menuItemHover[3] ? ContactHover : Contact}
        src5={Shutdown}
        smiClick={this.smiClickHandler}
        >

        {/* Icons */}
        <Icon iconName='Recycle Bin' id='Recycle Bin' src={RecycleBin_I} onDoubleClick={this.openPanel} />
        <Icon iconName='Computer' id='Computer' src={Computer_I} onDoubleClick={this.openPanel} />
        <Icon iconName='The Internet' id='Internet' onDoubleClick={this.openPanel} src={IE_I} />
        <Icon iconName='Files' id='Files' src={File_I} onDoubleClick={this.openPanel} />
        
        {/* start menu items */}
        { this.state.projArrowHover || this.state.panelHover ? projectList : <div></div> }

        {/* Inner window/panel */}
        {
          this.state.panelOpen ? (
            <Panel
              cn={this.state.isMinimized ? 'invisible' : ''}
              minimize={this.minUpdate}
              panelSizeFull={this.state.panelSizeFull}
              head={this.state.head}
              initialHeight={450}
              initialWidth={340}
              dragDropRes={false}
              clickClosed={this.togglePanel}
              expShr={this.panelSizeUpdate}
              load={HELP.checkIfIframeLoaded}
              src={typeof this.state.panelShowing === 'string' && (this.state.panelShowing).substring(0,4) === 'http' ? this.state.panelShowing : ''}
              panelClassName={this.state.panelClassName[this.state.head]}
               divIsDraggable={!this.state.internetInputFocus ? Draggable : 'div'}
              internetInputVal={this.state.internetInputVal}
              internetInputFocus={this.state.internetInputFocus}
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



    // let str = e.currentTarget.children[1].innerHTML;
    // .substring(str.indexOf('>') + 1));