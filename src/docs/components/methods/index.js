import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import Title from "../title";

function Methods() {
  return (
    <>
      <Title title="Methods" id="methods" />
      <div className="colored-block text-light pb-5">
        <div className="container pt-5" style={{ maxWidth: 900 }}>
          <div className="mb-2">After creating NewsTicker component with ref, methods are called with</div>
          <CodeMirror
            value="ref.current.methodName()"
            options={{
              theme: "monokai",
              mode: "jsx",
              lineNumbers: false,
              scrollbarStyle: "null",
              readOnly: true,
            }}
          />

          <div className="mt-4 mb-2">Example</div>
          <CodeMirror
            value={`ref.current.stop()
ref.current.start()
ref.current.move()
ref.current.getState()
ref.current.pause()`}
            options={{
              theme: "monokai",
              mode: "jsx",
              lineNumbers: false,
              readOnly: true,
              scrollbarStyle: "null",
            }}
          />
        </div>
      </div>
      <div className="text-dark pb-5">
        <div className="container py-5" style={{ fontSize: 14, maxWidth: 900 }}>
          <h2 className="text-center">Method List</h2>
          <table class="table table-striped table-responsive params-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Parameter(s)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>start</code>
                </td>
                <td></td>
                <td>starts moving newsTicker elements</td>
              </tr>
              <tr>
                <td>
                  <code>stop</code>
                </td>
                <td></td>
                <td>stops moving newsTicker elements</td>
              </tr>
              <tr>
                <td>
                  <code>getState</code>
                </td>
                <td></td>
                <td>
                  returns current state: <code>TickerStates.Stopped</code> = stopped, <code>TickerStates.Running</code>{" "}
                  = started, <code>TickerStates.Paused</code> = paused (and started)
                </td>
              </tr>
              <tr>
                <td>
                  <code>pause</code>
                </td>
                <td></td>
                <td>
                  pauses newsTicker elements without stopping them - the newsTicker has to be started to be able to{" "}
                  pause it (the <code>pause</code> method is called on <code>mouseOver</code> if{" "}
                  <code>pauseOnHover</code> = true)
                </td>
              </tr>
              <tr>
                <td>
                  <code>unpause</code>
                </td>
                <td></td>
                <td>
                  unpauses newsTicker elements - the newsTicker has to be started &amp; paused to be able to unpause it{" "}
                  (the <code>unpause</code> method is called on <code>onMouseLeave</code> if <code>pauseOnHover</code> =
                  true)
                </td>
              </tr>
              <tr>
                <td>
                  <code>moveDown</code>
                </td>
                <td></td>
                <td>moves elements down</td>
              </tr>
              <tr>
                <td>
                  <code>moveUp</code>
                </td>
                <td></td>
                <td>moves elements up</td>
              </tr>
              <tr>
                <td>
                  <code>moveNext</code>
                </td>
                <td></td>
                <td>
                  moves up or down according to the current <code>direction</code> option
                </td>
              </tr>
              <tr>
                <td>
                  <code>movePrev</code>
                </td>
                <td></td>
                <td>
                  moves up or down according to the current <code>direction</code> option
                </td>
              </tr>
              <tr>
                <td>
                  <code>move</code>
                </td>
                <td></td>
                <td>
                  equivalent to <code>moveNext</code>, but will not move if <code>paused</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Methods;
