import * as React from "react";
import { Icon } from "../../components";
import { Layout, Panels, Switch } from "../../containers";
import { RecycleBin_I, Computer_I, File_I, IE_I } from '../../assets';
import { HELP, OBJ } from "../../utils";
import './style.css';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      head: 'Portfolio',
      isMinimized: false,
      minClass: 'minimizer-btn-open',
      panelOpen: true,
      panelShowing: 'http://3.144.85.76:4040/',
      panelSizeFull: false,
      projArrowHover: false,
      startButtonActive: false,
      panelClassName: OBJ.panelClassName,
      backgroundSelected: '',
      backgroundUsing:'carved-blocks-bg',
      isHighlighted: false,
      currentHighligted: '',
      isDialing: true
    };
    this.startButtonToggle = this.startButtonToggle.bind(this);
    this.backgroundEditHandler = this.backgroundEditHandler.bind(this);
  }

  // - - - - - - - - - - - - - - - - - - Backgrounds and Highlighers - - - - - - - - - - - - - - - - - - -
  
  // determine what to highlight
  backgroundSelectHandler = (e) => {
    let z, x = e.currentTarget;
    z = x.id.includes('-bg') ? 'highlighted-blue' : 'highlighted-blue-dotted';
    this.setState({ backgroundSelected: x.id });
    if (x.id !== this.state.backgroundSelected) this.highlightHandler(x, z);
  }
  
  // add a css class highlight where needed
  highlightHandler = (arg, z) => {
    let y = document.getElementsByClassName(' ' + z)
    if(y.length > 0) [].forEach.call(y, (el) => el.classList.remove(z));
    arg.classList += ' ' + z;
  }

  // update the background of the body
  backgroundEditHandler = () => {
    document.body.removeAttribute('class')    
    this.setState({ backgroundUsing: this.state.backgroundSelected });  
    this.backgroundUpdateHandler()    
  }
  
  // set the background of the body to the current selected background
  backgroundUpdateHandler = () => {
    document.body.classList += this.state.backgroundSelected;
  }
  
  
  //- - - - - - - - - - - - - - - - - - Start Menu Functions - - - - - - - - - - - - - - - - - - - - - - 
  
  // opens and closes start menu via button click
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
  
  // - - - - - - - - - - - - - - - - - - Panel Displaying Logic - - - - - - - - - - - - - - - - - - -
  
  // used to hide panel and change corresponding button aesthetics
  minUpdate = () => {
    this.setState({
      isMinimized: !this.state.isMinimized, 
      minClass: HELP.minUpdate(this.state.minClass)
    });
  }
  
  // panel is made visible/invisible with 'X' or CANCEL button
  togglePanel = () => {
    this.setState({ panelOpen: !this.state.panelOpen });
  }
  
  // panel size adjust between partial and full-size when hit 'SQUARE' button
  panelSizeUpdate = () => {
    this.setState({ panelSizeFull: !this.state.panelSizeFull });
  }
  
  //- - - - - - - - - - - - - - - - - - Panel Opening Logic - - - - - - - - - - - - - - - - - - - - - - 
  
  // start-menu-item click handler
  smiClickHandler = (e) => {
    this.setState({ 
      isMinimized: false,
      minClass: 'minimizer-btn-open',
      panelShowing: OBJ.startMenu[e.currentTarget.id].show, 
      head: OBJ.startMenu[e.currentTarget.id].head,
      panelOpen: true 
    });
    this.startButtonToggle();
  }
  
  // opens a draggable, resizable iframe or draggable panel
  openPanel = (e) => {
    this.updateDialingHandler(true)
    let x = e.currentTarget;
    // if you're not hovering over desktop icon
    if(x.innerHTML !== '' && !x.classList.contains('icon-plus-txt')) this.panelHover(); 
    if(this.state.startButtonActive) this.startButtonToggle();
    if(x.id === 'Internet') this.openInternetHandler();
    // if it's a clicked icon, open by ID, ELSEIF it's from the start menu, only gets html after the image
    else this.panelShowingStatusUpdate(e.currentTarget.id);
  }

  // opens pannel with correct content (dispayed in title bar)
  panelShowingStatusUpdate = (arg) => {
    this.setState({
      isMinimized: false,
      minClass: 'minimizer-btn-open',
      panelOpen: false,
      head: arg,
      panelShowing: OBJ.panels.srcs[arg] ? OBJ.panels.srcs[arg] : (
        <Switch isDialing={this.state.isDialing} panelUse={arg.trim()} {...this.props} />
        ) 
      });
      HELP.wait(this.togglePanel, 100);
    }

  //- - - - - - - - - - - - - - - - - - Internet Panel Logic - - - - - - - - - - - - - - - - - - - - - - 
    
    // special case for internet
    openInternetHandler = () => {
      HELP.giveMeInternet(this.updateDialingHandler, this.panelShowingStatusUpdate); 
      this.panelShowingStatusUpdate('Internet');
    }

    // determine if internet is still dialing
    updateDialingHandler = (x) => {
      this.setState({ isDialing: x})
    }
    
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // render method logic is about making a gray-backgrounded sub-menu for projects
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
        smiClick={this.smiClickHandler}
        hover={this.projArrowHover}
        noHover={this.projArrowHover}>

        {/* Icons */}
        <Icon onClick={this.backgroundSelectHandler}
          cn='icon-plus-txt'
          iconName='Recycle Bin' id='Recycle' 
          src={RecycleBin_I} onDoubleClick={this.openPanel} />
        <Icon onClick={this.backgroundSelectHandler}
          cn='icon-plus-txt'
          iconName='Computer' id='Computer' 
          src={Computer_I} onDoubleClick={this.openPanel} />
        <Icon onClick={this.backgroundSelectHandler}
          cn='icon-plus-txt'
          iconName='The Internet' id='Internet' 
          src={IE_I} onDoubleClick={this.openPanel} />
        <Icon onClick={this.backgroundSelectHandler}
          cn='icon-plus-txt'
          iconName='Files' id='Files' 
          src={File_I} onDoubleClick={this.openPanel} />
        
        {/* start menu items */}
        { this.state.projArrowHover || this.state.panelHover ? projectList : <div></div> }

        {/* Inner window/panel */}
        {
          this.state.panelOpen ? (
            <Panels
              cn={this.state.isMinimized ? 'invisible' : ''}
              minimize={this.minUpdate}
              panelSizeFull={this.state.panelSizeFull}
              head={this.state.head}
              clickClosed={this.togglePanel}
              expShr={this.panelSizeUpdate}
              src={typeof this.state.panelShowing === 'string' && (this.state.panelShowing).substring(0,4) === 'http' ? this.state.panelShowing : ''}
              panelClassName={this.state.panelClassName[this.state.head]}
              selectBG={this.backgroundSelectHandler}
              applyBG={this.backgroundEditHandler}
              isDialing={this.state.isDialing}
            >
              {this.state.panelShowing}
            </Panels>
          ) : <div></div>
        }
      </Layout>
    );
  }
}

export default Main;



    // let str = e.currentTarget.children[1].innerHTML;
    // .substring(str.indexOf('>') + 1));