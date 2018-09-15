// library imports
import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component imports
import AppForm from "../../components/forms/appForm";

Modal.setAppElement("#root");

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
    console.log("closing modal");
  }

  render() {
    return (
      <div id="apps" className="apps">
        <h1>Positions that you've applied to:</h1>
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
          <AppForm />
        </Modal>
      </div>
    );
  }
}

export default Applications;
