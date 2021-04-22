import React from 'react';
import {Reply_Collection_Access} from './../api/post_replies.js';
import PropTypes from 'prop-types';


export default class RenderReply extends React.Component {
    render() {
        return (
            <>
                <div key={this.props.reply._id} className='singleItemStyle'>{this.props.reply.topic} have {this.props.reply.votes} vote[s] {' '}
                    <button className="button button--round" onClick={() => {
                        Reply_Collection_Access.update({_id: this.props.reply._id}, {$inc: {votes: 1}});
                    }}>+1</button>
                    <button className="button button--round" onClick={() => {
                        Reply_Collection_Access.update({_id: this.props.reply._id}, {$inc: {votes: -1}});
                    }}>-1</button>
                    <button className="button button--round" onClick={() => {
                        Reply_Collection_Access.remove({_id: this.props.reply._id});
                    }}>X</button>
                </div>
            </>
        );
    }
};

RenderReply.propTypes = {
    reply: PropTypes.object.isRequired,
};