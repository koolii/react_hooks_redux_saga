import React, { FC } from "react";
import { Button, Card, Icon, Statistic } from "semantic-ui-react";

interface TimerProps {
  left: number;
  reset: () => void;
}

const Timer: FC<TimerProps> = ({ left, reset }) => (
  <Card>
    <Statistic className="number-board">
      {" "}
      <Statistic.Label>Components/Timer</Statistic.Label>{" "}
      <Statistic.Value>{left}</Statistic.Value>
    </Statistic>{" "}
    <Card.Content>
      <Button color="red" fluid onClick={reset}>
        {" "}
        <Icon name="redo" />
        Reset
      </Button>{" "}
    </Card.Content>
  </Card>
);

export default Timer;
