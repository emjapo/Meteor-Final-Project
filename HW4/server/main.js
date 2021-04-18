import {Meteor} from 'meteor/meteor';

import {UP_Collection_Access} from './../imports/api/user_posts.js';

Meteor.startup(function(){
  class Person {
    constructor(name = "anonymous", age = 0){
      this.name = name;
      this.age = age;
    }
    getPersonDescription(){
      return `${this.name} is ${this.age} years old`;
    }

  };

  let me = new Person("Emily", 21);
  console.log(me.getPersonDescription());


});