import React from 'react';
import {Reply_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';


export default class RenderReply extends React.Component {
    render() {
        return (
            <>
                <div key={this.props.reply._id} className='singleItemStyle singleItemStyle--reply'>
                    {this.props.reply.message}
                    <div className="votesSystem">
                        {this.props.reply.votes} vote[s] {' '}
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
                </div>
            </>
        );
    }
};

RenderReply.propTypes = {
    reply: PropTypes.object.isRequired,
};