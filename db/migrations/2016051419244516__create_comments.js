module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateComments extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016051419244516;
    }

    up() {

      return [
        this.createTable("comments", [{"name":"user_id","type":"int"},{"name":"activity_id","type":"int"},{"name":"plan_id","type":"int"},{"name":"content","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("comments")
      ];

    }

  }

  return CreateComments;

})();
