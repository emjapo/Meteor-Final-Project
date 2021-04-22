import React from 'react';
import PropTypes from 'prop-types';
import RenderReply from './RenderReply.js';




export default class ReplyList extends React.Component {
    renderAllReplies(){
            return this.props.passed_replies.map((reply) => {
                return <RenderReply key={reply._id} reply={reply} />
            });
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