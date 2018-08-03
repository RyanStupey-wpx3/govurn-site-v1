// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navbar/>


//       </div>
//     );
//   }
// }

// export default App;
import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  tabs: {
  },
  slide: {
    color: '#fff',
  },
  
};

class MyComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      index:1,
    }
  }
  handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };
  // creating div to put behind non-opaque-content give new div a background-color: none;
  // 
render(){
  const { index } = this.state;
  return (
  <div>
     <div value={index} className="nav-parent" style={styles.tabs}>
    {/* for refactor put handleChange in Navbar.js */}
          <div  onClick={(e) => this.handleChange(e, 0)} className="link ContactUs"> About </div>
          <div  onClick={(e) => this.handleChange(e, 1)} className="link ContactUs">Services</div>
          <div  onClick={(e) => this.handleChange(e, 2)} className=" link center-link"><img src={require('./images/govurnLogo.png')}/> </div>
          <div  onClick={(e) => this.handleChange(e, 3)}className=" link About">Team </div>
          <div  onClick={(e) => this.handleChange(e, 4)}className=" link About">Contact </div>
        </div>
  {/* <Navbar/> */}
  <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
  <div className="slide-parent">
    <div className="non-opaque-content slide1">  <h2>About</h2></div>
    <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide1)}>
    </div>
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide1">  <h2>Services</h2></div>
    <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide1)}>
    </div>
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide2">  <h2>Main</h2></div>
    <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide2)}>
    </div>
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide3">  <h2>Team</h2></div>
    <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide3)}>
    </div>
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide1">  <h2>Contact</h2></div>
    <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide1)}>
    </div>
  </div>

  </SwipeableViews>
  </div>
);
//^ paren for return
} 
//^curly for render
}
//^curly for component
export default MyComponent;