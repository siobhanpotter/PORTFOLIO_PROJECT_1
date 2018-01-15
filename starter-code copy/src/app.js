import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Link

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div className="container">



        <div className="header">
          <h1>Siobhan Potter</h1>
          <h2>Web Developer</h2>
          <p>Hi! I'm Siobhan, I'm a web developer based in London. Check out my work, find out more about me or get in touch. I'd love to hear from you.</p>
        </div>
        <div className="container main">
          <div>
            <h1>Projects</h1>
          </div>
          <div className="row">
            <div className="col project1">
              1 of 2
            </div>
            <div className="col project2">
              2 of 2
            </div>
          </div>
          <div className="row">
            <div className="col project3">
              1 of 2
            </div>
            <div className="col project4">
              2 of 2
            </div>
          </div>
        </div>


        <div className="about-me">
          <h1>About Me</h1>
        </div>

        <div className="contact">
          <h1>Contact Me</h1>
        </div>
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
