import React, { Component } from "react";
import axios from "axios";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/jobhuntr/plot");
    if (res.status === 200) {
      console.log("Success!");
      console.log(res.data);
    }
  }

  render() {
    return (
      <div className="compare">
        <h1>Compare Jobs:</h1>
      </div>
    );
  }
}

export default Compare;
