import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";

class appForm extends Component {
  state = {
    company: "",
    date: "",
    position: ""
  };

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

  async render() {
    const options = await axios
      .get(
        `http://localhost:5000/jobhuntr/opportunities?username=${"andrewchen"}`
      )
      .data.map(opp => `${opp.company}, ${opp.position}`);
    return (
      <div className="app-form">
        <h1>Add Application to an Opportunity:</h1>
        <label>Select Opportunity</label>
        <Select options={options} />
        <br />

        <label htmlFor="date">Date:</label>
        <input
          type="text"
          name="date"
          id="date"
          placeholder="MM/DD/YYYY"
          onChange={e => this.setState({ date: e.value })}
        />
        <br />

        <button onClick={this.submitApplication}>Submit</button>
      </div>
    );
  }
}

export default appForm;
