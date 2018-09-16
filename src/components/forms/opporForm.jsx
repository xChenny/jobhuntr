import React, { Component } from "react";
import axios from "axios";
import { toastr } from "react-redux-toastr";

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

  async submitOpportunity(e) {
    e.preventDefault();
    const { company, position, applicant } = this.state;
    if (!company || !position || !applicant) {
      console.log("Missing field(s)");
      this.setState({ error: "Missing form field(s)" });
    } else {
      const res = await axios.post(
        "http://localhost:5000/jobhuntr/opportunities",
        {
          data: {
            company,
            position,
            applicant
          }
        }
      );
      if (res.status === 200) {
        toastr.success(
          "Success!",
          "You have successfully added an opportunity"
        );
        this.props.updateOpps("andrewchen");
        this.props.closeModal();
      }
    }
  }

  render() {
    return (
      <div className="oppor-form">
        <h1>Add new opportunity</h1>
	<hr />
        <form onSubmit={e => this.submitOpportunity.bind(this)(e)}>
          <label className="label">Company:</label>
	  <br />
          <input
	    className="input"
            type="text"
	    placeholder="Microsoft"
            onChange={e => this.setState({ company: e.target.value })}
          />
          <br />

          <label className="label">Position:</label>
	  <br />
          <input
	    className="input"
            type="text"
	    placeholder="Software Engineering Intern"
            onChange={e => this.setState({ position: e.target.value })}
          />
          <br />

          <button className='btn' type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default opporForm;
