// src/utils/get-percentage.ts
function getPercentage(time, total, PRECISION = 3) {
  return Math.round(time / total * 100 * 10 ** PRECISION) / 10 ** PRECISION;
}

export {
  getPercentage
};
