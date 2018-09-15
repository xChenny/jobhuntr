import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OppForm from "../../components/forms/opporForm";

class Opportunities extends Component {
  state = {
    showModal: false
  };

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="opportunities">
        <h1>Opportunities Created:</h1>
        <p>A list of desired companies/positions to apply for:</p>
        <button onClick={() => this.handleOpenModal()}>
          Add New Application
        </button>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <FontAwesomeIcon
            icon="times"
            onClick={() => this.handleCloseModal()}
          />
          <OppForm />
        </Modal>
      </div>
    );
  }
}

export default Opportunities;
