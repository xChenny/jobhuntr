import React, { Component } from "react";
import { Link } from "react-router-dom";

// custom components
import Card from "../../components/card";
import Timeline from "../../components/charts/timeline";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div className="links">
          <Link to="/opportunities">
            <Card>
              <h1>Opportunities</h1>
              <h2>0</h2>
            </Card>
          </Link>
          <Link to="/applied">
            <Card>
              <h1>Applications</h1>
              <h2>0</h2>
            </Card>
          </Link>
          <Link to="/interviews">
            <Card>
              <h1>Interviews</h1>
              <h2>0</h2>
            </Card>
          </Link>
          <Link to="/offers">
            <Card>
              <h1>Offers</h1>
              <h2>0</h2>
            </Card>
          </Link>
        </div>
        <Timeline />
      </div>
    );
  }
}
