import { connect } from "react-redux";
import Offers from "./Offers";
import { getOpportunities } from "../dash/actions";

const mapStateToProps = state => ({
  opps: state.dashState.opps
});

const mapDispatchToProps = dispatch => ({
  updateOpps: username => dispatch(getOpportunities(username))
})

export default connect(mapStateToProps, mapDispatchToProps)(Offers);