import React, { useState } from "react";
import Example1 from ".";
import CodeMirror from "@uiw/react-codemirror";
import Title from "../title";

function Example1Block() {
  const [showCss, setShowCss] = useState(false);

  const code = `
  <div id="nt-example1-container">
      <i className="fa fa-arrow-up" 
         id="nt-example1-prev" 
         onClick={() => { ref.current.movePrev(); ref.current.resetInterval(); }} />
      <NewsTicker 
         ref={ref} 
         id="nt-example1" 
         direction={Directions.UP} 
         rowHeight={80} 
         maxRows={3} 
         duration={4000}>
          <div>Content 1</div>
          <div>Content 2</div>
          <div>Content 3</div>
          <div>Content 4</div>
      </NewsTicker>
      <i className="fa fa-arrow-down" 
         id="nt-example1-next"
         onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }} />
    </div>`;

  const css = `
    #nt-example1 {
      max-width: 620px;
      margin: auto;
    }

    #nt-example1-container {
      text-align: center;
    }

    #nt-example1-container i {
      font-size: 36px;
      margin: 8px;
      cursor: pointer;
      -webkit-transition: all 0.1s ease-in-out;
      -moz-transition: all 0.1s ease-in-out;
      -ms-transition: all 0.1s ease-in-out;
      -o-transition: all 0.1s ease-in-out;
      transition: all 0.1s ease-in-out;
    }

    #nt-example1-container i:hover {
      color: #333;
    }

    #nt-example1 li {
      color: #4e4e4e;
      background: #f2f2f2;
      overflow: hidden;
      height: 80px;
      padding: 10px;
      line-height: 30px;
      list-style: none;
      font-size: 24px;
      text-align: left;
      border-bottom: 1px dotted #2c8162;
    }

    #nt-example1 li:hover {
      background: #fff;
    }
    `;
  return (
    <>
      <Title title="Examples" id="examples" />
      <div className="colored-block text-light pb-5">
        <div className="container">
          <h2 className="text-center  py-5">Multilines Simple Example</h2>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <Example1 />
            </div>
            <div className="col-lg-6 ">
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
    </>
  );
}

export default Example1Block;
