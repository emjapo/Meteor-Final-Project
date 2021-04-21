import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import PropTypes from 'prop-types';
import RenderPost from './RenderPost.js';



export default class TopicList extends React.Component {
    renderAllPosts(){
        return this.props.passed_posts.map((post) => {
            return <RenderPost key={post._id} post={post} />
          });
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