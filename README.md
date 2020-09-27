<h1 align="center">React Advanced News Ticker</h1>

![alt text](public/gif.gif "React Advanced News Ticker Gif")

<p>
  <a href="https://www.npmjs.com/package/react-advanced-news-ticker" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/react-advanced-news-ticker.svg">
  </a>
  <a href="https://ahmetcanaydemir.github.io/react-advanced-news-ticker" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/ahmetcanaydemir/react-advanced-news-ticker/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/ahmetcanaydemir/react-advanced-news-ticker/blob/master/LICENSE" target="_blank">
    <img alt="License: GPL--2.0" src="https://img.shields.io/github/license/ahmetcanaydemir/react-advanced-news-ticker" />
  </a>
  <a href="https://twitter.com/ahmetcnaydemir" target="_blank">
    <img alt="Twitter: ahmetcnaydemir" src="https://img.shields.io/twitter/follow/ahmetcnaydemir.svg?style=social" />
  </a>
</p>

> A powerful, flexible and animated vertical news ticker plugin for React. React Advanced News Ticker provides multiple callbacks and methods to allow a maximum flexibility and an easy implementation into any project.

### 🏠 [Demo](https://ahmetcanaydemir.github.io/react-advanced-news-ticker)

## ⚡️ Quickstart

```JSX
<NewsTicker>
  <div>Etiam imperdiet volutpat libero eu tristique.</div>
  <div>Curabitur porttitor ante eget hendrerit adipiscing.</div>
  <div>Praesent ornare nisl lorem, ut condimentum lectus gravida ut.</div>
  <div>Nunc ultrices tortor eu massa placerat posuere.</div>
</NewsTicker>
```

## ⚙️ Installation

```sh
npm i react-advanced-news-ticker
```

## 👀 Examples

#### 📖 With Custom Props

```JSX
<NewsTicker
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
</NewsTicker>
```

#### 📖 With Callbacks

```JSX
const updateInfos = () => {
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
</NewsTicker>
```

#### 📖 With Methods

```JSX
const newsTickerRef = useRef(null);
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
</>
```

## 📇 Props

| Prop           | Usage                                                                                     | Type/Values                          | Default value    |
| -------------- | ----------------------------------------------------------------------------------------- | ------------------------------------ | ---------------- |
| `rowHeight`    | defines the height (in px) of one row                                                     | `int`                                | _22_             |
| `maxRows`      | defines the number of rows displayed at the same time                                     | `int`                                | _3_              |
| `speed`        | defines the animation speed (in ms)of the rows moving up or down                          | `int` _(in ms)_                      | _400_            |
| `duration`     | defines the times (in ms) before the rows automatically move                              | `int` _(in ms)_                      | _2500_           |
| `direction`    | defines the direction of the rows movement                                                | `Directions.UP` _or_ `Directions.DOWN` | _Directions.UP_ |
| `autoStart`    | enable/disable auto start on load                                                         | `bool`                               | _true_           |
| `pauseOnHover` | enable/disable pause when mouse hovers the newsTicker element                             | `bool`                               | _true_           |
| `className`    | for define className of newsTicker's ul element                                           | `bool`                               | _true_           |
| `id`           | for define id of newsTicker's ul element                                                  | `bool`                               | _""_             |
| `style`        | for styling newsTicker's ul element                                                       | `object`                             | _{}_             |
| `hasMoved`     | `callback` called at the end of every movement animation                                  | `function`                           |
| `movingUp`     | `callback` called before launching `moving up` action                                     | `function`                           |
| `movingDown`   | `callback` called before launching `moving down` action                                   | `function`                           |
| `start`        | `callback` called on `start` action                                                       | `function`                           |
| `stop`         | `callback` called on `stop` action                                                        | `function`                           |
| `pause`        | `callback` called on `pause` action (triggered on `onMouseEnter` if `pauseOnHover=true `) | `function`                           |
| `unpause`      | called on `unpause` action (triggered on `onMouseLeave` if `pauseOnHover=true `)          | `function`                           |

## 📇 Methods

After creating NewsTicker component with ref, methods are called with `ref.current.methodName()`

Example :

```javascript
ref.current.stop();
ref.current.start();
ref.current.move();
ref.current.getState();
ref.current.pause();
```

#### 📜 Method List

| Method     | Action                                                                                                                                                                            |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `start`    | starts moving newsTicker elements                                                                                                                                                 |
| `stop`     | stops moving newsTicker elements                                                                                                                                                  |
| `getState` | returns current state: `TickerStates.Stopped` = stopped, `TickerStates.Running` = started, `TickerStates.Paused` = paused (and started)                                           |
| `pause`    | pauses newsTicker elements without stopping them - the newsTicker has to be started to be able to pause it (the `pause` method is called on `onMouseEnter` if `pauseOnHover` = true) |
| `unpause`  | unpauses newsTicker elements - the newsTicker has to be started & paused to be able to unpause it (the `unpause` method is called on `onMouseLeave` if `pauseOnHover` = true)     |
| `moveDown` | moves elements down                                                                                                                                                               |
| `moveUp`   | moves elements up                                                                                                                                                                 |
| `moveNext` | moves up or down according to the current `direction` option                                                                                                                      |
| `movePrev` | moves up or down according to the current `direction` option                                                                                                                      |
| `move`     | equivalent to `moveNext`, but will not move if `paused`                                                                                                                           |

## Author

👤 **Ahmet Can Aydemir**

- Website: https://www.ahmetcanaydemir.com
- Twitter: [@ahmetcnaydemir](https://twitter.com/ahmetcnaydemir)
- Github: [@ahmetcanaydemir](https://github.com/ahmetcanaydemir)
- LinkedIn: [@ahmetcanaydemir](https://linkedin.com/in/ahmetcanaydemir)

## 👍 Contribute

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ahmetcanaydemir/react-advanced-news-ticker/issues).

## 📝 License

This project based on [risq](https://github.com/risq)'s [JQuery Advanced News Ticker](https://github.com/risq/jquery-advanced-news-ticker).<br />
This project is [GPL-2.0](https://github.com/ahmetcanaydemir/react-advanced-news-ticker/blob/master/LICENSE) licensed.
