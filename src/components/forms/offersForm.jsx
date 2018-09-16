import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-datepicker";
import { toastr } from "react-redux-toastr";

const cities = [
  { label: "NEW YORK", value: "NEW YORK" },
  { label: "SAN FRANCISCO", value: "SAN FRANCISCO" },
  { label: "SEATTLE", value: "SEATTLE" },
  { label: "HOUSTON", value: "HOUSTON" },
  { label: "WASHINGTON DC", value: "WASHINGTON DC" }
];

class offersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      compensation: ""
    };
  }

  async submitOffer(e) {
    e.preventDefault();
    let { date, opportunity_id, location, compensation } = this.state;
    if (!location || !compensation) {
      toastr.error("Error!", "Missing form field(s)");
    } else if (Number(this.state.compensation) == NaN) {
      toastr.error("Error!", "The Compensation is not a number!");
    } else {
      compensation = parseInt(compensation);
      const res = await axios.post("http://localhost:5000/jobhuntr/offers", {
        data: {
          location,
          compensation,
          date,
          opportunity_id
        }
      });
      if (res.status === 200) {
        toastr.success("Success!", "Congratulations, you've created an offer.");
        this.props.closeModal();
        this.props.updateOpps("andrewchen");
      } else {
        toastr.error("Error!", res.statusText);
        console.log(res.status);
      }
    }
  }

  // Get array of opportunities from DB
  async componentDidMount() {
    const res = await axios.get(
      `http://localhost:5000/jobhuntr/opportunities?username=${"andrewchen"}`
    );
    if (res.status === 200) {
      const opps = res.data.map(opp => ({
        label: `${opp.company}, ${opp.position}`,
        value: opp.id
      }));
      this.setState({ opps });
    } else {
      toastr.error(
        "Error!",
        "We couldn't get your opportunities. Please check your network settings."
      );
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
      <div className="offers-form">
        <h1>Add New Offer</h1>
        <form onSubmit={this.submitOffer.bind(this)}>
          <label className="label">Select Opportunity:</label>
          <Select
            options={this.state.opps}
            onChange={ele => this.setState({ opportunity_id: ele.value })}
          />
          <br />
          <label className="label">Location:</label>
          <Select
            options={cities}
            onChange={ele => this.setState({ location: ele.value })}
          />
          <br />

          <label className="label">Date:</label>
          <DatePicker
            className="input"
            selected={date}
            onChange={this.handleDateChange.bind(this)}
          />
          <br />

          <label className="label">Compensation:</label>
          <br />
          <input
            type="number"
            name="compensation"
            onChange={e => this.setState({ compensation: e.target.value })}
          />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default offersForm;
