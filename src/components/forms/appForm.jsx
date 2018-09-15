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
    const submission = await axios;
  }

  render() {
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ];

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

        <button onClick={() => this.submitApplication()}>Submit</button>
      </div>
    );
  }
}

export default appForm;
