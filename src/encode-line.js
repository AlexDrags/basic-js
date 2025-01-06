const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let start = "";
  let counter = 0;
  let end = "";
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element === str[index + 1]) {
      counter += 1;
      start + element;
    } else {
      end = end + (counter === 0 ? "" : `${counter + 1}`) + `${element}`;
      counter = 0;
    }
  }
  return end;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine,
};
