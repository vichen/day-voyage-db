module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const bcrypt = require('bcrypt-node');

  class User extends Nodal.Model {

    beforeSave(callback) {

      if (!this.hasErrors() && this.hasChanged('password')) {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            console.log(`error salting password app/controllers/v1/models/users.js: ${err}`);
            return callback(new Error('Error salting password'));
          }
          bcrypt.hash(this.get('password'), salt, null, (err, hash) => {

            if (err) {
              return callback(new Error('Could not encrypt password'));
            }

            this.__safeSet__('password', hash);
            callback();

          });
        })

      } else {

        callback();

      }

    }

    verifyPassword(unencrypted, callback) {

      bcrypt.compare(unencrypted, this.get('password'), (err, result) => {
        callback.call(this, err, result);
      });

    }

  }

  User.setDatabase(Nodal.require('db/main.js'));
  User.setSchema(Nodal.my.Schema.models.User);

  User.validates('email', 'must be valid', v => v && (v + '').match(/.+@.+\.\w+/i));
  User.validates('password', 'must be at least 5 characters in length', v => v && v.length >= 5);

  return User;

})();
