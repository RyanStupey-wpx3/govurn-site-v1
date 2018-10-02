// import React, { Component } from 'react';
// import SwipeableViews from 'react-swipeable-views';
// const styles = {
//     tabs: {
//     },
//     slide: {
//       color: '#fff',
//     },
    
//   };

// export default class Projects extends Component {
//     constructor(props){
//         super(props)
    
//         this.state = {
//           index:1,
//         }
//       }
//       handleChange = (event, value) => {
//         this.setState({
//           index: value,
//         });
//       };
    
//       handleChangeIndex = index => {
//         this.setState({
//           index,
//         });
//       };
//       // creating div to put behind non-opaque-content give new div a background-color: none;
//       // 
//     render(){
//       const { index } = this.state;
//       return (
//       <div>
//          <div value={index} className="nav-parent" style={styles.tabs}>
//         {/* for refactor put handleChange in Navbar.js */}
             
//             </div>
//       {/* <Navbar/> */}
//       <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
//       <div className="slide-parent">
//         <div className="non-opaque-content slide1">  <h2>About</h2></div>
//         <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide1)}>
//         </div>
//       </div>
//       <div className="slide-parent">
//         <div className="non-opaque-content slide1">  <h2>Projects</h2><Projects/></div>
//         <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide1)}>
//         </div>
//       </div>
//       <div className="slide-parent">
//         <div className="non-opaque-content slide2">  <h2>Main</h2></div>
//         <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide2)}>
//         </div>
//       </div>
//       <div className="slide-parent">
//         <div className="non-opaque-content slide3">  <h2>Team</h2></div>
//         <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide3)}>
//         </div>
//       </div>
//       <div className="slide-parent">
//         <div className="non-opaque-content slide1">  <h2>Contact</h2></div>
//         <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide1)}>
//         </div>
//       </div>
    
//       </SwipeableViews>
//       </div>
//     );
//     //^ paren for return
//     } 
//     //^curly for render
// }