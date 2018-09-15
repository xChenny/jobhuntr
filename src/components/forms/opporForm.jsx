import React, { Component } from "react";
import axios from "axios";

class opporForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      applicant: "andrewchen",
      error: ""
    };
  }

  async submitApplication() {
    console.log(this.state);
    const { company, position, applicant } = this.state;
    if (!company || !position) {
      console.log("Missing field(s)");
      this.setState({ error: "Missing form field(s)" });
    } else {
      const res = await axios.post(
        "http://localhost:5000/jobhuntr/opportunities",
        { company, position, applicant }
      );
      if (res.status === 200) {
        this.props.closeModal();
      }
    }
  }

  render() {
    return (
      <div className="oppor-form">
        <h1>Add new Opportunity</h1>
        <label>Company:</label>
        <input
          type="text"
          onChange={e => this.setState({ company: e.target.value })}
        />
        <br />

        <label>Position:</label>
        <input
          type="text"
          onChange={e => this.setState({ position: e.target.value })}
        />
        <br />

        <button onClick={this.submitApplication.bind(this)}>Submit</button>
      </div>
    );
  }
}

export default opporForm;
