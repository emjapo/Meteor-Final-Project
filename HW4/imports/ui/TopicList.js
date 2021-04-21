import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
import RenderPost from './RenderPost.js';



export default class TopicList extends React.Component {
    renderAllPosts(){
        if (this.props.passed_posts.length === 0) {
            return (
                <div className='singleItemStyle'>
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
                {this.renderAllPosts()}
            </>
        );
    }

};

TopicList.propTypes = {
    passed_posts: PropTypes.array.isRequired,
};