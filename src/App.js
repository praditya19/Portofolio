import React, { Component } from "react";
import { Layout, Navigation, Header, Content, Drawer } from "react-mdl";
import "./App.css";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" title="Portofolio" scroll>
            <Navigation>
              <Link to="resume">Resume</Link>
              <Link to="aboutme">AboutME</Link>
              <Link to="project">Project</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="resume">Resume</Link>
              <Link to="aboutme">AboutME</Link>
              <Link to="project">Project</Link>
              <Link to="contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
