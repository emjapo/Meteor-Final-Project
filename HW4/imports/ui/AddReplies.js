import React from 'react';
import {Reply_Collection_Access} from './../api/user_posts';


export default class AddReplies extends React.Component {
  
  processFormData(event){
    event.preventDefault();
    let newReply = event.target.ReplyFromForm.value;
    let postID = event.target.postID.value;
    if(newReply) {
      event.target.ReplyFromForm.value = '';
      Reply_Collection_Access.insert({
        post: postID,
        message: newReply,
        votes: 0,
      });
    };
  }


    render() {
      return (
        <div className="singleItemStyle singleItemStyle--reply">
          <form onSubmit={this.processFormData.bind(this)}>
              <input type="hidden" name="postID" value={this.props.postID} />
            <input type="text" name="ReplyFromForm" placeholder="Leave a comment" />
            <button className="button">Post</button>
          </form>
        </div>
      );
    }
  };