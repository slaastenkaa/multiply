module.exports = function multiply(first, second) {
  let firstB = BigInt(first);
  let secondB = BigInt(second);
  let news = firstB * secondB;
  return news.toLocaleString();
};
