let orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burger", ["burger_name", "devoured"], [name, false], cb);
  },
  update: function(id, cb) {
    let condition = "id=" + id;
    orm.update(
      "burger",
      {
        devoured: true
      },
      condition,
      cb
    );
  }
};

module.exports = burger;
