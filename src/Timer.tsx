import React, { Component } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";

const LIMIT = 5;

interface TimerState {
  timeLeft: number;
}

class Timer extends Component<{}, TimerState> {
  constructor(props: {}) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }

  reset = () => {
    this.setState({
      timeLeft: LIMIT
    });
  };

  tick = () => {
    this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1 }));
  };

  componentDidMount = () => {
    this.timerId = setInterval(this.tick, 1000);
  };

  componentDidUpdate = () => {
    if (this.state.timeLeft === 0) {
      this.reset();
    }
  };

  componentWillUnmount = () => {
    if (this.timerId !== null) {
      clearInterval(this.timerId as NodeJS.Timer);
    }
  };

  timerId?: NodeJS.Timer;

  render() {
    const { timeLeft } = this.state;

    return (
      <Card>
        <Statistic className="number-board">
          {" "}
          <Statistic.Label>time</Statistic.Label>{" "}
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>{" "}
        <Card.Content>
          <Button color="red" fluid onClick={this.reset}>
            {" "}
            <Icon name="redo" />
            Reset
          </Button>{" "}
        </Card.Content>
      </Card>
    );
  }
}

export default Timer;
