import { connect } from "react-redux";
import COL from "./COL";
import { getOpportunities } from "../dash/actions";

const mapStateToProps = state => ({
  opps: state.dashState.opps
});

const mapDispatchToProps = dispatch => ({
  updateOpps: username => dispatch(getOpportunities(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(COL);
