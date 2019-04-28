import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { add, decrement, increment } from "../actions/counter";
import Counter from "../components/Counter";
import { CounterState } from "../reducer";

interface StateProps {
  count: number;
}

interface DispatchProps {
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count
});

// ActionCreatorとコンポーネントをdispatch()を介してリンクさせている
// const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
//   add: amount => dispatch(add(amount)),
//   decrement: () => dispatch(decrement()),
//   increment: () => dispatch(increment())
// });
// ↑の処理をbindActionCreators()で省略したものが↓の記述
// やっていることは同じ
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => {
  return bindActionCreators({ add, decrement, increment }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
