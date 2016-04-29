module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Plan = Nodal.require('app/models/plan.js');
  const AuthController = Nodal.require('app/controllers/auth_controller.js');

  class V1PlansController extends AuthController {

    index() {

      Plan.query()
        .join('user','activity')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Plan.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      this.authorize((accessToken, user) => {

        this.params.body.user_id = user.get('id');

        Plan.create(this.params.body, (err, model) => {

          this.respond(err || model);

        });
        
      })


    }

    update() {

      Plan.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Plan.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1PlansController;

})();
