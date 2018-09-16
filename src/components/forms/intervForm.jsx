import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { toastr } from "react-redux-toastr";

import "react-datepicker/dist/react-datepicker.css";

class intervForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunity_id: "",
      status: "interviews",
      opps: this.props.opps.map(opp => ({
        label: `${opp.company}, ${opp.position}`,
        value: opp.id
      }))
    };
  }

  async submitInterview(e) {
    e.preventDefault();
    const { opportunity_id, date, status } = this.state;
    if (!opportunity_id || !date || !status) {
      toastr.error("Error!", "Missing form field(s)");
    } else {
      const res = await axios.post(
        "http://localhost:5000/jobhuntr/interviews",
        {
          data: {
            opportunity_id,
            date,
            status
          }
        }
      );
      if (res.status === 200) {
        toastr.success("Success!", "You've made an interview");
        this.props.closeModal();
        this.props.updateOpps("andrewchen");
      } else {
        toastr.error("Error!", res.statusText);
      }
    }
  }

  handleDateChange(date) {
    this.setState({
      date
    });
  }

  render() {
    const { date } = this.state;
    return (
      <div className="interv-form">
        <h1>Add New Interview</h1>
        <form onSubmit={this.submitInterview.bind(this)}>
          <label>Select Opportunity:</label>
          <Select
            options={this.state.opps}
            onChange={ele => this.setState({ opportunity_id: ele.value })}
          />
          <br />

          <label>Date:</label>
          <DatePicker
            selected={date}
            onChange={this.handleDateChange.bind(this)}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default intervForm;
