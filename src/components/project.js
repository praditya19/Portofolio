import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activiTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          <a
            href="https://github.com/praditya19/perpustakaan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWc04N8SI50V0lliGVHzQcm3uW4ancKflOubh_X3cCW7AAUCYng) center/cover"
                }}
              />
              <CardText>
                Ini adalah Perpustakaan yang di buat dari React js dan get
                Axios. project ini juga untuk memahami fungsi CRUD
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </a>

          <a
            href="https://github.com/praditya19/Bioskop"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWc04N8SI50V0lliGVHzQcm3uW4ancKflOubh_X3cCW7AAUCYng) center/cover"
                }}
              />
              <CardText>
                Ini adalah Movie yang di buat dari React js dan get Axios.
                project ini juga untuk memahami fungsi CRUD
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </a>

          <a
            href="https://github.com/praditya19/Membuat-Portal"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWc04N8SI50V0lliGVHzQcm3uW4ancKflOubh_X3cCW7AAUCYng) center/cover"
                }}
              />
              <CardText>
                Ini adalah portal yang di buat dari React js dan get Axios.
                project ini juga untuk memahami fungsi CRUD
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </a>

          <a
            href="https://github.com/praditya19/Membuat-Kalkulator-dengan-javascript"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxWc04N8SI50V0lliGVHzQcm3uW4ancKflOubh_X3cCW7AAUCYng) center/cover"
                }}
              />
              <CardText>
                Ini adalah cara Membuat Kalkulator dengan javascript yang mudah
                di pahami dan mudah di praktekan semoga bermanfaat
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </a>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>ReactJS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Project;
