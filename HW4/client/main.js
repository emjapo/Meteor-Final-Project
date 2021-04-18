import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';

const renderPosts = function (passed_posts) {
  console.log(passed_posts);
  let formattedPosts = passed_posts.map(function(post){
    return <p key={post._id}>{post.topic} have {post.votes} vote[s]</p>
  });
  return formattedPosts;
};

Meteor.startup(function() {
  let title = "Fake Facebook";
  // let jsx = (
  //   <div>
  //     <h1>{title}</h1>
  //     {renderPosts(posts)}
  //   </div>
  // )

});