import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OppForm from "../../components/forms/opporForm";
import Table from "../../components/table";

class Opportunities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="opportunities">
        <h1 className="heading">Your Opportunities:</h1>
        <p className="info">
          A list of desired companies/positions to apply for:
        </p>
        <button onClick={() => this.handleOpenModal()}>Add Opportunity</button>
        <Table
          opps={this.props.opps}
          updateOpps={this.props.updateOpps}
          status="opportunities"
        />
        <Modal
          isOpen={this.state.showModal}
          style={{ width: 500 }}
          contentLabel="Minimal Modal Example"
        >
          <FontAwesomeIcon
            icon="times"
            onClick={() => this.handleCloseModal()}
          />
          <OppForm
            closeModal={() => this.handleCloseModal()}
            updateOpps={this.props.updateOpps}
          />
        </Modal>
      </div>
    );
  }
}

export default Opportunities;
