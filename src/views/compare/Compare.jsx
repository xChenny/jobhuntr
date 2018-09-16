import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";

import Select from 'react-select';

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption1: "http://localhost:5000/jobhuntr/plot?location=New York",
      selectedOption2: "http://localhost:5000/jobhuntr/plot?location=Seattle",
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

  render() {
    const options = [
	    { value: 'http://localhost:5000/jobhuntr/plot?location=New York', label: 'Position vs. Salary (New York)' },
	    { value: 'http://localhost:5000/jobhuntr/plot?location=Seattle', label: 'Position vs. Salary (Seattle)' },
	    { value: 'http://localhost:5000/jobhuntr/plot?location=San Francisco', label: 'Position vs. Salary (San Francisco)' },
	    { value: 'http://localhost:5000/jobhuntr/plot?location=Houston', label: 'Position vs. Salary (Houston)' },
	    { value: 'http://localhost:5000/jobhuntr/plot?location=Washington', label: 'Position vs. Salary (Washington, D.C.)' }
    ];

    let element1 = (!_.isUndefined(this.state.image1)) ? <img src={'data:image/png;base64,' + this.state.image1} style={{'width': '600px', 'height': '300px'}} /> : '';
    let element2 = (!_.isUndefined(this.state.image2)) ? <img src={'data:image/png;base64,' + this.state.image2} style={{'width': '600px', 'height': '300px'}} /> : '';

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
      </div>
    );
  }
}

export default Compare;
