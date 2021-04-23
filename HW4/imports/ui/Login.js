import React from 'react';
import {Meteor} from 'meteor/meteor';
import Blaze from 'meteor/gadicc:blaze-react-component';

export default class Login extends React.Component{
    render() {
        return (
            <div>
                <h1>Login to FakeBook using Google</h1>
                <Blaze template="loginButtons" />
               
            </div>
        );
    }
};
  


