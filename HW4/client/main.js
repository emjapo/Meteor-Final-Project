import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from '../imports/ui/AddTopics.js';


const renderPosts = function (passed_posts) {
  let formattedPosts = passed_posts.map(function(post){
    return (
    <p key={post._id}>{post.topic} have {post.votes} vote[s] {' '}
      <button onClick={() => {
        UP_Collection_Access.update({_id: post._id}, {$inc: {votes: 1}});
      }}>+1</button>
      <button onClick={() => {
        UP_Collection_Access.update({_id: post._id}, {$inc: {votes: -1}});
      }}>-1</button>
      <button onClick={() => {
        UP_Collection_Access.remove({_id: post._id});
      }}>X</button>
    </p>
    );
  });
  return formattedPosts;
};

const processFormDataFunction = function(event){
  event.preventDefault();
  let newTopic = event.target.topicFromForm.value;
  if(newTopic) {
    event.target.topicFromForm.value = '';
    UP_Collection_Access.insert({
      topic: newTopic,
      votes: 0,
    });
  }
};


Meteor.startup(function() {
  Tracker.autorun(function(){
    
    let title = "Fakebook";
    let moderator = "Emily";
    const allPostInDB = UP_Collection_Access.find().fetch();
    let jsx = (
      <div>
        <TitleBar title={title} moderator={moderator}/>
        <AddTopics />
        {renderPosts(allPostInDB)}
      </div>
    );

    ReactDom.render(jsx, document.getElementById("content"));
  });

});