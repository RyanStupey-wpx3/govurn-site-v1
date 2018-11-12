// import React, { Component } from 'react';
// import logo from './logo.svg';

import './App.css';
// import Projects from './components/Projects'
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
import Contact from './components/Contact/Contact'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// const styles = {
//   tabs: {
//   },
//   slide: {
//     color: '#fff',
//   },
  
// };
window.scrollTo(0,0)
const styles = {
  nestedSlide: {
    height: 600, 
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
    backgroundColor:'#FFFFFF'
  },
  slide1: {
    height: '4rem',
    overflow: 'visible'
  },
  slideContainerY: {
    height: 100,
  },
  divider: {
    height: 50,
  },
};

class MyComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      index:0,
      indexProj:0,
    }
    this.handleChangeIndexProjects = this.handleChangeIndexProjects.bind(this);
    this.handleChangeProjects = this.handleChangeProjects.bind(this)
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

  handleChangeProjects = (event, value) => {
    this.setState({
      indexProj: value,
    });
  };

  handleChangeIndexProjects = indexProj => {
    this.setState({
      indexProj,
    });
  };
  // creating div to put behind non-opaque-content give new div a background-color: none;
  // 
render(){
  const { index, indexProj} = this.state;
  return (
  <div>
     <div value={index} className="nav-parent" style={styles.tabs}>
    {/* for refactor put handleChange in Navbar.js */}
        <div className="navDivLiLeft">
            <div  onClick={(e) => this.handleChange(e, 0)} className="link ContactUs"> About </div>
            <div  onClick={(e) => this.handleChange(e, 1)} className="link ContactUs">Projects</div>
        </div>
          <div className="center-link">RYAN STUPEY</div>
        <div className="navDivLiRight">
            <div  onClick={(e) => this.handleChange(e, 2)}className=" link About">Skills </div>
            <div  onClick={(e) => this.handleChange(e, 3)}className=" link About">Contact </div>
        </div>
        </div>
  {/* <Navbar/> */}
  <SwipeableViews index={index} indexProj={indexProj} onChangeIndex={this.handleChangeIndex}>
  <div className="slide-parent">
    <div className="non-opaque-content slide1">  
    <div className="h2ParentDivs"><h2>About me</h2></div>
      <div className="aboutMeParent">
      <div className="aboutMeImageDiv">
        <img className="aboutMeImage" src={require('./images/IMG_1272.jpg')}/>
      </div>
        <div className="aboutMeDescDiv">
            <p >Hi there, Welcome to my portfolio</p>
            <p>My name is Ryan Stupey, I am a full-stack developer. I specialize in making fullstack applications with the newest technologies including:  React.js, Node.js and I have skills in SQL and No-sql database management along with a passion in learning other aspects of technology. I look forward to working with you. . .</p>
        </div>
        </div>
    </div>
    <div className="view-slide" style={Object.assign({}, styles.slide)}>
    </div>
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide1"> <div className="h2ParentDivs"> <h2>Projects</h2></div>
        <div className="projNav" value={indexProj}>
          <div  onClick={(e) => this.handleChangeProjects(e, 0)} className="link ContactUs">MiddleWhere </div>
          <div  onClick={(e) => this.handleChangeProjects(e, 1)} className="link ContactUs">Under-Grace</div>
          <div  onClick={(e) => this.handleChangeProjects(e, 2)} className=" link ContactUs">WinterWear</div>
        </div>
    <SwipeableViews index={indexProj} resistance onChangeIndex={this.handleChangeIndexProjects}>
    {/* take out of app.js and make into Projects component, too large and messy for continued work */}
            <div style={Object.assign({}, styles.nestedSlide)}>
              <div className="projectImagesDiv">
                  <img className="projectImages" src={require('./images/middlewhere.PNG')}/>
                <h3 className="projDescription projTitle">MiddleWhere</h3>
                <p className="projDescription">this App is an ongoing collaborative project that uses GPS location in combination with the yelp api to give users approximately the closest destinations to meet up with friends, dates and collegues </p>
              </div>
           </div>
            <div style={Object.assign({}, styles.nestedSlide)}>
               <div className="projectImagesDiv">
                      <img className="projectImages" src={require('./images/GraceAfterFire.PNG')}/>
                      <h3 className="projDescription projTitle">Under Grace</h3>
                <p className="projDescription">This Website provides a personal platform for an author to publish content (i.e. blogs, news articles, social media).</p>
                 </div>
            </div>
           <div style={Object.assign({}, styles.nestedSlide)}>
           <div className="projectImagesDiv">
                      <img className="projectImages" src={require('./images/winter.PNG')}/>
                      <h3 className="projDescription projTitle">WinterWear</h3>
                <p className="projDescription">This fullstack ReactJS NodeJS Website provides a personal platform for an user to publish a winter clothing ecommerce business.</p>
                 </div>
            </div>
      </SwipeableViews>
    </div>
    {/* <div className="view-slide" style={Object.assign({}, styles.slide1)}>
    </div> */}
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide3"> <div className="h2ParentDivs"> <h2>Skills</h2> </div>
      <div className="skillsPodParent">
      <div className="nodeReactPostgres">
        <img className="skillsPod react" src={require('./images/react.png')}/>
        <img className="skillsPod node" src={require('./images/node.png')}/>
        {/* <img className="skillsPod express" src={require('./images/Express-JS.png')}/> */}
        <img className="skillsPod sql" src={require('./images/postgresql.png')}/>
      </div>
        <img className="skillsPod html" src={require('./images/htmlandcss.png')}/>
      </div>
    </div>
    <div className="view-slide" style={Object.assign({}, styles.slide, styles.slide3)}>
    </div>
  </div>
  <div className="slide-parent">
    <div className="non-opaque-content slide1"> <div className="h2ParentDivs"> <h2>Contact</h2> </div>
        <Contact/>
    </div>
    <div className="view-slide" style={Object.assign({}, styles.slide)}>
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