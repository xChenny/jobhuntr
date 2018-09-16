import { connect } from "react-redux";
import Interviews from "./Interviews";
import { getOpportunities } from "../dash/actions";

// Container component for the Applications presentational component

const mapStateToProps = state => ({
  opps: state.dashState.opps
});

const mapDispatchToProps = dispatch => ({
  updateOpps: username => dispatch(getOpportunities(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Interviews);