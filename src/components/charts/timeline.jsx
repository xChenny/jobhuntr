import React, { Component } from "react";
import { XYPlot, LineMarkSeries, XAxis, Crosshair } from "react-vis";
import "react-vis/dist/style.css";

class AppTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crossHairVals: "",
      lines: this.props.opps.filter(opp => {
        const docStatuses = opp.processes.map(p => p.document.status);
        return docStatuses.includes("interview");
      })
    };
    this.onSeriesMouseOut = this.onSeriesMouseOut.bind(this);
    this.onSeriesMouseOver = this.onSeriesMouseOver.bind(this);
  }

  componentDidMount() {
    console.log(this.state.lines);
  }

  /**
   * Event trigger for hovering new a crosshair
   */
  onSeriesMouseOver(event) {
    console.log(event);
    this.setState({ crosshairValues: [...event] });
  }

  /**
   * Event trigger for leaving cross hairs
   */
  onSeriesMouseOut() {
    this.setState({ crosshairValues: [] });
  }

  render() {
    return (
      <div className="timeline">
        <XYPlot height={300} width={window.innerWidth - 50}>
          <XAxis />
          <Crosshair
            values={this.state.crosshairValues}
            className={"test-class-name"}
          />
        </XYPlot>
      </div>
    );
  }
}

export default AppTimeline;
