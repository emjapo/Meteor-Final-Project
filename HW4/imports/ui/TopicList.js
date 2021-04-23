import React from 'react';
import PropTypes from 'prop-types';
import RenderPost from './RenderPost.js';
import FlipMove from 'react-flip-move';



export default class TopicList extends React.Component {
    renderAllPosts(){
        if (this.props.passed_posts.length === 0) {
            return (
                <div className='singleItemStyle singleItemStyle--comment'>
                    <p>Add a new topic to get started!</p>
                </div>
            );
        } else {
            return this.props.passed_posts.map((post) => {
                return <RenderPost key={post._id} post={post} />
            });
        }
    }

    render(){
        return (
            <>
                <FlipMove delay={500} maintainContainerHeight={true}  enterAnimation='fade'>
                    {this.renderAllPosts()}
                </FlipMove>
            </>
        );
    }

};

TopicList.propTypes = {
    passed_posts: PropTypes.array.isRequired,
};