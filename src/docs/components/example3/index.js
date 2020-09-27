import React, { useRef, useState } from "react";
import NewsTicker, { TickerStates } from "../../../react-advanced-news-ticker/";
import "./index.css";

function Example3() {
  const ref = useRef(null);

  const [speedAdd, setSpeedAdd] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [duration, setDuration] = useState(0);
  const [shouldStop, setShouldStop] = useState(false);
  const [currentState, setCurrentState] = useState(TickerStates.Stopped);

  const [winner, setWinner] = useState("");

  const getButtonContent = () => {
    if (shouldStop)
      return (
        <>
          <span className="ml-2">Waiting...</span>
        </>
      );
    else if (winner)
      return (
        <>
          <span className="ml-2">Result: {winner}</span>
        </>
      );
    else if (currentState === TickerStates.Running)
      return (
        <>
          <span className="ml-2">Stop</span>
        </>
      );
    else
      return (
        <>
          <span className="ml-2">Start</span>
        </>
      );
  };

  const startSpin = () => {
    if (currentState === TickerStates.Stopped) {
      setSpeed(1);
      setSpeedAdd(1);
      setDuration(0);
      ref.current.startButtonClick();
      setCurrentState(TickerStates.Running);
    } else if (currentState === TickerStates.Running) {
      setShouldStop(true);
    }
  };

  return (
    <div id="nt-example3-container">
      <NewsTicker
        id="nt-example3"
        rowHeight={80}
        maxRows={1}
        duration={duration}
        speed={speed}
        ref={ref}
        autoStart={false}
        pauseOnHover={false}
        hasMoved={() => {
          if (speed > 700) {
            ref.current.stopButtonClick();
            setWinner(ref.current.state.items[0]);
            setCurrentState(TickerStates.Stopped);
            setShouldStop(false);
            setTimeout(() => {
              setWinner("");
            }, 4000);
          } else if (shouldStop) {
            setSpeedAdd(speedAdd * 1.4);
            setSpeed(speed + speedAdd);
            setDuration(speed + 25);
          }
        }}>
        <div>PHARETRA</div>
        <div>MAECENAS</div>
        <div>ONEC</div>
        <div>LOREM</div>
        <div>IPSUM</div>
        <div>PRAESENT</div>
        <div>NUNC</div>
      </NewsTicker>
      <span class="button mt-2" id="nt-example3-button" onClick={startSpin}>
        {getButtonContent()}
      </span>
    </div>
  );
}

export default Example3;
