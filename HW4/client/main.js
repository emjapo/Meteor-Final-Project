import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {UP_Collection_Access} from './../imports/api/user_posts.js';
import TitleBar from './../imports/ui/TitleBar.js';
import AddTopics from './../imports/ui/AddTopics.js';
import TopicList from './../imports/ui/TopicList.js';


Meteor.startup(function() {
  Tracker.autorun(function(){
    
    let title = "Fakebook";
    let moderator = "Emily";
    const allPostInDB = UP_Collection_Access.find().fetch();
    let jsx = (
      <div>
        <TitleBar title={title} moderator={moderator}/>
        <AddTopics />
        <TopicList passed_posts={allPostInDB}/>
      </div>
    );

    ReactDom.render(jsx, document.getElementById("content"));
  });

});