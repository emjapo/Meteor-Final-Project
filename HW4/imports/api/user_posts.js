import {Mongo} from 'meteor/mongo';


export const UP_Collection_Access = new Mongo.Collection('user_posts_collection');
// might add rank here for the extra practice I guess ugh
export const Reply_Collection_Access = new Mongo.Collection('post_replies_collection');