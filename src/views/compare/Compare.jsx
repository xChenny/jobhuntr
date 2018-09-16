import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  async componentDidMount() {
    const res = await axios.get("http://localhost:5000/jobhuntr/plot?location=New York");
    if (res.status === 200) {
      console.log("Success!");
      console.log(res.data);
      this.setState({"data": res.data});
    }
  }

  componentDidUpdate() {
  }

  render() {
    const element = <div id="element" style={{"width": '360px'}} dangerouslySetInnerHTML={{'__html': this.state.data}} />;
    return (
      <div className="compare">
        <h1>Compare Jobs:</h1>
	<div style={{ 'display': 'grid', 'gridTemplateColumns': '1fr 1fr' }}>
	    {element}
	</div>
      </div>
    );
  }
}

export default Compare;
