import React from 'react';
import {UP_Collection_Access} from './../api/user_posts.js';
import TitleBar from './TitleBar.js';
import AddTopics from './AddTopics.js';
import TopicList from './TopicList.js';
import Login from './Login.js';
import Footer from './Footer.js';
import PropTypes from 'prop-types';

export default class App extends React.Component {
    render() {
        if (!Meteor.user()) { // if I can get it deployed on GCP, then this ! will need to be removed to allow for Google login
            // Carroll labs do not allow students to install google-cloud-sdk so I can not upload to GCP
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
        } else {
            return (
                <>
                    <TitleBar title={this.props.passedPropTitle} />
                    <Login />
                </>
            );
        }
    }
};

App.propTypes = {
    passedPropTitle: PropTypes.string.isRequired,
    passedPropAllPosts: PropTypes.array.isRequired,
};