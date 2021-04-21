import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from '../imports/ui/AddTopics.js';
import RenderPost from '../imports/ui/RenderPost.js';



const renderPosts = function (passed_posts) {
  let formattedPosts = passed_posts.map(function(post){
    return <RenderPost key={post._id} post={post} />
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