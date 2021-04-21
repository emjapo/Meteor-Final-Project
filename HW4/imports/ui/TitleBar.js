import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render() {
      return (
        <>
          <h1>{this.props.title}</h1>
          <h2>Moderator: {this.props.moderator}</h2>
        </>
      );
    }
  };

  TitleBar.propTypes = {
      title: PropTypes.string.isRequired,
      moderator: PropTypes.string.isRequired,
  };

 