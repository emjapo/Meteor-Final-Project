import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import {Reply_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
import AddReplies from './AddReplies.js';
import ReplyList from './ReplyList.js';


export default class RenderPost extends React.Component {
    render() {
        let postID = this.props.post._id;
        let repliesForPostFromDB = Reply_Collection_Access.find({post: postID}, {sort: {votes: -1}}).fetch();
        return (
            <>
                <div key={this.props.post._id} className='singleItemStyle'>
                    {this.props.post.topic}
                    <div className="votesSystem">
                        {this.props.post.votes} vote[s] {' '}
                        <button className="button button--round" onClick={() => {
                            UP_Collection_Access.update({_id: this.props.post._id}, {$inc: {votes: 1}});
                        }}>+1</button>
                        <button className="button button--round" onClick={() => {
                            UP_Collection_Access.update({_id: this.props.post._id}, {$inc: {votes: -1}});
                        }}>-1</button>
                        <button className="button button--round" onClick={() => {
                            UP_Collection_Access.remove({_id: this.props.post._id});
                            repliesForPostFromDB.map((reply) => {
                                Reply_Collection_Access.remove({_id: reply._id});
                            });
                        }}>X</button>
                    </div>
                    <div className="singleItemStyle--replyList">
                        <ReplyList passed_replies={repliesForPostFromDB}/>
                        <AddReplies postID={this.props.post._id}/>
                    </div>
                </div>
               
            </>
        );
    }
};

RenderPost.propTypes = {
    post: PropTypes.object.isRequired,
};