const smallint = () => Math.floor(Math.random() * 32768);

const uniqueId = (() => {
  const ids = new Set();

  return () => {
    let id = smallint();
    while (ids.has(id)) {
      id = smallint();
    }
    ids.add(id);
    return id;
  };
})();

module.exports = { smallint, uniqueId };
