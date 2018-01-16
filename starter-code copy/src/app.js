import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Link

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div className="container">

        {/* <div className="box-container">
          <div className="box">
            <span className="box__blurb">I'm a Box</span>
            <span className="rect__blurb">I'm a Rectangle</span>
          </div>
        </div> */}

        <section className="header">
          <div className="row logo-section element">
            <div className="col-4"></div>
            <div className="col-4 element2">
              <img className="" id="logo" src="./assets/logo2.png"></img>
            </div>
            <div className="col-4"></div>
            <div className="col-12 container title">
              <h4 className="animated fadein">SIOBHAN POTTER</h4>
              <h6>Web Developer | Creative | Music Lover</h6>
            </div>
          </div>

          <div className="intro">
            <p className=""><span>Hi, I'm Siobhan,</span><br/> I'm a web developer based in London.<br/> Check out my work, find out more about me & get in touch.</p>
          </div>
        </section>

        {/* <section className="skills">
          <h1>Dev Skills</h1>
          <h1>Other Skills</h1>
        </section> */}


        <section className="container extra-height">
          <div className="row">
            <div className="col-lg-4 col-sm-12 ">
              <img className="portrait" src="../assets/me.jpg"></img>
            </div>
            <div className="col-lg-8 col-sm-12 other-skills">
              <h1>About Me</h1>
              <h6>Web Developer | Creative | Music Lover</h6>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>

          </div>
        </section>

        <section className="container skills">
          <div className="row">
            <div className="col-lg-12 col-sm-12  dev-skills">
              <h1>Dev Skills</h1>
              <div className="extra-height"></div>
            </div>
            {/* <div className="col-lg-6 col-sm-12 other-skills">
              <h1>Other Skills</h1>
              <div className="extra-height"></div>
            </div> */}
          </div>
        </section>




        <section className="container main">
          {/* <div>
            <h1>Projects</h1>
          </div> */}

          <div className="row">

            <div className="col-lg-6 col-sm-12 project4 project imgHolder item">
              <img className="project-image item-fade" src="../assets/music-box.png"></img>
            </div>
            <div className="col-lg-6 col-sm-12 project3 project item">
              <img className="project-image" src="../assets/gigly.png"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 project2 project item">
              <img className="project-image" src="../assets/viewr.png"></img>
            </div>
            <div className="col-lg-6 col-sm-12 project1 project item">
              <img className="project-image" src="../assets/unjumble.png"></img>
              {/* <div className="item-overlay top"></div> */}
            </div>
          </div>

          <a href="#" className="box">
            <h2><span>Breaking news -</span> hippos are sorta dangerous</h2>
            <h3>Tonight at nine</h3>
          </a>

        </section>
        {/* <div className="item">
          <img src="https://cl.ly/image/0v15321t3W1a/pepsi.jpg" alt="pepsi" width="540" height="548"></img>

          <div className="item-overlay top"></div>
        </div> */}




        <section className="contact">
          <h1>Contact Me</h1>
        </section>
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
