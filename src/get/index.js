const address = require("./address.js");
const firm = require("./firm");

const get = (count = 1) => ({
  addresses() {
    return [...Array(count)].map(address);
  },
  firms() {
    return [...Array(count)].map(firm);
  },
});

module.exports = get;
