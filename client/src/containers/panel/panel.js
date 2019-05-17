// import React, { Component } from "react";

// import Draggable from 'react-draggable';
// import Resizable from 're-resizable';
// // import { Backdrop, Burger,  Sidedrawer, Taskbar } from "../../components";
// import './style.css';

// class Panel extends Component {
//   constructor(props) {  
//     super(props);
//     this.state = {
//         panelSizeFull: false,
//         panelOpen: true,
//         panelId: 'Portfolio'
//     };
//   }

//   panelShowingStatusUpdate = () => {
//     let panelOpen = !this.state.panelOpen
//     this.setState({
//       panelOpen: panelOpen
//     })
//   }

//   panelSizeUpdate = () => {
//     let panelSize = !this.state.panelSizeFull
//     this.setState({
//       panelSizeFull: panelSize
//     })
//   }



//   render() {
//     return (
            
//         <div>  
//         {
//             !this.state.panelSizeFull ? ( 
//         <div id='Portfolio' className='panel-starting-position'>  

//             <Draggable>
//                 <Resizable 
//                     enable={{top:true, right:false, bottom:false, left:true, 
//                     topRight:false, bottomRight:false, bottomLeft:false, topLeft:true}}
//                     className='panel'>
//                         <div  className='blue-top-box'>
//                             <h4 className='panel_header'>{this.props.head}</h4>
//                             <button onClick={this.panelShowingStatusUpdate} className='panel_btn'>X</button>
//                             <button onClick={this.panelSizeUpdate} className='panel_btn'>S</button>
//                             <button className='panel_btn'>-</button>
//                         </div>
//                         <iframe title='winder' className='inner-frame' src="http://www.iquixotic.com"></iframe>
//                 </Resizable>
//             </Draggable>
//         </div>
//                     ): (
//         <div id='Portfolio-full-size' className='panel-starting-position'>  
        
//                             <div  className='blue-top-box'>
//                                 <h4 className='panel_header'>{this.props.head}</h4>
//                                 <button onClick={this.panelShowingStatusUpdate} className='panel_btn'>X</button>
//                                 <button onClick={this.panelSizeUpdate} className='panel_btn'>S</button>
//                                 <button className='panel_btn'>-</button>
//                             </div>
//                             <iframe title='winder' className='inner-frame' src="http://www.iquixotic.com"></iframe>
//                         </div>)
//         }  
//         </div>
//     );
//   }
// }

// export default Panel;



// this.state.panelSizeFull ? (
                  //   <Panel
                  //     panelId='Portfolio-full-size'
                  //     head='Portfolio' 
                  //     dragDropRes={false}
                  //     clickClosed={this.panelShowingStatusUpdate}
                  //     expShr={this.panelSizeUpdate}
                  //     />

                  // ) : 
                  // <Panel
                  // panelId='Portfolio'
                  // head='Portfolio' 
                  // dragDropRes={true}
                  // clickClosed={this.panelShowingStatusUpdate}
                  // expShr={this.panelSizeUpdate}
                  // />