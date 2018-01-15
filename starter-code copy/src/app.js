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
            <p>Hi! I'm Siobhan,<br/> I'm a web developer based in London. Check out my work, find out more about me & get in touch.</p>
          </div>
        </section>

        <section className="technologies">
          <h1>Technologies</h1>
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


        <section className="about-me">
          <h1>About Me</h1>
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
