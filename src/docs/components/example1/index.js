import React, { useRef } from "react";
import NewsTicker, { Directions } from "../../../react-advanced-news-ticker/";
import "./index.css";

function Example1() {
  const ref = useRef(null);
  return (
    <div id="nt-example1-container">
      <i
        className="fa fa-arrow-up"
        id="nt-example1-prev"
        onClick={() => {
          ref.current.movePrev();
          ref.current.resetInterval();
        }}
      />
      <NewsTicker ref={ref} id="nt-example1" direction={Directions.UP} rowHeight={80} maxRows={3} duration={4000}>
        <div>
          Maecenas nec ligula sed est suscipit aliquet sed eget ipsum, suspendisse.{" "}
          <span className="text-primary">Read more...</span>
        </div>
        <div>
          Etiam imperdiet volutpat libero eu tristique. Aenean, rutrum felis in.{" "}
          <span className="text-primary">Read more...</span>
        </div>
        <div>
          Praesent ornare nisl lorem, ut condimentum lectus gravida ut.{" "}
          <span className="text-primary">Read more...</span>
        </div>
        <div>
          In pharetra suscipit orci sed viverra. Praesent at sollicitudin tortor, id.{" "}
          <span className="text-primary">Read more...</span>
        </div>
      </NewsTicker>
      <i
        className="fa fa-arrow-down"
        id="nt-example1-next"
        onClick={() => {
          ref.current.moveNext();
          ref.current.resetInterval();
        }}
      />
    </div>
  );
}

export default Example1;
