module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Activity = Nodal.require('app/models/activity.js');
  const User = Nodal.require('app/models/user.js');
  const Plan = Nodal.require('app/models/comment.js');

  class Comment extends Nodal.Model {}

  Comment.setDatabase(Nodal.require('db/main.js'));
  Comment.setSchema(Nodal.my.Schema.models.Comment);

  Comment.joinTo(User, {multiple:true});
  Comment.joinTo(Activity, {multiple:true});
  Comment.joinTo(Plan, {multiple:true});

  return Comment;

})();
