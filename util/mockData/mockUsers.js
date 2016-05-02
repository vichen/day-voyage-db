module.exports = (function() {

  'use strict';
/**
 * Use data for generation of mock users. Generatrors located in util/dataGen.js
 */


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

  // var userInfo = new mockUserData(usernames, names);

  return {
    usernames: usernames,
    names: names
  };
})();
