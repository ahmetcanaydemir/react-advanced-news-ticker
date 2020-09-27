import React, { useRef, useState } from "react";
import NewsTicker, { Directions } from "../../../react-advanced-news-ticker";
import "./index.css";

function Example2() {
  const ref = useRef(null);

  const news = [
    {
      hour: "10:02",
      title: "Praesent ornare nisl lorem, ut condi.",
      info:
        "Vestibulum ac interdum quam, tempus aliquet purus. Nunc luctus augue ut pellentesque faucibus. Proin urna nunc, feugiat ac bibendum non, cursus id orci. Integer porttitor diam et odio pharetra, sed congue augue dapibus. Fusce ac tristique tortor. Aliquam adipiscing ligula in dui pretium ultrices.",
    },
    {
      hour: "10:14",
      title: "Nunc ultrices tortor eu massa placerat posuere.",
      info:
        "Proin vulputate mi pharetra tellus semper dapibus. Vestibulum non metus convallis, lobortis velit eu, facilisis mauris. Mauris mattis ante sit amet nulla egestas, ut consectetur tortor tristique. In porttitor non eros nec scelerisque. Sed eu condimentum tellus, et feugiat urna. Duis semper ligula a risus suscipit, ut vestibulum mi tempor.",
    },
    {
      hour: "11:23",
      title: "Morbi sodales tellus sit amet leo congue bibendum.",
      info:
        "Sed facilisis, erat at accumsan tincidunt, metus diam convallis tortor, at facilisis tortor libero sed ante. Sed ut felis sed felis scelerisque bibendum. Ut quis aliquet magna. Phasellus elementum volutpat mattis. Proin in rutrum ante, at imperdiet dolor. Vivamus congue turpis facilisis congue ullamcorper. Etiam sollicitudin quis dolor hendrerit ultricies.",
    },
    {
      hour: "11:45",
      title: "In pharetra suscipit orci sed viverra. Praesent at.",
      info:
        "Raesent aliquam sapien quis pretium vestibulum. Vestibulum varius velit leo, quis facilisis enim mattis id. Proin et tempor ligula, id dapibus neque. Aliquam egestas adipiscing tellus. Morbi enim leo, fringilla eget vulputate tincidunt, fringilla et sapien. Curabitur ultricies auctor lectus, quis ultricies sem tincidunt sit amet. Mauris non tempor ipsum. Sed sed ipsum nulla. Quisque laoreet velit dolor, nec placerat odio ullamcorper eget.",
    },
    {
      hour: "11:55",
      title: "Maecenas nec ligula sed est suscipit aliquet sed.",
      info:
        "Praesent ut eleifend lorem. Duis ut velit quis mauris molestie aliquam vitae id diam. Etiam eget mauris condimentum, lacinia lectus et, aliquet ligula. Nulla rutrum tincidunt tincidunt. Maecenas eu dolor vestibulum, pellentesque erat non, molestie nibh. Morbi ac semper quam. Aliquam erat volutpat.",
    },
    {
      hour: "12:00",
      title: "Onec bibendum consectetur diam, nec eui.",
      info:
        "Duis euismod, mi nec posuere malesuada, nisl leo bibendum ligula, sit amet vestibulum est neque non sapien. Curabitur mi massa, bibendum cursus scelerisque imperdiet, semper eu lacus. Etiam mauris eros, faucibus eu pretium vitae, rutrum vel urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin laoreet pellentesque felis, sed vulputate justo rhoncus et.",
    },
    {
      hour: "08:12",
      title: "Etiam imperdiet volutpat libero eu tristique.",
      info:
        "Cras sagittis nulla sit amet feugiat pulvinar. Fusce scelerisque aliquet purus, sit amet rutrum augue euismod ut. Aliquam erat volutpat. Integer convallis, ligula non bibendum dictum, ante lectus fringilla nunc, at euismod neque enim sit amet ante. In risus velit, porttitor blandit magna vel, adipiscing semper libero.",
    },
    {
      hour: "08:41",
      title: "Curabitur porttitor ante eget hendrerit adipi.",
      info:
        "Quisque imperdiet, tellus et tempus mattis, risus ipsum molestie leo, in tincidunt nisl nunc at magna. Suspendisse pretium ullamcorper feugiat. Nunc quis egestas odio, eu vestibulum nisl. In hac habitasse platea dictumst. Aliquam vel dapibus lacus. Curabitur pharetra quam purus. Suspendisse sed nulla condimentum nibh blandit consectetur non eget velit.",
    },
  ];
  const [currentItem, setCurrentItem] = useState(news[0]);

  return (
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
          <div key={i} style={{ marginTop: 0 }}>
            <i className="fa fa-fw state fa-play" />
            <span className="hour">{item.hour}</span> {item.title}
          </div>
        ))}
      </NewsTicker>
      <div id="nt-example2-infos-container" style={{ display: "block" }}>
        <div id="nt-example2-infos-triangle" />
        <div
          id="nt-example2-infos"
          className="row"
          onMouseEnter={() => ref.current.pause()}
          onMouseLeave={() => ref.current.unPause()}>
          <div className="col-4 centered">
            <div className="infos-hour">{currentItem.hour}</div>
            <i
              className="fa fa-arrow-left"
              id="nt-example2-prev"
              onClick={() => {
                ref.current.movePrev();
                ref.current.resetInterval();
              }}
            />
            <i
              className="fa fa-arrow-right"
              id="nt-example2-next"
              onClick={() => {
                ref.current.moveNext();
                ref.current.resetInterval();
              }}
            />
          </div>
          <div className="col-8">
            <div className="infos-text">{currentItem.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example2;
