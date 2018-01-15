import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Link



class App extends React.Component {

  render() {
    return (
      <div>
        <h1>still working</h1>
        <div className="container">
          <h1>working</h1>
          <h1>Siobhan Potter1</h1>
          <h2>Web Developer</h2>
          <p>Hi! I'm Siobhan, I'm a web developer based in London. Check out my work, find out more about me or get in touch. I'd love to hear from you.</p>
        </div>

        <div>
          <h1>Projects</h1>
        </div>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
          <li>Project 4</li>
        </ul>

        <div>
          <h1>About Me</h1>
        </div>
      </div>

    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
