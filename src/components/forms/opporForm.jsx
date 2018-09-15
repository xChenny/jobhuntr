import React, { Component } from "react";
import axios from "axios";

class opporForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      applicant: "andrewchen"
    };
  }

  async submitApplication() {
    const res = await axios.post(
      "http://e5eff8f8.ngrok.io/jobhuntr/opportunities",
      this.state
    );
    console.log(res.status);
  }

  render() {
    return (
      <div className="oppor-form">
        <h1>Add new Opportunity</h1>
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

        <button onClick={this.submitApplication.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default opporForm;
