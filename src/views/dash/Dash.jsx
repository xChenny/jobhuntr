import React, { Component } from "react";
import { Link } from "react-router-dom";

// custom components
import Card from "../../components/card";
import Timeline from "../../components/charts/timeline";

export default class Dashboard extends Component {
  componentDidMount() {
    this.props.getOpps("andrewchen");
  }

  // get the # of applications at a certain stage
  // stage is either application|interview|offer|rejection
  getStageLen(status) {
    let counter = 0;
    this.props.opps.forEach(opp => {
      for (let p of opp.processes) {
        if (p.type === status) counter++;
      }
    });
    return counter;
  }

  render() {
    return (
      <div className="dashboard">
        <div className="job-links">
          <Link to="/opportunities">
            <Card>
              <h2 className="subheading">Opportunities</h2>
              <h2 className="subheading number">{this.props.opps.length}</h2>
            </Card>
          </Link>

          <Link to="/applied">
            <Card>
              <h2 className="subheading">Applications</h2>
              <h2 className="subheading number">
                {this.getStageLen("application")}
              </h2>
            </Card>
          </Link>

          <Link to="/interviews">
            <Card>
              <h2 className="subheading">Interviews</h2>
              <h2 className="subheading number">
                {this.getStageLen("interview")}
              </h2>
            </Card>
          </Link>

          <Link to="/offers">
            <Card>
              <h2 className="subheading">Offers</h2>
              <h2 className="subheading number">{this.getStageLen("offer")}</h2>
            </Card>
          </Link>
        </div>
        {this.props.opps && <Timeline opps={this.props.opps} />}
      </div>
    );
  }
}
