const get = require("./get/index");

const columnsAndValuesFor = (obj) => ({
  columns: Object.keys(obj).join(", "),
  values: Object.keys(obj)
    .map((_, i) => `$${i + 1}`)
    .join(", "),
});

module.exports = {
  insertAddressObjectQuery: (() => {
    const address = get().addresses().pop();
    const { columns, values } = columnsAndValuesFor(address);
    return `INSERT INTO sbir_data.tbl_addresses (${columns}) VALUES (${values})`;
  })(),
  insertFirmQuery: (() => {
    const firm = get().firms().pop();
    const { columns, values } = columnsAndValuesFor(firm);
    return `INSERT INTO sbir_data.tbl_firms (${columns}) VALUES (${values})`;
  })(),
};
