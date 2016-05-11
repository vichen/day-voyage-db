module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateUsers extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016042917164505;
    }

    up() {

      return [
        this.createTable("users",
          [
            {
              "name":"email",
              "type":"string",
              "properties":
                {"unique":true}
            },
            {
              "name":"username",
              "type":"string",
              "properties":
                {"unique":true}
            },
            {
              "name":"password",w
              "type":"string"
            }
          ])
      ];

    }

    down() {

      return [
        this.dropTable("users")
      ];

    }

  }

  return CreateUsers;

})();
