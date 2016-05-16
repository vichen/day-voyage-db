module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Comment = Nodal.require('app/models/comment.js');

  class V1CommentsController extends Nodal.Controller {

    index() {

      Comment.query()
        .where(this.params.query)
        .join('user')
        .orderBy('created_at', 'DESC')
        .end((err, models) => {

          this.respond(err || models, ['id', 'content','created_at', 'user_id', 'activity_id', 'plan_id', {user: ['id', 'username', 'created_at']}]);

        });

    }

    show() {

      Comment.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Comment.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Comment.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Comment.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1CommentsController;

})();
