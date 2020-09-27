import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import Example2 from ".";

function Example2Block() {
  const [showCss, setShowCss] = useState(false);

  const code = `
  <div id="nt-example2-container">
    <NewsTicker
      ref={ref}
      id="nt-example2"
      direction={Directions.UP}
      rowHeight={60}
      maxRows={1}
      speed={300}
      duration={6000}
      hasMoved={() => {
        var index = ref.current.state.items[0].key;
        setCurrentItem(news[index]);
      }}
      paused={() => {
        document.querySelector("#nt-example2 li i").classList.remove("fa-play");
        document.querySelector("#nt-example2 li i").classList.add("fa-pause");
      }}
      unPaused={() => {
        document.querySelector("#nt-example2 li i").classList.remove("fa-pause");
        document.querySelector("#nt-example2 li i").classList.add("fa-play");
      }}>
      {news.map((item, i) => (
        <div key={i}>
          <i className="fa fa-fw state fa-play" />
          <span className="hour">{item.hour}</span> {item.title}
        </div>
      ))}
    </NewsTicker>
    
    <div id="nt-example2-infos-container">
      <div id="nt-example2-infos-triangle" />
      <div
        id="nt-example2-infos"
        className="row"
        onMouseEnter={() => ref.current.pause()}
        onMouseLeave={() => ref.current.unPause()}>
        <div className="col-4 centered">
          <div className="infos-hour">{currentItem.hour}</div>
          <i className="fa fa-arrow-left"
            id="nt-example2-prev"
            onClick={() => { ref.current.movePrev(); ref.current.resetInterval(); }} />
            
          <i className="fa fa-arrow-right" 
            id="nt-example2-next" 
            onClick={() => { ref.current.moveNext(); ref.current.resetInterval(); }} />
        </div>
        <div className="col-8">
          <div className="infos-text">{currentItem.info}</div>
        </div>
      </div>
    </div>
</div>`;

  const css = `
  #nt-example2 {
    max-width: 620px;
    margin: auto;
  }
  
  #nt-example2-container {
    text-align: center;
    margin-top: 107px;
    margin-bottom: 40px;
    height: 300px;
  }
  
  #nt-example2-container i {
    font-size: 36px;
    margin: 8px;
    cursor: pointer;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  
  #nt-example2-container i:hover {
    color: #333;
  }
  
  #nt-example2 li {
    color: #f2f2f2;
    background: #319795;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 60px;
    padding: 10px 16px 10px 16px;
    line-height: 40px;
    list-style: none;
    font-size: 24px;
    text-align: left;
  }
  
  #nt-example2 li div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  #nt-example2 li div .state {
    font-size: inherit;
    margin: 0;
  }
  
  #nt-example2 span.hour {
    font-weight: 700;
  }
  
  #nt-example2-infos-triangle {
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 15px 16px 15px;
    border-color: transparent transparent #319795 transparent;
    margin: 6px auto 0;
  }
  
  #nt-example2-infos {
    max-width: 620px;
    margin: auto;
    padding: 12px;
    color: #f2f2f2;
    background: #319795;
  }
  
  #nt-example2-infos .infos-hour {
    font-size: 50px;
    font-weight: 700;
    margin-top: 20px;
  }
  
  #nt-example2-infos h4 {
    color: #f2f2f2;
    font-weight: 500;
  }
  
  #nt-example2-infos .infos-text {
    text-align: left;
  }  
    `;
  return (
    <div className="text-dark pb-5">
      <div className="container">
        <h2 className="text-center  py-5">One Line Ticker With Callbacks & Methods Example</h2>
        <div className="row d-flex ">
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
          <div className="col-lg-6">
            <div stlye={{ height: 500 }}>
              <Example2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example2Block;
