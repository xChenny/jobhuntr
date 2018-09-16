import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InterviewForm from "../../components/forms/intervForm";
import Table from "../../components/table";

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
        <h1 className="heading">Your Interviews:</h1>
        <button onClick={() => this.handleOpenModal()}>
          Add New Interview
        </button>
        <Table
          opps={opps}
          updateOpps={this.props.updateOpps}
          status="interviews"
        />
        <Modal
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
