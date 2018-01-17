import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Link

import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="">
          {/* <div className="box-container">
          <div className="box">
            <span className="box__blurb">I'm a Box</span>
            <span className="rect__blurb">I'm a Rectangle</span>
          </div>
        </div> */}

          <section className="header">
            {/* <div className="row logo-section element">
            <div className="col-4"></div>
            <div className="col-4 element2">
              <img className="" id="logo" src="./assets/logo2.png"></img>
            </div>
            <div className="col-4"></div>

            </div> */}
            <div className="col-12  title">
              <h4 className="animated fadein">SIOBHAN POTTER</h4>
              <h6>Web Developer | Creative | Music Lover</h6>
            </div>

            <div className="intro">
              <p className="element"><span>Hi, I'm Siobhan,</span><br/> I'm a web developer   based in London.<br/> Check out my work, find out more about me & get in   touch.</p>
            </div>
          </section>

          {/* <section className="skills">
            <h1>Dev Skills</h1>
            <h1>Other Skills</h1>
          </section> */}


          <section className="about">
            <div className="container">
              <h1 className="center container-padding margin">About Me</h1>
              <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-12 other-skills">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,   when an unknown printer took a galley of type and scrambled it to make a type   specimen book. It has survived not only five centuries, but also the leap   into electronic typesetting, remaining essentially unchanged. It was   popularised in the 1960s with the release of Letraset sheets containing Lorem   Ipsum passages, and more recently with desktop publishing software like Aldus   PageMaker including versions of Lorem Ipsum.</p>
                  <p>It is a long established fact that a reader will be distracted by the   readable content of a page when looking at its layout. The point of using   Lorem Ipsum is that it has a more-or-less normal distribution of letters, as   opposed to using 'Content here, content here', making it look like readable   English. Many desktop publishing packages and web page editors now use Lorem   Ipsum as their default model text, and a search for 'lorem ipsum' will   uncover many web sites still in their infancy. Various versions have evolved   over the years, sometimes by accident, sometimes on purpose (injected humour   and the like).</p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12 ">
                  <img className="img-responsive portrait" src="../assets/me.jpg"></img>
                </div>
              </div>
            </div>
          </section>

          <section className="skills">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-sm-12  dev-skills">
                  <h1>Dev Skills / Technologies</h1>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-javascript-plain"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-react-original-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-jquery-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-html5-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i className="devicon-css3-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i className="devicon-bootstrap-plain-wordmark"></i></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-angularjs-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-nodejs-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-sass-original"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-mongodb-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-express-original-wordmark col-lg-2 col-md-3     col-sm-4ored"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-mocha-plain"></i></div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i   className="devicon-github-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i className="devicon-webpack-plain-wordmark col-lg-2 col-md-3 col-sm-4ored"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-ruby-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-rails-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-bower-plain-wordmark"></i></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 icon"><i     className="devicon-babel-plain"></i></div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-sm-12 other-skills">
                <h1>Other Skills</h1>
                <div className="extra-height"></div>
              </div> */}
              </div>
            </div>
          </section>




          <section className="work">
            <div className="container">
              <div className="container-padding center margin">
                <h1>Work</h1>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12 project4 project imgHolder item">
                  <a href="https://github.com/siobhanpotter/WDI_PROJECT_4"><img className="project-image item-fade" src="../assets/music-box.png"></img></a>
                </div>
                <div className="col-lg-6 col-sm-12 project3 project item">
                  <a href=""><img className="project-image" src="../assets/gigly.png"></img></a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12 project2 project item">
                  <a href="https://github.com/siobhanpotter/WDI_PROJECT_2"><img className="project-image" src="../assets/viewr.png"></img></a>
                </div>
                <div className="col-lg-6 col-sm-12 project1 project item">
                  <a href="https://github.com/siobhanpotter/WDI_PROJECT_1"><img className="project-image" src="../assets/unjumble.png"></img></a>
                  {/* <div className="item-overlay top"></div> */}
                </div>
              </div>

              {/* <a href="#" className="box">
              <h2><span>Breaking news -</span> hippos are sorta dangerous</h2>
              <h3>Tonight at nine</h3>
            </a> */}
            </div>
          </section>
          {/* <div className="item">
          <img src="https://cl.ly/image/0v15321t3W1a/pepsi.jpg" alt="pepsi" width="540" height="548"></img>

          <div className="item-overlay top"></div>
        </div> */}




          <section className="contact">
            <h1>Contact Me</h1>
            <div className="container">
              <div className="col-4"></div>
              <div className="row">
                <div className="col"><a href="mailto:siobhanpotter.a@gmail.com"><h6>Email</h6></a></div>
                <div className="col"><a href="https://www.linkedin.com/in/siobhan-potter-a75b2659/"><h6>LinkedIn</h6></a></div>
                <div className="col"><a href="https://github.com/siobhanpotter"><h6>Github</h6></a></div>
              </div>
            </div>
            <div className="col-4"></div>
          </section>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
