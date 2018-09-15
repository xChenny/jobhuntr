import React, { Component } from "react";
import axios from "axios";

class opporForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="oppor-form">
        <h1>Add new Opportunity</h1>
        <form
          action="http://localhost:5000/jobhunter/opportunities"
          method="POST"
        >
          <label>Company:</label>
          <input
            type="text"
            onChange={e => this.setState({ company: e.value })}
          />
          <br />

          <label>Position:</label>
          <input
            type="text"
            onChange={e => this.setState({ position: e.value })}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default opporForm;
