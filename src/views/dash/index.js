import { connect } from "react-redux";
import Dash from "./Dash";
import { getOpportunities } from "./actions";

// Container component for the Applications presentational component

const mapStateToProps = state => ({
  opps: state.dashState.opps
});

const mapDispatchToProps = dispatch => ({
  getOpps: username => dispatch(getOpportunities(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);