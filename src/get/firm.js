const faker = require("faker");
const { uniqueId } = require("./util");

const firm = () => ({
  firm_id: uniqueId(),
  firm_name: faker.company.companyName(),
  parent_firm_id: null,
  ein: faker.random.number(10000000),
  duns: faker.random.number(10000000),
  cage: faker.random.number(10000000),
  firm_type: 0,
  pin: faker.random.number(10000000),
  firm_json_data: null,
  created_by: null,
  created_date: faker.date.past(),
  updated_by: null,
  updated_date: faker.date.recent(),
  is_deleted: "N",
  is_novated: "N",
  is_merged: "N",
  duns2: null,
  phone: faker.phone.phoneNumber("##########"),
  phone_ext: null,
  fax: faker.phone.phoneNumber("##########"),
  website: faker.internet.url(),
  org_type_id: null,
});

module.exports = firm;
