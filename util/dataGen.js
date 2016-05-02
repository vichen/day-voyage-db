module.exports = (function() {

  'use strict';

  const Nodal = require('Nodal');

  const mockUserInfo = new Nodal.require('mockData/mockUsers.js');
  // let mockUserInfo = require('./mockData/mockUsers.js');
  console.log(mockUserInfo);

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
    return JSON.stringify(users)};
  var mockUsers = genUsers(10);
  // console.log(mockUsers);

  // TODO: automate writing the users into the db.json for seed

  var genActivities = (n) => {

  };
})();
