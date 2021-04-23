import React from 'react';
import PropTypes from 'prop-types';
import RenderReply from './RenderReply.js';
import FlipMove from 'react-flip-move';




export default class ReplyList extends React.Component {
    renderAllReplies(){
            return this.props.passed_replies.map((reply) => {
                return <RenderReply key={reply._id} reply={reply} />
            });
    }

    render(){
        return (
            <>
                <FlipMove delay={200} maintainContainerHeight={true} leaveAnimation='accordianVertical' enterAnimation='fade'>
                    {this.renderAllReplies()}
                </FlipMove>
            </>
        );
    }

};

ReplyList.propTypes = {
    passed_replies: PropTypes.array.isRequired,
};