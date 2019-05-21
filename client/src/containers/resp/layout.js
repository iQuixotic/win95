import React, { Component } from "react";
import { Backdrop, Burger,  Sidedrawer, Taskbar } from "../../components";
// import { default as Draggable } from 'react-draggable';
import { Loader, MQ } from "../../containers";
import './style.css';

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      sideDrawerOpen: false,
      startButtonActive: false,
    };
    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
  }

  componentDidMount = () => {
    this.startTime();
  }

  startTime = () => {
    setInterval(() => {
      let clock = document.getElementById('clock');
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      m = this.checkTime(m);
      let hd = h;
            clock.innerHTML = ((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
    }, 6000);
}

checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

  // animates sidedraw to close
  sideDrawerToggle() {
    const toggle = !this.state.sideDrawerOpen
    const sd = document.getElementById('SD')
    if(this.state.sideDrawerOpen){
      sd.className += ' moveOut'
      setTimeout(() => {
        this.setState({ sideDrawerOpen: toggle })      
      }, 1000);
    } else {
      this.setState({ sideDrawerOpen: toggle })      
    }
  }

  render() {
    return (
            <div className='Layout'>
              <MQ lowerLimit={600}>
                <Taskbar 
                  head={this.props.head}
                  panelOpen={this.props.panelOpen}
                  minClick={this.props.minClick}
                  minCn={this.props.minCn}
                  click={this.props.sbClick}
                  hover={this.props.hover}
                  noHover={this.props.noHover}
                  smiClick={this.props.smiClick}
                  internetInputVal={this.props.internetInputVal}
                  internetInputFocus={this.props.internetInputFocus}
                /> 
              </MQ>
              <MQ upperLimit={599}>
                {!this.state.sideDrawerOpen ?                  
                <div className='mobile-burger'><Burger size='4x' onClick={this.sideDrawerToggle}/></div> :
                <div onClick={this.sideDrawerToggle}><Sidedrawer/><Backdrop/></div>                            
                }
              </MQ>
              <div className='under-nav'>
                {this.props.children}
              </div>
              <div className='above-footer' />              
            </div>          
    );
  }
}

export default Loader(Layout);