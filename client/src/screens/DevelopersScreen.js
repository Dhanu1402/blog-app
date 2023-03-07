import React from 'react';
import { Link } from 'react-router-dom';

export default function DevelopersScreen() {
  let message = `lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  return (
    <section className="section-white bg-white py-16 px-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="section-title">Team Behind BloggingAdda</h2>
            <p className="section-subtitle">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img className="team-img" src="" alt="" />
              <h3>DHANU KUMAR</h3>
              <div className="team-info">
                <p>Description</p>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <ul className="team-icon">
                  <li>
                    <Link
                      to={'https://github.com/Dhanu1402/'}
                      className="github"
                    >
                      <i className="fa fa-github" />
                    </Link>
                  </li>
                  <li>
                    <Link to={''} className="linkedin">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to={''} className="twitter">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img className="team-img" src="" alt="" />
              <h3>NAMRATA SHARMA</h3>
              <div className="team-info">
                <p>Description</p>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <ul className="team-icon">
                  <li>
                    <Link
                      to={'https://github.com/namratas31/'}
                      className="github"
                    >
                      <i className="fa fa-github" />
                    </Link>
                  </li>
                  <li>
                    <Link to={''} className="linkedin">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to={''} className="twitter">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img className="team-img" src="" alt="" />
              <h3>HARSHIT JAISWAL</h3>
              <div className="team-info">
                <p>Description</p>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <ul className="team-icon">
                  <li>
                    <Link
                      to={'https://github.com/iharshitjaiswal/'}
                      className="github"
                    >
                      <i className="fa fa-github" />
                    </Link>
                  </li>
                  <li>
                    <Link to={''} className="linkedin">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to={''} className="twitter">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
