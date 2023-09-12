var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/getTimeString.ts
var getTimeString_exports = {};
__export(getTimeString_exports, {
  buildTimeString: () => buildTimeString
});
module.exports = __toCommonJS(getTimeString_exports);
function buildTimeString(displayTime, showHour) {
  const h = Math.floor(displayTime / 3600);
  const m = Math.floor(displayTime / 60 % 60);
  const time = Math.floor(displayTime % 60);
  let s = time.toString();
  if (time < 10) {
    s = `0${s}`;
  }
  let text = `${m}:${s}`;
  if (showHour) {
    if (m < 10) {
      text = `0${text}`;
    }
    text = `${h}:${text}`;
  }
  return text;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  buildTimeString
});
