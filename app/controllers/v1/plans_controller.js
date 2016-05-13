module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Plan = Nodal.require('app/models/plan.js');
  const AuthController = Nodal.require('app/controllers/auth_controller.js');
  const Activity = Nodal.require('app/models/activity.js')

  class V1PlansController extends AuthController {

    index() {

      console.log('<><><> insided index');

      Plan.query()
        .join('user','activity')
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      console.log('<><><> inside show');

      Plan.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    // create() {

    //   console.log('<><><> inside create');
    //   this.authorize((accessToken, user) => {

    //     this.params.body.user_id = user.get('id');

    //     Plan.create(this.params.body, (err, model) => {

    //       this.respond(err || model);

    //     });

    //   })


    // }

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

    post() {
      console.log('inside post <><><><>');

      this.authorize((accessToken, user) => {

        this.params.body.user_id = user.get('id');

        let activities = this.params.body.activities;

        delete this.params.body.activities;

        Plan.create(this.params.body, (err, model) => {

          let updatedActivities = activities.map((activity, i) => {
            console.log('>>>>>>>>>>model is', model);
            return Activity
              .query({id: activity.activity_id})
              .update({plan_id: model.get('id')}, (err, activity) => {
                if (err) {console.log('error:', err)}
                // console.log('activity updated!:', activity);
              });
          });
          // console.log(updatedActivities);
          model = Object.assign(model, {activities: updatedActivities});
          this.respond(err || model);

          // if plan created, then update activities

        });
      });
      // take activities from body
      // take update activities

    }
  }

  return V1PlansController;

})();
