import React, { Component } from "react";

import PropTypes from "prop-types";
export const Directions = Object.freeze({ UP: 1, DOWN: 2 });
export const TickerStates = Object.freeze({ Stopped: 0, Running: 1, Paused: 2 });

class NewsTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: this.props.speed,
      currState: 0,
      paused: 0,
      moving: 0,
      moveInterval: null,
      items: (Array.isArray(this.props.children) && this.props.children) || [this.props.children],
    };

    this.element = React.createRef();
  }
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    if (this.state.moveInterval) clearInterval(this.state.moveInterval);
  }

  init() {
    this.element.current.style.height = `${this.props.rowHeight * this.props.maxRows}px`;
    this.element.current.style.overflow = `hidden`;
    this.checkSpeed();

    if (this.props.autoStart) this.start();
  }

  start() {
    if (this.state.currState) return;

    this.setState(
      (_, props) => ({
        currState: 1,
        items: (Array.isArray(this.props.children) && this.props.children) || [this.props.children],
      }),
      () => {
        this.resetInterval();
        this.props.started();
      }
    );
  }
  stop() {
    if (!this.state.currState) return;

    clearInterval(this.state.moveInterval);
    this.setState({ currState: 0 }, () => this.props.stopped());
  }

  resetInterval() {
    if (!this.state.currState) return;
    clearInterval(this.state.moveInterval);
    this.setState({
      moveInterval: setInterval(() => this.move(), this.props.duration),
    });
  }
  move() {
    if (!this.state.paused) this.moveNext();
  }
  moveNext() {
    if (this.props.direction === Directions.DOWN) this.moveDown();
    else this.moveUp();
  }
  movePrev() {
    if (this.props.direction === Directions.DOWN) this.moveUp();
    else this.moveDown();
  }
  pause() {
    if (!this.state.paused) this.setState({ paused: 1 }, () => this.props.paused());
  }
  unPause() {
    if (this.state.paused) {
      this.setState({ paused: 0 }, () => this.props.unPaused());
    }
  }

  async _handleDownAnimation(newList) {
    const firsLiEl = this.element.current.children[0];
    const speed = this.props.speed;

    await this.setState({ items: newList });
    // Hide first li element at up
    firsLiEl.style.cssText = `margin: -${this.props.rowHeight}px 0 0 0`;

    // First element will go down in speed ms
    setTimeout(() => {
      firsLiEl.style.cssText = `margin: 0;transition: margin ${speed}ms;`;
    }, 0);

    // Wait for speed ms and add last element to beginning of the list.
    await new Promise((resolve) =>
      setTimeout(async () => {
        newList.pop();
        await this.setState({ items: newList });

        resolve();
      }, speed)
    );
  }

  async moveDown() {
    if (this.state.moving) return;

    await this.setState({ moving: 1 });
    this.props.movingDown();

    const itemsCopy = [...this.state.items];
    itemsCopy.unshift(itemsCopy[itemsCopy.length - 1]);

    await this._handleDownAnimation(itemsCopy);

    await this.setState({ moving: 0 });
    this.props.hasMoved();
  }

  async _handleUpAnimation(newList) {
    const firsLiEl = this.element.current.children[0];
    await this.setState({ items: newList });

    // First element will go up rowHeight px in speed ms
    setTimeout(
      () =>
        (firsLiEl.style.cssText = `margin: -${this.props.rowHeight}px 0 0 0; transition: all ${this.props.speed}ms;`),
      0
    );

    // Wait for speed ms and send first element to end of the list.
    // After that get first list element back to margin 0.
    await new Promise((resolve) =>
      setTimeout(async () => {
        newList.shift();
        await this.setState({ items: newList });
        firsLiEl.style.cssText = "margin: 0";
        resolve();
      }, this.props.speed)
    );
  }

  async moveUp() {
    if (this.state.moving) return;

    await this.setState({ moving: 1 });
    this.props.movingUp();

    const itemsCopy = [...this.state.items];
    itemsCopy.push(itemsCopy[0]);

    await this._handleUpAnimation(itemsCopy);

    await this.setState({ moving: 0 });
    this.props.hasMoved();
  }

  getState() {
    if (this.state.paused) return TickerStates.Paused;
    else return this.state.currState ? TickerStates.Running : TickerStates.Stopped;
  }

  checkSpeed() {
    if (this.props.duration < this.state.speed + 25) this.setState((_, props) => ({ speed: props.duration - 25 }));
  }

  prevButtonClick() {
    this.movePrev();
    this.resetInterval();
  }

  nextButtonClick() {
    this.moveNext();
    this.resetInterval();
  }

  startButtonClick() {
    this.start();
  }

  stopButtonClick() {
    this.stop();
  }

  render() {
    return (
      <ul
        className={this.props.className}
        id={this.props.id}
        style={this.props.style}
        ref={this.element}
        onMouseEnter={() => {
          this.props.pauseOnHover && this.state.currState && this.pause();
        }}
        onMouseLeave={() => {
          this.props.pauseOnHover && this.state.currState && this.unPause();
        }}>
        {this.state.items && this.state.items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    );
  }
}

NewsTicker.propTypes = {
  rowHeight: PropTypes.number,
  maxRows: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  speed: PropTypes.number,
  duration: PropTypes.number,
  direction: PropTypes.oneOf([Directions.UP, Directions.DOWN]),
  autoStart: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  hasMoved: PropTypes.func,
  movingUp: PropTypes.func,
  movingDown: PropTypes.func,
  started: PropTypes.func,
  stopped: PropTypes.func,
  paused: PropTypes.func,
  unPaused: PropTypes.func,
};
NewsTicker.defaultProps = {
  rowHeight: 22,
  children: [],
  maxRows: 3,
  speed: 400,
  duration: 2500,
  direction: Directions.UP,
  autoStart: true,
  pauseOnHover: true,
  className: "",
  style: {},
  id: "",
  hasMoved: function () {},
  movingUp: function () {},
  movingDown: function () {},
  started: function () {},
  stopped: function () {},
  paused: function () {},
  unPaused: function () {},
};
export default NewsTicker;
