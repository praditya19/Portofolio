import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

 class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
        <Cell col={12}>
        <img 
        src="https://pbs.twimg.com/profile_images/694191024416112642/VtJUhbKk_400x400.png"
        alt="avatar"
        className="avatar-img"
        /><br /><br /><br /> <br />  <br />
        
       
        <div className="banner-text">
        <h1>Full Stack Web Development</h1>

        <hr />
        
      <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Node JS | MonggoDB</p>
        </div>
        </Cell>
        </Grid>
      </div>
    )
  }
}
export default LandingPage