module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class Comment extends Nodal.Model {}

  Comment.setDatabase(Nodal.require('db/main.js'));
  Comment.setSchema(Nodal.my.Schema.models.Comment);

  Comment.joinsTo(User, {multiple: true});

  return Comment;

})();
