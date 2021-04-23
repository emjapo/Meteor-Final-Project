import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';


export default class AddTopics extends React.Component {
  
  processFormData(event){
    event.preventDefault();
    let newTopic = event.target.topicFromForm.value;
    if(newTopic) {
      event.target.topicFromForm.value = '';
      UP_Collection_Access.insert({
        createdAt: Date.now(),
        topic: newTopic,
        votes: 0,
      });
    };
  }


    render() {
      return (
        <div className="singleItemStyle">
          <form onSubmit={this.processFormData.bind(this)}>
            <input type="text" name="topicFromForm" placeholder="Topic Here" />
            <button className="button">Add Topic</button>
          </form>
        </div>
      );
    }
  };