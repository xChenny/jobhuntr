import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";

class intervForm extends Component {
  state = {
    company: "",
    date: "",
    position: ""
  };

  submitApplication() {
    console.log("submitting opportunity");
  }

  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];

    return (
      <div className="interv-form">
        <h1>Add New Interview</h1>
        <label>Select Opportunity</label>
        <Select options={options} />
        <br />

        <label>Date:</label>
        <input
          type="text"
          placeholder="MM/DD/YYYY"
          onChange={e => this.setState({ date: e.value })}
        />
        <br />

        <button onClick={this.submitApplication}>Submit</button>
      </div>
    );
  }
}

export default intervForm;
