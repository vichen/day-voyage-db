module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreatePlans extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016042917274402;
    }

    up() {

      return [
        this.createTable("plans",
          [{"name":"user_id","type":"int"},
          // {"name":"activity_id","type":"int"},
          {"name":"title","type":"string"},
          {"name":"desc","type":"string"},
          {"name":"private","type":"boolean"},
          {"name":"likes","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("plans")
      ];

    }

  }

  return CreatePlans;

})();
