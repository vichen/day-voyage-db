module.export = (function() {

  'use strict';

  class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }

  var usernames = [
    'happy_sad',
    'haveahappyday',
    'SomethingNew',
    '5mileys',
    'takes2long',
    'w8t4u',
    'askme',
    'Bidwell',
    'massdebater',
    'iluvmen',
    'yomatey',
    'idontknow',
    'likme',
    'TurtleCat',
    'BlogWobbles',
    'LuckyDusty',
    'RumChicken',
    'StonedTime',
    'HackySacky',
    'VillageIdiots'
  ];

  var names = [
    'Emma',
    'Noah',
    'Olivia',
    'Liam',
    'Sophia',
    'Mason',
    'Isabella',
    'Jacob',
    'Ava',
    'William',
    'Mia',
    'Ethan',
    'Emily',
    'Michael',
    'Abigail',
    'Alexander',
    'Madison',
    'James',
    'Charlotte',
    'Daniel'
    ];

/**
 * generate mock users
 * @param  {int} n number of users to generate
 * @param  {string}  [optional] a user generated password
 * @return {array}  of user objects
 */
  var genUsers = (n, password) => {
    password = password || '11111';
    n = n > usernames.length ? usernames.length : n;
    let usernamesCopy = usernames.slice(0, n);
    let users = usernamesCopy.map((username, i) => {
      let name = names[i];
      let email = `${name.toLowerCase()}@gmail.com`;
      return new User(username, email, password);
    });
    return JSON.stringify(users)};
  var mockUsers = genUsers(10);
  console.log(mockUsers);

  var genActivities = (n) => {

  };
})();
