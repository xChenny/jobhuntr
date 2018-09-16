// library imports
import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component imports
import AppForm from "../../components/forms/appForm";
import Table from "../../components/table";

Modal.setAppElement("#root");

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div id="apps" className="apps">
        <h1 className="heading">Your Job Applications:</h1>
        <button onClick={() => this.handleOpenModal()}>
          Add New Application
        </button>
        <Table
          opps={this.props.opps}
          updateOpps={this.props.updateOpps}
          status="applications"
        />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <FontAwesomeIcon
            icon="times"
            onClick={() => this.handleCloseModal()}
          />
          <AppForm
            updateOpps={this.props.updateOpps}
            closeModal={this.handleCloseModal}
            opps={this.props.opps}
          />
        </Modal>
      </div>
    );
  }
}

export default Applications;
