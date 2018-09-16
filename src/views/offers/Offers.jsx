import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OffersForm from "../../components/forms/offersForm";
import Table from "../../components/table";

const customStyles = {
  content: {
    top: "15%",
    left: "30%",
    right: "30%",
    bottom: "15%"
  }
};
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
        <h1 className="heading">Job Offers</h1>
        <p className="info">Explore your choices in companies here.</p>
        <div className="button">
          <button className="btn" onClick={() => this.handleOpenModal()}>
            New Offer
          </button>
        </div>
        <Table
          opps={this.props.opps}
          updateOpps={this.props.updateOpps}
          status="offer"
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
