import React from "react";
import NewsTicker from "../../../react-advanced-news-ticker";
import "./index.css";
import CodeMirror from "@uiw/react-codemirror";

function Hello() {
  return (
    <div className=" text-center" id="hello" style={{ paddingBottom: 150, paddingTop: 80 }}>
      <div className="container ">
        <div className="mx-5">
          <h1>
            <span className="text-dark">React Advanced</span> News Ticker{" "}
          </h1>
          <div id="nt-title-container" className="my-5">
            <NewsTicker id="nt-title" maxRows={1} rowHeight={40} duration={3000} pauseOnHover={false}>
              <div>A powerful, flexible and animated vertical news ticker component.</div>
              <div>Provides hight flexibility thanks to numerous callbacks & methods.</div>
              <div>Fully customizable to every kind of vertical scrolling need.</div>
              <div>Light-weight and used only React and JavaScript.</div>
            </NewsTicker>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <a
            className="mr-4 button btn btn-dark border-0"
            href="https://github.com/ahmetcanaydemir/react-advanced-news-ticker/archive/master.zip"
            target="_blank"
            rel="noopener noreferrer">
            Download
          </a>
          <a
            style={{ height: 60 }}
            className="btn btn-light d-flex align-items-center"
            href="https://github.com/ahmetcanaydemir/react-advanced-news-ticker"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github" /> View on GitHub
          </a>
        </div>
        <div className="d-flex text-left justify-content-center mt-5">
          <div style={{ width: 320 }}>
            <CodeMirror
              value=" npm i react-advanced-news-ticker"
              options={{
                theme: "monokai",
                mode: "jsx",
                lineNumbers: false,
                scrollbarStyle: "null",
                readOnly: true,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hello;
