const faker = require("faker");
const { smallint, uniqueId } = require("./util");

const address = () => ({
  address_id: uniqueId(),
  street: faker.address.streetAddress(),
  city: faker.address.city(),
  state_name: faker.address.state(),
  country: "United States of America",
  zip: faker.address.zipCode("#####"),
  zip4: faker.address.zipCode("####"),
  created_by: "",
  created_date: faker.date.past(),
  updated_by: "",
  updated_date: faker.date.recent(),
  is_deleted: "N",
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
  title: "",
  mail_code: faker.address.zipCode(),
  state_code: smallint(),
  country_code: smallint(),
  is_active: "Y",
});

module.exports = address;
