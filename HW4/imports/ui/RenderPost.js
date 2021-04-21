import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';


export default class RenderPost extends React.Component {
    render() {
        return (
            <>
                <p key={this.props.post._id}>{this.props.post.topic} have {this.props.post.votes} vote[s] {' '}
                    <button onClick={() => {
                        UP_Collection_Access.update({_id: this.props.post._id}, {$inc: {votes: 1}});
                    }}>+1</button>
                    <button onClick={() => {
                        UP_Collection_Access.update({_id: this.props.post._id}, {$inc: {votes: -1}});
                    }}>-1</button>
                    <button onClick={() => {
                        UP_Collection_Access.remove({_id: this.props.post._id});
                    }}>X</button>
                </p>
            </>
        );
    }
};

RenderPost.propTypes = {
    post: PropTypes.object.isRequired,
};