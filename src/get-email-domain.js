const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  for (let index = 0; index < email.split("").reverse().length; index++) {
    const element = email.split("").reverse()[index];
    if (element === "@")
      return email.split("").reverse().slice(0, index).reverse().join("");
  }
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain,
};
