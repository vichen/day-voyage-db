module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Activity = Nodal.require('app/models/activity.js');
  const User = Nodal.require('app/models/user.js');

  class Plan extends Nodal.Model {}

  Plan.setDatabase(Nodal.require('db/main.js'));
  Plan.setSchema(Nodal.my.Schema.models.Plan);

  Plan.joinsTo(Activity, {multiple:true});
  Plan.joinsTo(User, {multiple:true});

  return Plan;

})();
