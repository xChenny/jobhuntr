import React, { Component } from "react";
import ReactTable from "react-table";
import axios from "axios";
import "react-table/react-table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      columns: this.getColumns(this.props.opps),
      opps: this.getOpps(this.props.opps, this.props.status),
      text: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      opps: this.getOpps(nextProps.opps, nextProps.status),
      columns: this.getColumns(nextProps.opps)
    });
  }

  async handleDelete(id, status) {
    const res = await axios.delete(`http://localhost:5000/jobhuntr/${status}`, {
      data: { id }
    });

    if (res.status === 200) {
      this.setState({ text: "Object Successfully Deleted" });
      this.props.updateOpps("andrewchen");
    }
  }

  getColumns(data) {
    if (data.length > 0) {
      let columns = [];
      const sample = data[0];
      Object.keys(sample).forEach(key => {
        if (key !== "id" && key !== "processes") {
          columns.push({
            accessor: key,
            Header: key[0].toUpperCase() + key.substring(1)
          });
        }
      });
      // add buttons
      columns.push({
        accessor: "",
        Header: "Modify",
        Cell: row => (
          <div className="table-buttons">
            <button
              onClick={() =>
                this.handleDelete(row.original.id, this.props.status)
              }
            >
              Delete
            </button>
          </div>
        ),
        filterable: false
      });
      return columns;
    } else {
      return [
        { accessor: "company", Header: "Company" },
        { accessor: "position", Header: "Position" }
      ];
    }
  }

  /**
   * Get Opportunities. If statusFilter is
   * @param {} statusFilter
   * @param {} opps
   */
  getOpps(currOpps, statusFilter) {
    if (currOpps) {
      if (statusFilter !== "opportunities") {
        let relevantOpps = [];
        currOpps.forEach(opp => {
          for (let p of opp.processes) {
            if (
              p.document.status === this.props.status ||
              p.type === this.props.status
            )
              relevantOpps.push(opp);
          }
        });
        return relevantOpps;
      } else {
        return currOpps;
      }
    } else {
      return [];
    }
  }

  /**
   * Custom Table Filtering Function
   * @param {String} filter
   * @param {Array} row
   */
  filterTable(filter, row) {
    return row[filter.id].toLowerCase().includes(filter.value.toLowerCase());
  }

  render() {
    const { toggleAll, toggleSelection, isSelected } = this;
    const { columns, opps, selectAll } = this.state;

    const checkboxProps = {
      selectAll,
      isSelected,
      toggleSelection,
      toggleAll,
      defaultFilterMethod: this.filterTable
    };

    return (
      <div className={`table table--${this.props.status}`}>
        <ReactTable
          filterable
          data={opps}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          {...checkboxProps}
        />
      </div>
    );
  }
}

export default Table;
