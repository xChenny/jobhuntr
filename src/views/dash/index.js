import { connect } from "react-redux";
import Dash from "./Dash";
import { getOpportunities, purgeState } from "./actions";

// Container component for the Applications presentational component

const mapStateToProps = state => ({
  opps: state.dashState.opps
});

const mapDispatchToProps = dispatch => ({
  getOpps: username => dispatch(getOpportunities(username)),
  purgeOpps: () => {dispatch(purgeState())}
});

export default connect(mapStateToProps, mapDispatchToProps)(Dash);