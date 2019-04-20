import React, { Component, SyntheticEvent } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // 通常の関数定義をしてしまうと、中身のthisが実行時のオブジェクトに指定される
  // が、このようにクラス内部でアロー関数にし、かつ、thisを使うと、クラス自身を指定することができる
  decrement = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>Counter</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{this.state.count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              <Button color="red" onClick={this.increment}>
                +1
              </Button>
              <Button color="green" onClick={this.decrement}>
                -1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Counter;
