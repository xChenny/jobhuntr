import React, { Component } from "react";
import axios from "axios";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { toastr } from "react-redux-toastr";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class appForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunity_id: "",
      date: moment(),
      status: "applications",
      opps: this.props.opps.map(opp => ({
        label: `${opp.company}, ${opp.position}`,
        value: opp.id
      }))
    };
  }

  async submitApplication() {
    let { opportunity_id, date, status } = this.state;
    if (!opportunity_id || !date || !status) {
      toastr.error("Error!", "Missing form field(s)");
    } else {
      date = date.format();
      console.log(moment(date));
      const res = await axios.post(
        "http://localhost:5000/jobhuntr/applications",
        {
          data: {
            opportunity_id,
            date,
            status
          }
        }
      );
      if (res.status === 200) {
        toastr.success(
          "Success!",
          "You have successfully added an opportunity"
        );
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
    const { opps, error, date } = this.state;
    return (
      <div className="app-form">
        {error}
        <h1>Add Application to an Opportunity:</h1>
        <label className="label">Select Opportunity</label>
        <Select
          options={opps}
          onChange={val => this.setState({ opportunity_id: val.value })}
        />
        <br />
        <label className="label" htmlFor="date">
          Date:
        </label>
        <DatePicker
          selected={date}
          onChange={this.handleDateChange.bind(this)}
        />
        <br />
        <button className="btn" onClick={this.submitApplication.bind(this)}>
          Submit
        </button>
      </div>
    );
  }
}

export default appForm;
