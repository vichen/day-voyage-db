module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Plan = Nodal.require('app/models/plan.js');
  const User = Nodal.require('app/models/user.js');

  class Activity extends Nodal.Model {}

  Activity.setDatabase(Nodal.require('db/main.js'));
  Activity.setSchema(Nodal.my.Schema.models.Activity);

  // Activity.joinsTo(Plan, {multiple:true});
  // Activity.joinsTo(User, {multiple:true});

  return Activity;

})();
