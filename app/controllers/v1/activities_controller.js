module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Activity = Nodal.require('app/models/activity.js');
  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1ActivitiesController extends AuthController {

    index() {

      Activity.query()
        .join('user','plan')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Activity.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      this.authorize((accessToken, user) => {


        this.params.body.user_id = user.get('id');

        Activity.create(this.params.body, (err, model) => {

          this.respond(err || model);

        });

      })


    }

    update() {

      Activity.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Activity.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1ActivitiesController;

})();
