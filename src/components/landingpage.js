import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png"
              alt="avatar"
              className="avatar-img"
            />
            <br />
            <div className="banner-text">
              <h1>Full Stack Web Development</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | React Native | Node
                JS | MonggoDB
              </p>

              <div className="social-links">
                {/*Linkedlin*/}
                <a
                  href="https://www.linkedin.com/feed/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/*Github*/}
                <a
                  href="https://github.com/praditya19"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/*Youtube*/}
                <a
                  href="https://www.youtube.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default LandingPage;
