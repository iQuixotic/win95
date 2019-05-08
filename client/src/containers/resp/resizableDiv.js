import React, { Component } from "react";

class ResizableDiv extends Component {
  constructor(props) {  
    super(props);
    // this.ref = React.createRef();
    this.state = {
        width: '200px',
        height: '200px'
    }
    this.onResize = this.onResize.bind(this);

  }
    onResize = () => {
        // this.setState({
        //     width: size.width,
        //     height: size.height
        // });
        console.log(this.state)
    };

  

//   componentDidMount = () => {
//       const elem = this.ref.current;
//       elem.addEventListener('resize', (e) => {
//           console.log(e.detail)
//       })
//       function checkResize(mutations) {
//           const el = mutations[0].target;
//           const w = el.clientWidth;
//           const h = el.clientHeight;
//           const isChange = mutations
//             .map((m) => `${m.oldValue}`)
//             .some((prev) => prev.indexOf(`width: ${w}px`) === -1);

//         if(!isChange) {
//             return;
//         }
//         const event = new CustomEvent('resize', {
//             detail: { 
//                 width: w,
//                 height: h
//             }
//         });

//         el.dispatchEvent(event);
//       } 
//       const observer = new MutationObserver(checkResize);
//       observer.observe(elem, {
//           attributes: true,
//           attributeOldValue: true, 
//           attributeFilter: ['style']
//       });
//   }

  render() {
    return (
            <div height={this.state.height} onResize={this.onResize}> 
                {this.props.children}
            </div>          
    );
  }
}

export default ResizableDiv;