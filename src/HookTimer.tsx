import React, { FC, useState, useEffect } from "react";
import { Button, Statistic, Card, Icon } from "semantic-ui-react";

const LIMIT = 10;
const Timer: FC = () => {
  const [left, setLeft] = useState(LIMIT);
  const reset = () => {
    setLeft(LIMIT);
  };
  const tick = () => {
    // ここはleftがずっと10のままになっていた
    // やはりsetLeft()からprevLeftにアクセスして現在の値を確認するしかない？
    if (left === 0) {
      return false;
    }
    // setLeft(prevLeft => (prevLeft === 0 ? LIMIT : prevLeft - 1));

    setLeft(prevLeft => {
      if (prevLeft === 0) {
        return 0;
      } else {
        return prevLeft - 1;
      }
    });
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <Card>
      <Statistic className="number-board">
        {" "}
        <Statistic.Label>HOOK timer</Statistic.Label>{" "}
        <Statistic.Value>{left}</Statistic.Value>
      </Statistic>{" "}
      <Card.Content>
        <Button color="red" fluid onClick={reset}>
          {" "}
          <Icon name="redo" />
          Reset
        </Button>
      </Card.Content>
    </Card>
  );
};

export { Timer };
