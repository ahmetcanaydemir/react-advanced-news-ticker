import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";

import Example3 from ".";

function Example3Block() {
  const [showCss, setShowCss] = useState(false);

  const code = `
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
      <span className="button mt-2" id="nt-example3-button" onClick={startSpin}>
        {getButtonContent()}
      </span>
    </div>
  )`;

  const css = `
  #nt-example3 {
    margin: 80px auto 0;
  }
  
  #nt-example3-container {
    text-align: center;
  }
  
  #nt-example3-container i {
    font-size: 36px;
    margin: 8px;
    cursor: pointer;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  
  #nt-example3-container i:hover {
    color: #333;
  }
  
  #nt-example3 li {
    color: #4e4e4e;
    background: #f2f2f2;
    overflow: hidden;
    height: 80px;
    padding: 10px;
    line-height: 60px;
    font-size: 40px;
    text-transform: uppercase;
    list-style: none;
  }
  
  #nt-example3 li:hover {
    background: #fff;
  }
    `;
  return (
    <div className="colored-block text-light pb-5">
      <div className="container">
        <h2 className="text-center  py-5">Bonus: "Roulette" Example, Using Callbacks & Methods</h2>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-4">
            <Example3 />
          </div>
          <div className="col-lg-8">
            <div className="d-flex justify-content-end">
              <div className="btn btn-light align-self-right mb-2" onClick={() => setShowCss(!showCss)}>
                Show {showCss ? "JSX" : "CSS"}
              </div>
            </div>
            <CodeMirror
              value={showCss ? css : code}
              height={450}
              options={{
                theme: "monokai",
                mode: "jsx",
                lineNumbers: false,
                readOnly: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example3Block;
