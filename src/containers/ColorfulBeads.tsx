import { connect } from "react-redux";

import ColorfulBeads from "../components/ColorfulBeads";
import { CounterState } from "../reducer";

interface StateProps {
  count: number;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

export default connect(mapStateToProps)(ColorfulBeads);
