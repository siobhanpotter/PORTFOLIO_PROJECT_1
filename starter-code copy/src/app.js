import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Link

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <section className="header">
          <div className="container title">
            <h4>SIOBHAN POTTER</h4>
            <h6>Web Developer | Creative | Music Lover</h6>
          </div>
          <div className="intro">
            <p><span>Hi, I'm Siobhan,</span><br/> I'm a web developer based in London.<br/> Check out my work, find out more about me & get in touch.</p>
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

            <div className="col-lg-6 col-sm-12 project4 project">
              <img className="project-image" src="../assets/music-box.png"></img>
            </div>
            <div className="col-lg-6 col-sm-12 project3 project">
              <img className="project-image" src="../assets/gigly.png"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 project2 project">
              <img className="project-image" src="../assets/viewr.png"></img>
            </div>
            <div className="col-lg-6 col-sm-12 project1 project">
              <img className="project-image" src="../assets/unjumble.png"></img>
            </div>
          </div>
        </section>




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
