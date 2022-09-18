const number = function (busStops) {
  let sum = [];
  busStops.forEach((n) => sum.push(n[0] - n[1]));
  return sum.reduce((acc, cur) => acc + cur);
};
