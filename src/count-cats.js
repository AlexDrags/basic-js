const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;
  for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];
    for (let index2 = 0; index2 < element.length; index2++) {
      const element2 = element[index2];
      if (element2 === "^^") counter += 1;
    }
  }
  return counter;
  // remove line with error and write your code here
}

module.exports = {
  countCats,
};
