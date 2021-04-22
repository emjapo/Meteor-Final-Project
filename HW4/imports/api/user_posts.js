import {Mongo} from 'meteor/mongo';


export const UP_Collection_Access = new Mongo.Collection('user_posts_collection');

export const Reply_Collection_Access = new Mongo.Collection('post_replies_collection');