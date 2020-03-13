import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import NextPageButton from "./components/NextPageButton";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import PageFour from "./components/PageFour";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [],
      showItems: 25
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => this.setState({ player: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="container">
        <h1>Most searched Women's World Cup Players</h1>
        {/* {this.state.player.slice(0, this.state.showItems).map(a => (
          <Players
            name={a.name}
            country={a.country}
            searches={a.searches}
            id={a.id}
          />
        ))} */}
        <Route exact path="/">
          <PageOne
            data-testid="test-fetch"
            player={this.state.player}
            showItems={this.state.showItems}
          />
        </Route>
        <Route exact path="/page2">
          <PageTwo
            player={this.state.player}
            showItems={this.state.showItems + 25}
          />
        </Route>
        <Route exact path="/page3">
          <PageThree
            player={this.state.player}
            showItems={this.state.showItems + 50}
          />
        </Route>
        <Route exact path="/page4">
          <PageFour
            player={this.state.player}
            showItems={this.state.showItems + 75}
          />
        </Route>

        <NextPageButton />
      </div>
    );
  }
}
export default App;
