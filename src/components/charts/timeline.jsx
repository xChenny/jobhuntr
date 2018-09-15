import React, { Component } from "react";
import "react-vis/dist/style.css";
import {
  XYPlot,
  LineMarkSeries,
  XAxis,
  YAxis,
  HorizontalGridLines
} from "react-vis";

class AppTimeline extends Component {
  render() {
    const data1 = [{ x: 3, y: 3 }, { x: 1, y: 3 }, { x: 8, y: 3 }];
    const data2 = [{ x: 1, y: 5 }, { x: 4, y: 5 }];
    const data3 = [{ x: 1, y: 1 }, { x: 4, y: 1 }];
    return (
      <div className="timeline">
        <XYPlot height={300} width={window.innerWidth}>
          <XAxis />
          <LineMarkSeries data={data1} />
          <LineMarkSeries data={data2} />
          <LineMarkSeries data={data3} />
          <HorizontalGridLines />
        </XYPlot>
      </div>
    );
  }
}

export default AppTimeline;
