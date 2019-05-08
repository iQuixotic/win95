import React, { Component } from "react";

import './style.css';

class Corners extends Component {
  constructor(props) {  
    super(props);
    this.state = {
        width: '200px',
        height: '200px'
    }
    // this.onResize = this.onResize.bind(this);

  }
    

  render() {
    return (
            <div className={this.props.cn} > 
                
            </div>          
    );
  }
}

export default Corners;