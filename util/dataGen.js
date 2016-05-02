module.exports = (function() {

  'use strict';

  const Nodal = require('Nodal');

  const mockUserInfo = Nodal.require('mockData/mockUsers');
  // let mockUserInfo = require('./mockData/mockUsers.js');
  // console.log(mockUserInfo);

  const mockActivities = Nodal.require('mockData/mockActivities');
  // console.log(mockActivities);

  let activitiesPluckFromYelp = [];
  let activitySchema = ['plan_id', 'user_id', 'user_gen', 'private', 'desc', 'lat', 'long', 'address', 'city', 'state', 'neighborhood', 'title', 'duration'];
  let bool = [true, false];

  class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }

/**
 * generate mock users
 * @param  {int} n number of users to generate
 * @param  {string}  [optional] a user generated password
 * @return {array}  of user objects
 */
  var genUsers = (n, password) => {
    password = password || '11111';
    n = n > mockUserInfo.usernames.length ? mockUserInfo.usernames.length : n;
    let usernames = mockUserInfo.usernames.slice(0, n);
    let users = usernames.map((username, i) => {
      let name = mockUserInfo.names[i];
      let email = `${name.toLowerCase()}@gmail.com`;
      return new User(username, email, password);
    });
    return JSON.stringify(users);
  };
  var mockUsers = genUsers(10);
  // console.log(mockUsers);

  // TODO: automate writing the users into the db.json for seed

  class Activity {
    constructor(plan_id, user_id, user_gen, priv, duration) {
        this.plan_id = plan_id;
        this.user_id = user_id;
        this.user_gen = user_gen;
        this.private = priv;
        this.duration = duration;
    }
  }

  var transformYelpActivities = (arr) => {
    return arr.map((activity) => {
      let transformed = Object.create(null);

      // transformed.yelpRating = activity.rating;
      transformed.title = activity.name;
      transformed.category = activity.categories[0];
      transformed.desc = activity.snippet_text;
      transformed.lat = activity.location.coordinate.latitude;
      transformed.long = activity.location.coordinate.longitude;
      transformed.address = activity.location.address[0];
      transformed.city = activity.location.city;
      transformed.state = activity.location.state_code;
      transformed.neighborhood = activity.location.neighborhoods;
      // TODO: cannot figure out how to pull a single item from neighborhood array, will have to be handled on client side


      return transformed;
    });
  };

  var transformedFromYelp = transformYelpActivities(mockActivities);

  var genActivities = (activities) => {
    return JSON.stringify(activities.map((activity) => {
      var userId = Math.ceil(Math.random() * 10);
      let mockActivity = new Activity(null, userId, bool[Math.round(Math.random())], bool[Math.round(Math.random())], 90);
      Object.assign(mockActivity, activity);
      return mockActivity;
    }));
  };

  console.log(genActivities(transformedFromYelp));

})();
