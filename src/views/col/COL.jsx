import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import { toastr } from "react-redux-toastr";
import Select from 'react-select';

class COL extends Component {
  constructor(props) {
    super(props);
    let offers = _.map(this.props.opps, (opportunity) => {
	let company = opportunity.company;
	let position = opportunity.position;
	return _.map(opportunity.processes, (process) => {
	    if (process.type === 'offer') {
		process = process['document'];
		process['company'] = company;
		process['position'] = position;
		return process
	    }
	});
    });

    offers = offers.flat()
    offers = offers.filter((obj) => obj);
    this.state = {
        opps: _.map(offers, (offer) => {
            let location = ''
            if (offer.location.toLowerCase() === 'san francisco') {
                location = "San Francisco, CA" 
            }
            else if (offer.location.toLowerCase() === 'seattle') {
                location = "Seattle, WA"
            }
            else if (offer.location.toLowerCase() === 'houston'){
                location = "Houston, TX"
            }
            else if (offer.location.toLowerCase() === 'washington'){
                location = "Washington, D.C."
            }
            else if (offer.location.toLowerCase() === 'new york'){
                location = "New York, NY"
            }
            return {
                label: `${offer.company}, ${offer.position}`,
                value: {
                    location: location,
                    compensation: offer.compensation
                }
            }
        })
    };
  }

  async submitForm() {
    console.log(JSON.stringify(this.state.opps));
    console.log(JSON.stringify(this.state.offer1));
    console.log(JSON.stringify(this.state.offer2));
    let { offer1, offer2 } = this.state;
    if (!offer1 || !offer2) {
        toastr.error("Error!", "Missing form field(s)");
    } else {
        const res = await axios.post('http://localhost:5000/jobhuntr/generate_col_report',
        {
            offer1: offer1,
            offer2: offer2
        }
        );
        if (res.status === 200) {
            toastr.success(
                "Success!",
                "You have successfully received a cost of living report."
            );
            this.setState({'data': res.data})
        }
    }
  }

  render() {
    const { opps, data } = this.state;
    return (
      <div style={{"padding": '128px'}}>
        <h2> Offer COL asssessment </h2>
        <div style={{"display": 'grid', "gridTemplateColumns": "1fr 1fr", "margin": "64px"}}>
            <Select 
                options={opps}
                onChange={val => this.setState({offer1: val.value})}
            />
            <Select
                options={opps}
                onChange={val => this.setState({offer2: val.value})}
            />
        </div>
        <button style={{"padding": "15px", "margin": "15px"}} onClick={() => this.submitForm()}>
            Get your results
        </button>
        <div>
            { data }
        </div>
      </div>
    );
  }
}

export default COL;
