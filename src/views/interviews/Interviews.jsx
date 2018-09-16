import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InterviewForm from "../../components/forms/intervForm";
import Table from "../../components/table";

const customStyles = {
  content: {
    top: "15%",
    left: "30%",
    right: "30%",
    bottom: "15%"
  }
};
class Interview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      opps: this.props.opps
    };
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  render() {
    const { opps } = this.props;
    return (
      <div className="interviews">
        <h1 className="heading">Interviews</h1>
        <p className="info">Keep Track of Interviews here.</p>
        <div className="button">
          <button className="btn" onClick={() => this.handleOpenModal()}>
            New Interview
          </button>
        </div>
        <Table
          opps={opps}
          updateOpps={this.props.updateOpps}
          status="interview"
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
          <InterviewForm
            closeModal={() => this.handleCloseModal()}
            updateOpps={this.props.updateOpps}
            opps={opps}
          />
        </Modal>
      </div>
    );
  }
}

export default Interview;
