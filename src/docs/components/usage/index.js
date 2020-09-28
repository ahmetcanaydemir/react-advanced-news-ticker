import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import Title from "../title";

function Usage() {
  const codeImport = ` import NewsTicker from "react-advanced-news-ticker";
  // When you need, you can import enums like this:
  // import NewsTicker, { Directions, TickerStates } from "react-advanced-news-ticker";
  `;

  const codeBasic = `<NewsTicker>
    <div>Etiam imperdiet volutpat libero eu tristique.</div>
    <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
    <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
    <div>Nunc ultrices tortor eu massa placerat posuere.</div>
 </NewsTicker>`;

  const codeCustomParameters = `<NewsTicker
    rowHeight = {48}
    maxRows = {2}
    speed = {600}
    direction = {Directions.UP}
    duration = {4000}
    autoStart = {true}
    pauseOnHover = {false}
    id = "myId"
    className = "myClassName1 myClassName2"
    style = {{marginTop: 34}}>
    <div>Etiam imperdiet volutpat libero eu tristique.</div>
    <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
    <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
    <div>Nunc ultrices tortor eu massa placerat posuere.</div>
</NewsTicker>`;

  const codeWithCallbacks = `const updateInfos = () => {
  ...
}

return <NewsTicker
    maxRows = {1}
    duration = {6000}
    hasMoved = {updateInfos}
    started = {()=>{ 
      console.log('react advanced news ticker just started!');
    }}
    paused = {()=>{ 
      console.log('react advanced news ticker has been paused.');
    }}>
    <div>Etiam imperdiet volutpat libero eu tristique.</div>
    <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
    <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
    <div>Nunc ultrices tortor eu massa placerat posuere.</div>
</NewsTicker>`;

  const codeWithMethods = `const newsTickerRef = useRef(null);
return <>
  <NewsTicker
      ref = {newsTickerRef}
      autoStart = {false}
      speed = {400}>
      <div>Etiam imperdiet volutpat libero eu tristique.</div>
      <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
      <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
      <div>Nunc ultrices tortor eu massa placerat posuere.</div>
  </NewsTicker>
  
  <button
    onClick={() => { newsTickerRef.current.start() }}>
    Start
  </button>
  
  <div 
    onMouseEnter={() => newsTickerRef.current.pause()}
    onMouseLeave={() => newsTickerRef.current.unPause()}>
     Pause
  </div>
</>`;
  return (
    <>
      <Title title="Usage" id="usage" />

      <div className="text-dark pb-5">
        <div className="container py-5 px-4" style={{ maxWidth: 900 }}>
          <div className="row">
            <div className="mb-2">Import react advanced news ticker:</div>
            <CodeMirror
              value={codeImport}
              options={{
                theme: "monokai",
                mode: "jsx",
                lineNumbers: false,
                scrollbarStyle: "null",
                readOnly: true,
              }}
            />
          </div>
          <div className="row mt-5">
            <div className="mb-2">
              Basically create NewsTicker element and give your components as children. You can also use your own custom
              componets.
            </div>
            <CodeMirror
              value={codeBasic}
              options={{
                theme: "monokai",
                mode: "jsx",
                lineNumbers: false,
                scrollbarStyle: "null",
                readOnly: true,
              }}
            />
          </div>

          <div className="row mt-5">
            <div className="mb-2">With custom parameters:</div>
            <CodeMirror
              value={codeCustomParameters}
              options={{
                theme: "monokai",
                mode: "jsx",
                lineNumbers: false,
                scrollbarStyle: "null",
                readOnly: true,
              }}
            />
          </div>

          <div className="row mt-5">
            <div className="mb-2">With callbacks:</div>
            <CodeMirror
              value={codeWithCallbacks}
              options={{
                theme: "monokai",
                mode: "jsx",
                lineNumbers: false,
                scrollbarStyle: "null",
                readOnly: true,
              }}
            />
          </div>

          <div className="row mt-5">
            <div className="mb-2">With methods. You need to use ref for using methods.</div>
            <CodeMirror
              value={codeWithMethods}
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
    </>
  );
}

export default Usage;
