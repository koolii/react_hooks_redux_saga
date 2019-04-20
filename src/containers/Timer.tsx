import React, { FC, useEffect, useState } from "react";
import Timer from "../components/Timer";

// CUSTOM HOOK になっている。
// オリジナルで必要なライフサイクルを定義させて、充実させたものっぽい
// コンポーネントのpropsが一致するように値を多値返却すると良い？
// 注意: Custom Hook の関数名は『use』で始める決まりになっている
// P120,121に useRef(=任意値の保持),useMemo(=shouldComponentUpdateみたい)の説明があるので気になったら
const useTimer = (limitSec: number): [number, () => void] => {
  const [left, setLeft] = useState(limitSec);
  const reset = () => {
    setLeft(limitSec);
  };

  const tick = () => {
    setLeft(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => clearInterval(timerId);
  }, []);

  return [left, reset];
};

const TimerContainer: FC = () => {
  const LIMIT = 60;
  const [left, reset] = useTimer(LIMIT);

  return <Timer left={left} reset={reset} />;
};

export default TimerContainer;
