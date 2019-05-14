import React, { Component } from "react";
import axios from "axios";
import "./App.css";

export default class CelebrityDetail extends Component {
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
        const celebrities = result.data.results;
        this.setState({ celebrities });
      });
  }

  render() {
    return (
      <div className="CelebrityDetail">
        <img src={this.state.celebrities} alt="" />
      </div>
    );
  }
}
