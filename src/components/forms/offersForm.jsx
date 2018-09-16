import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import { toastr } from "react-redux-toastr";

const cities = [
  "NEW YORK",
  "SAN FRANCISCO",
  "SEATTLE",
  "HOUSTON",
  "WASHINGTON DC"
];

class offersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      compensation: ""
    };
  }

  async submitOffer() {
    console.log(this.state);
    const { location, compensation } = this.state;
    if (!location || !compensation) {
      toastr.error("Error!", "Missing form field(s)");
    } else if (Number(this.state.compensation) == NaN) {
      toastr.error("Error!", "The Compensation is not a number!");
    } else {
      const res = await axios.post("http://localhost:5000/jobhuntr/offers", {
        data: {
          location,
          compensation
        }
      });
      if (res.status === 200) {
        toastr.success("Success!", "Congratulations, you've created an offer.");
        this.props.closeModal();
        this.props.updateOpps("andrewchen");
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

  render() {
    const { error } = this.state;
    return (
      <div className="offers-form">
        {error}
        <h1>Add New Offer</h1>
        <form onSubmit={this.submitOffer.bind(this)}>
          <label>Select Opportunity:</label>
          <Select
            options={this.state.opps}
            onChange={ele => this.setState({ opportunity_id: ele.value })}
          />
          <br />
          <label>Location:</label>
          <Select
            options={cities}
            onChange={ele => this.setState({ location: ele.value })}
          />
          <br />

          <label>Compensation:</label>
          <br />
          <input
            type="number"
            name="compensation"
            onChange={e => this.setState({ compensation: e.target.value })}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default offersForm;
