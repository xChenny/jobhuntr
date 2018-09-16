import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";

import Select from 'react-select';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption1: "http://localhost:5000/jobhuntr/generate_city_average_salaries?location=New York",
      selectedOption2: "http://localhost:5000/jobhuntr/generate_city_average_salaries?location=Seattle",
      image1: null,
      image2: null
    };
  }

  async componentWillMount() {
    const res = await axios.get(this.state.selectedOption1);
    const res1 = await axios.get(this.state.selectedOption2);

    if (res.status === 200) {
      this.setState({"image1": res.data});
    }

    if (res1.status === 200) {
      this.setState({"image2": res1.data});
    }
  }

  componentDidUpdate(prevProps) {
  }

  async updatePicture1() {
    const res = await axios.get(this.state.selectedOption1.value);
    if (res.status === 200) {
      this.setState({"image1": res.data});
    }
  }

  async updatePicture2() {
    const res = await axios.get(this.state.selectedOption2.value);
    if (res.status === 200) {
      this.setState({"image2": res.data});
    }
  }

  handleChange = async (val, isLeft) => {
    const res = await axios.get(val.value)
    if (res.status === 200) {
      if (isLeft) this.setState({ image1: res.data })
      else this.setState({ image2: res.data })
    }
  }

  renderOffers(offers) {
    return _.map(offers, (offer) => {
	//console.log(JSON.stringify(offer));
	return (
	    <div style={{ 'display': 'grid', 'gridTemplateColumns': '1fr 1fr 1fr', 'alignItems': 'center', 'border': '1px solid black', 'margin': '5px', 'paddingTop': '10px' }}>
		<input type="checkbox" />
		<div style={{ 'display': 'grid', 'gridTemplateColumns': '1fr', 'alignItems': 'center'}}>
			<label style={{ 'justify-self': 'center', 'align-self': 'center' }}>{ offer.company }</label>
			<p style={{ 'justify-self': 'center', 'align-self': 'center' }}>{ offer.position }</p>
		</div>
		<input style={{ 'justify-self': 'end' }} type="checkbox" />
	    </div>
	);
    });
  }

  render() {
    const options = [
	    { value: 'http://localhost:5000/jobhuntr/generate_city_average_salaries?location=New York', label: 'Position vs. Salary (New York)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_average_salaries?location=Seattle', label: 'Position vs. Salary (Seattle)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_average_salaries?location=San Francisco', label: 'Position vs. Salary (San Francisco)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_average_salaries?location=Houston', label: 'Position vs. Salary (Houston)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_average_salaries?location=Washington', label: 'Position vs. Salary (Washington, D.C.)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_with_most_listings?location=New York', label: 'Compensation vs. Company for Top Hiring Companies (New York)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_with_most_listings?location=Seattle', label: 'Compensation vs. Company for Top Hiring Companies (Seattle)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_with_most_listings?location=San Francisco', label: 'Compensation vs. Company for Top Hiring Companies (San Francisco)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_with_most_listings?location=Houston', label: 'Compensation vs. Company for Top Hiring Companies (Houston)' },
	    { value: 'http://localhost:5000/jobhuntr/generate_city_with_most_listings?location=Washington', label: 'Compensation vs. Company for Top Hiring Companies (Washington D.C)' },
    ];

    let element1 = (!_.isUndefined(this.state.image1)) ? <img style={{ 'justify-self': 'center' }} src={'data:image/png;base64,' + this.state.image1} style={{'width': '600px', 'height': '300px'}} /> : '';
    let element2 = (!_.isUndefined(this.state.image2)) ? <img style={{ 'justify-self': 'center' }} src={'data:image/png;base64,' + this.state.image2} style={{'width': '600px', 'height': '300px'}} /> : '';

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
    offers = offers.filter((obj) => obj );
    console.log(JSON.stringify(offers));

    return (
      <div className="compare">
        <h1 style={{'text-align': 'left', margin: '10px'}}>Compare Jobs</h1>
	<div style={{ 'display': 'grid', 'gridTemplateColumns': '1fr 1fr' }}>
	    <Select
	      onChange={val => this.handleChange(val, true)}
	      options={options}
	    />
	    <Select
	      onChange={val => this.handleChange(val, false)}
	      options={options}
	    />
	    {element1}
	    {element2}
	</div>
	<div style={{'display': 'grid', 'gridTemplateColumns': '1fr' }}>
	    {this.renderOffers(offers)}
	</div>
      </div>
    );
  }
}

export default Compare;
