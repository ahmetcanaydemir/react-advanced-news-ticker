import React from "react";
import Title from "../title";

function Props() {
  return (
    <>
      <Title title="Props" id="props" />

      <div className="text-dark pb-5">
        <div className="container py-5" style={{ fontSize: 14, maxWidth: 900 }}>
          <table className="table table-striped table-responsive params-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Usage</th>
                <th>Type/Values</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>rowHeight</code>
                </td>
                <td>defines the height (in px) of one row</td>
                <td>
                  <code>int</code>
                </td>
                <td>
                  <em>22</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>maxRows</code>
                </td>
                <td>defines the number of rows displayed at the same time</td>
                <td>
                  <code>int</code>
                </td>
                <td>
                  <em>3</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>speed</code>
                </td>
                <td>defines the animation speed (in ms)of the rows moving up or down</td>
                <td>
                  <code>int</code> <em>(in ms)</em>
                </td>
                <td>
                  <em>400</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>duration</code>
                </td>
                <td>defines the times (in ms) before the rows automatically move</td>
                <td>
                  <code>int</code> <em>(in ms)</em>
                </td>
                <td>
                  <em>2500</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>direction</code>
                </td>
                <td>defines the direction of the rows movement</td>
                <td>
                  <code>Directions.UP</code> <em>or</em> <code>Directions.DOWN</code>
                </td>
                <td>
                  <em>Directions.UP</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>autoStart</code>
                </td>
                <td>enable/disable auto start on load</td>
                <td>
                  <code>bool</code>
                </td>
                <td>
                  <em>true</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>pauseOnHover</code>
                </td>
                <td>enable/disable pause when mouse hovers the newsTicker element</td>
                <td>
                  <code>bool</code>
                </td>
                <td>
                  <em>true</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>className</code>
                </td>
                <td>for define className of newsTicker's ul element </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <em>''</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>id</code>
                </td>
                <td>for define id of newsTicker's ul element </td>
                <td>
                  <code>string</code>
                </td>
                <td>
                  <em>''</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>style</code>
                </td>
                <td>for styling newsTicker's ul element </td>
                <td>
                  <code>object</code>
                </td>
                <td>
                  <em>{"{}"}</em>
                </td>
              </tr>
              <tr>
                <td>
                  <code>hasMoved</code>
                </td>
                <td>
                  <code>callback</code> called at the end of every movement animation
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>movingUp</code>
                </td>
                <td>
                  <code>callback</code> called before launching <code>moving up</code> action
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>movingDown</code>
                </td>
                <td>
                  <code>callback</code> called before launching <code>moving down</code> action
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>started</code>
                </td>
                <td>
                  <code>callback</code> called on <code>start</code> action
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>stopped</code>
                </td>
                <td>
                  <code>callback</code> called on <code>stop</code> action
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>paused</code>
                </td>
                <td>
                  <code>callback</code> called on <code>pause</code> action (triggered on <code>onMouseEnter</code> if
                  <code> pauseOnHover=true</code>)
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <code>unPaused</code>
                </td>
                <td>
                  called on <code>unpause</code> action (triggered on <code>onMouseLeave</code> if{" "}
                  <code>pauseOnHover=true</code>)
                </td>
                <td>
                  <code>function</code>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Props;
