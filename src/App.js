import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import CelebrityDetail from "./CelebrityDetail";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celebrities: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/person/popular?page=1&api_key=5c31f0e8bd06141c7543213b78f1c313"
      )
      .then(result => {
        console.log("result.data", result.data.results);
        const celebrities = result.data.results;
        this.setState({ celebrities });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Celebrities</h1>
        {this.state.celebrities.map(celebrity => (
          <Link to={`/celebrity-detail/${celebrity._id}`}>
            <img src={celebrity.profile_path} alt="" />
            <li key={celebrity._id}>{celebrity.name}</li>
          </Link>
        ))}
        <Route
          path="/celebrity-detail/:celebrityId"
          component={CelebrityDetail}
        />
      </div>
    );
  }
}
