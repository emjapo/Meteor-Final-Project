import React from 'react';
import PropTypes from 'prop-types';
import RenderPost from './RenderReply.js';



export default class ReplyList extends React.Component {
    renderAllReplies(){
        if (this.props.passed_replies.length === 0) {
            return (
                <div className='singleItemStyle singleItemStyle--comment'>
                    <p>Leave a comment</p>
                </div>
            );
        } else {
            return this.props.passed_posts.map((reply) => {
                return <RenderReply key={reply._id} reply={reply} />
            });
        }
    }

    render(){
        return (
            <>
                {this.renderAllReplies()}
            </>
        );
    }

};

ReplyList.propTypes = {
    passed_replies: PropTypes.array.isRequired,
};