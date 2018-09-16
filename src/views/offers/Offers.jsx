import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OffersForm from "../../components/forms/offersForm";
import Table from "../../components/table";

class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="offers">
        <h1 className="heading">Your Job Offers:</h1>
        <button onClick={() => this.handleOpenModal()}>
          Add New Interview
        </button>
        <Table
          opps={this.props.opps}
          updateOpps={this.props.updateOpps}
          status="offers"
        />
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
        >
          <FontAwesomeIcon
            icon="times"
            onClick={() => this.handleCloseModal()}
          />
          <OffersForm
            updateOpps={this.props.updateOpps}
            closeModal={this.handleCloseModal}
          />
        </Modal>
      </div>
    );
  }
}

export default Offers;
