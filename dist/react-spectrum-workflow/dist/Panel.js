/**
* @adobe/react-spectrum-workflow (c) by Adobe
* 
* @adobe/react-spectrum-workflow is licensed under a
* Creative Commons Attribution-NoDerivatives 4.0 International License.
* 
* You should have received a copy of the license along with this
* work. If not, see <http://creativecommons.org/licenses/by-nd/4.0/>.
**/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.A4uPanel = A4uPanel;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function A4uPanel(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement("svg", _extends({
    viewBox: "0 0 36 36"
  }, props, props), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "3",
    rx: "1",
    ry: "1",
    width: "16",
    x: "10",
    y: "30"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "3",
    rx: "1",
    ry: "1",
    width: "16",
    x: "10",
    y: "8"
  }), /*#__PURE__*/_react["default"].createElement("rect", {
    fillRule: "evenodd",
    height: "3",
    rx: "1",
    ry: "1",
    width: "16",
    x: "10",
    y: "14"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M30.5,2H5.5A1.5,1.5,0,0,0,4,3.5V34H6V26H30v8h2V3.5A1.5,1.5,0,0,0,30.5,2ZM30,22H6V4H30Z"
  }));
}