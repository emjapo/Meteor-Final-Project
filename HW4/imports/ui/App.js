import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        return (
            <>
                <TitleBar title={this.props.passedPropTitle} moderator={this.props.passedPropMod}/>
                <div className='wrapper'>
                    <AddTopics />
                    <TopicList passed_posts={this.props.passedPropAllPosts}/>
                </div>
                <Footer />
            </>
        );
    }
};

App.propTypes = {
    passedPropTitle: PropTypes.string.isRequired,
    passedPropAllPosts: PropTypes.array.isRequired,
};