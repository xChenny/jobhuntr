// library imports
import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// component imports
import AppForm from "../../components/forms/appForm";
import Table from "../../components/table";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "15%",
    left: "30%",
    right: "30%",
    bottom: "15%"
  }
};

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
        <h1 className="heading">Applications</h1>
        <p className="info">Manage your Job Applications here.</p>
        <div className="button">
          <button className="btn" onClick={() => this.handleOpenModal()}>
            New Application
          </button>
        </div>
        <Table
          opps={this.props.opps}
          updateOpps={this.props.updateOpps}
          status="applications"
        />
        <Modal
          style={customStyles}
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
