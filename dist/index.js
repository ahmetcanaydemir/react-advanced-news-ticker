"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TickerStates = exports.Directions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Directions = exports.Directions = Object.freeze({ UP: 1, DOWN: 2 });
var TickerStates = exports.TickerStates = Object.freeze({ Stopped: 0, Running: 1, Paused: 2 });

var NewsTicker = function (_Component) {
  _inherits(NewsTicker, _Component);

  function NewsTicker(props) {
    _classCallCheck(this, NewsTicker);

    var _this = _possibleConstructorReturn(this, (NewsTicker.__proto__ || Object.getPrototypeOf(NewsTicker)).call(this, props));

    _this.state = {
      speed: _this.props.speed,
      currState: 0,
      paused: 0,
      moving: 0,
      moveInterval: null,
      items: Array.isArray(_this.props.children) && _this.props.children || [_this.props.children]
    };

    _this.element = _react2.default.createRef();
    return _this;
  }

  _createClass(NewsTicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.init();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.moveInterval) clearInterval(this.state.moveInterval);
    }
  }, {
    key: "init",
    value: function init() {
      this.element.current.style.height = this.props.rowHeight * this.props.maxRows + "px";
      this.element.current.style.overflow = "hidden";
      this.checkSpeed();

      if (this.props.autoStart) this.start();
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      if (this.state.currState) return;

      this.setState(function (_, props) {
        return {
          currState: 1,
          items: Array.isArray(_this2.props.children) && _this2.props.children || [_this2.props.children]
        };
      }, function () {
        _this2.resetInterval();
        _this2.props.started();
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      var _this3 = this;

      if (!this.state.currState) return;

      clearInterval(this.state.moveInterval);
      this.setState({ currState: 0 }, function () {
        return _this3.props.stopped();
      });
    }
  }, {
    key: "resetInterval",
    value: function resetInterval() {
      var _this4 = this;

      if (!this.state.currState) return;
      clearInterval(this.state.moveInterval);
      this.setState({
        moveInterval: setInterval(function () {
          return _this4.move();
        }, this.props.duration)
      });
    }
  }, {
    key: "move",
    value: function move() {
      if (!this.state.paused) this.moveNext();
    }
  }, {
    key: "moveNext",
    value: function moveNext() {
      if (this.props.direction === Directions.DOWN) this.moveDown();else this.moveUp();
    }
  }, {
    key: "movePrev",
    value: function movePrev() {
      if (this.props.direction === Directions.DOWN) this.moveUp();else this.moveDown();
    }
  }, {
    key: "pause",
    value: function pause() {
      var _this5 = this;

      if (!this.state.paused) this.setState({ paused: 1 }, function () {
        return _this5.props.paused();
      });
    }
  }, {
    key: "unPause",
    value: function unPause() {
      var _this6 = this;

      if (this.state.paused) {
        this.setState({ paused: 0 }, function () {
          return _this6.props.unPaused();
        });
      }
    }
  }, {
    key: "_handleDownAnimation",
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(newList) {
        var _this7 = this;

        var firsLiEl, speed;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                firsLiEl = this.element.current.children[0];
                speed = this.props.speed;
                _context2.next = 4;
                return this.setState({ items: newList });

              case 4:
                // Hide first li element at up
                firsLiEl.style.cssText = "margin: -" + this.props.rowHeight + "px 0 0 0";

                // First element will go down in speed ms
                setTimeout(function () {
                  firsLiEl.style.cssText = "margin: 0;transition: margin " + speed + "ms;";
                }, 0);

                // Wait for speed ms and add last element to beginning of the list.
                _context2.next = 8;
                return new Promise(function (resolve) {
                  return setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            newList.pop();
                            _context.next = 3;
                            return _this7.setState({ items: newList });

                          case 3:

                            resolve();

                          case 4:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, _this7);
                  })), speed);
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _handleDownAnimation(_x) {
        return _ref.apply(this, arguments);
      }

      return _handleDownAnimation;
    }()
  }, {
    key: "moveDown",
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var itemsCopy;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.state.moving) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.next = 4;
                return this.setState({ moving: 1 });

              case 4:
                this.props.movingDown();

                itemsCopy = [].concat(_toConsumableArray(this.state.items));

                itemsCopy.unshift(itemsCopy[itemsCopy.length - 1]);

                _context3.next = 9;
                return this._handleDownAnimation(itemsCopy);

              case 9:
                _context3.next = 11;
                return this.setState({ moving: 0 });

              case 11:
                this.props.hasMoved();

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function moveDown() {
        return _ref3.apply(this, arguments);
      }

      return moveDown;
    }()
  }, {
    key: "_handleUpAnimation",
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(newList) {
        var _this8 = this;

        var firsLiEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                firsLiEl = this.element.current.children[0];
                _context5.next = 3;
                return this.setState({ items: newList });

              case 3:

                // First element will go up rowHeight px in speed ms
                setTimeout(function () {
                  return firsLiEl.style.cssText = "margin: -" + _this8.props.rowHeight + "px 0 0 0; transition: all " + _this8.props.speed + "ms;";
                }, 0);

                // Wait for speed ms and send first element to end of the list.
                // After that get first list element back to margin 0.
                _context5.next = 6;
                return new Promise(function (resolve) {
                  return setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            newList.shift();
                            _context4.next = 3;
                            return _this8.setState({ items: newList });

                          case 3:
                            firsLiEl.style.cssText = "margin: 0";
                            resolve();

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4, _this8);
                  })), _this8.props.speed);
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _handleUpAnimation(_x2) {
        return _ref4.apply(this, arguments);
      }

      return _handleUpAnimation;
    }()
  }, {
    key: "moveUp",
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var itemsCopy;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.state.moving) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return");

              case 2:
                _context6.next = 4;
                return this.setState({ moving: 1 });

              case 4:
                this.props.movingUp();

                itemsCopy = [].concat(_toConsumableArray(this.state.items));

                itemsCopy.push(itemsCopy[0]);

                _context6.next = 9;
                return this._handleUpAnimation(itemsCopy);

              case 9:
                _context6.next = 11;
                return this.setState({ moving: 0 });

              case 11:
                this.props.hasMoved();

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function moveUp() {
        return _ref6.apply(this, arguments);
      }

      return moveUp;
    }()
  }, {
    key: "getState",
    value: function getState() {
      if (this.state.paused) return TickerStates.Paused;else return this.state.currState ? TickerStates.Running : TickerStates.Stopped;
    }
  }, {
    key: "checkSpeed",
    value: function checkSpeed() {
      if (this.props.duration < this.state.speed + 25) this.setState(function (_, props) {
        return { speed: props.duration - 25 };
      });
    }
  }, {
    key: "prevButtonClick",
    value: function prevButtonClick() {
      this.movePrev();
      this.resetInterval();
    }
  }, {
    key: "nextButtonClick",
    value: function nextButtonClick() {
      this.moveNext();
      this.resetInterval();
    }
  }, {
    key: "startButtonClick",
    value: function startButtonClick() {
      this.start();
    }
  }, {
    key: "stopButtonClick",
    value: function stopButtonClick() {
      this.stop();
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      return _react2.default.createElement(
        "ul",
        {
          className: this.props.className,
          id: this.props.id,
          style: this.props.style,
          ref: this.element,
          onMouseEnter: function onMouseEnter() {
            _this9.props.pauseOnHover && _this9.state.currState && _this9.pause();
          },
          onMouseLeave: function onMouseLeave() {
            _this9.props.pauseOnHover && _this9.state.currState && _this9.unPause();
          } },
        this.state.items && this.state.items.map(function (item, index) {
          return _react2.default.createElement(
            "li",
            { key: index },
            item
          );
        })
      );
    }
  }]);

  return NewsTicker;
}(_react.Component);

NewsTicker.propTypes = {
  rowHeight: _propTypes2.default.number,
  maxRows: _propTypes2.default.number,
  children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]).isRequired,
  speed: _propTypes2.default.number,
  duration: _propTypes2.default.number,
  direction: _propTypes2.default.oneOf([Directions.UP, Directions.DOWN]),
  autoStart: _propTypes2.default.bool,
  pauseOnHover: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  style: _propTypes2.default.object,
  hasMoved: _propTypes2.default.func,
  movingUp: _propTypes2.default.func,
  movingDown: _propTypes2.default.func,
  started: _propTypes2.default.func,
  stopped: _propTypes2.default.func,
  paused: _propTypes2.default.func,
  unPaused: _propTypes2.default.func
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
  hasMoved: function hasMoved() {},
  movingUp: function movingUp() {},
  movingDown: function movingDown() {},
  started: function started() {},
  stopped: function stopped() {},
  paused: function paused() {},
  unPaused: function unPaused() {}
};
exports.default = NewsTicker;