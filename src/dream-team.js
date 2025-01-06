const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const newArr = [];

  if (members === undefined || members === null || !members.length)
    return false;

  for (let index = 0; index < members.length; index++) {
    const element = members[index];
    if (typeof element === "string")
      newArr.push(element.trim()[0].toUpperCase());
  }
  return newArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam,
};
