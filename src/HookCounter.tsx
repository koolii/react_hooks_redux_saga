import React, { FC, useState } from "react";
import { Button, Card, Statistic } from "semantic-ui-react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <Card>
      <Statistic className="number-board">
        {" "}
        <Statistic.Label>Hooks Count</Statistic.Label>{" "}
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>{" "}
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={decrement}>
            -1{" "}
          </Button>
          <Button color="green" onClick={increment}>
            {" "}
            +1
          </Button>{" "}
        </div>
      </Card.Content>
    </Card>
  );
};

export { Counter };
