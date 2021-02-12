require("dotenv").config();

const pg = require("pg");
const get = require("./get/index");
const { uniqueId } = require("./get/util");
const { insertAddressObjectQuery, insertFirmQuery } = require("./queries");

const { Client } = pg;
const db = new Client(process.env.DATABASE_URL);

const main = async () => {
  const addresses = get(10).addresses();
  const firms = get(10).firms();

  await db.connect();

  const addressQueries = addresses.map((address) =>
    db.query(insertAddressObjectQuery, Object.values(address))
  );

  const firmQueries = firms.map((firm) =>
    db.query(insertFirmQuery, Object.values(firm))
  );

  try {
    await Promise.all([...addressQueries, ...firmQueries]);

    const objectQuery = `INSERT INTO sbir_data.tbl_address_objects (address_object_id,address_id,object_id) VALUES($1,$2,$3)`;
    await Promise.all(
      addresses.map(({ address_id: id }) =>
        db.query(objectQuery, [
          uniqueId(),
          id,
          firms[Math.floor(Math.random() * firms.length)].firm_id,
        ])
      )
    );
  } finally {
    db.end();
  }
};

main();
