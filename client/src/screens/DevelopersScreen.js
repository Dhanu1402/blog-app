import React from 'react';
import { Link } from 'react-router-dom';

export default function DevelopersScreen() {
  let message = `lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
  return (
    <section className="section-white bg-white py-2 px-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="font-bold text-5xl">Team Behind BloggingAdda</h2>
            <p className="py-6 whitespace-pre-line">{message}</p>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                className="team-img"
                src={process.env.PUBLIC_URL + 'images/1641920591772.jpeg'}
                alt="pic"
              />
              <h3>DHANU KUMAR</h3>
              <div className="team-info">
                <p className="font-bold text-base">Full-Stack Developer</p>
                <p className="mt-2">
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
                    <Link
                      to={
                        'https://www.linkedin.com/in/dhanu-kr-kesharwani-dhanu/'
                      }
                      className="linkedin"
                    >
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'https://twitter.com/Dhanu0208'}
                      className="twitter"
                    >
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="team-item">
              <img
                className="team-img"
                src={process.env.PUBLIC_URL + 'images/1645196411201.jpeg'}
                alt="pic"
              />
              <h3>NAMRATA SHARMA</h3>
              <div className="team-info">
                <p className="font-bold text-base">DSA Enthusiast</p>
                <p className="mt-2">
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
                    <Link
                      to={
                        'https://www.linkedin.com/in/namrata-sharma-144176213/'
                      }
                      className="linkedin"
                    >
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
              <img
                className="team-img"
                src={process.env.PUBLIC_URL + 'images/xyz.png'}
                alt="pic"
              />
              <h3>HARSHIT JAISWAL</h3>
              <div className="team-info">
                <p className="font-bold text-base">Front-End Developer</p>
                <p className="mt-2">
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
                    <Link
                      to={'https://www.linkedin.com/in/harshit-jaiswal-2910-/'}
                      className="linkedin"
                    >
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
