import React, { Component } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import OppForm from "../../components/forms/opporForm";
import Table from "../../components/table";
  
const customStyles = {
  content : {
    top                   : '15%',
    left                  : '30%',
    right                 : '30%',
    bottom                : '15%',
  }
};

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
        <h1 className="heading">Opportunities</h1>
        <p className="info">
          Manage your ongoing job leads and company opportunities.
        </p>
	<div className='button'>
          <button className="btn" onClick={() => this.handleOpenModal()}>Add Opportunity</button>
	</div>
        <Table
          opps={this.props.opps}
          updateOpps={this.props.updateOpps}
          status="opportunities"
        />
        <Modal
          isOpen={this.state.showModal}
          style={ customStyles }
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
