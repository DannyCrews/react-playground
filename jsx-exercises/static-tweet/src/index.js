import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var Tweet = React.createClass({
  render: function() {
    return(
      <div className="tweet">
        <Avatar/>
        <div className="content">
          <NameWithHandle/>
          <Message/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
          </div>
         </div>
      </div>
    );
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <img src="https://www.gravatar.com/avatar/43779d56f7a7db8ed9b5b1856d9073f4"
      className="avatar"
      alt="avatar" />
    );
  }
});

var Message = React.createClass({
  render: function() {
    return(
      <div className="message">
        This is less than 140 characters.
      </div>
    );
  }
});

var NameWithHandle = React.createClass({
  render: function() {
    return(
      <span className="name-with-handle">
        <span className="name">Your Name</span>
        <span className="handle">@yourhandle</span>
      </span>
    );
  }
});

var Time = React.createClass({
  render: function() {
    return (
      <span className="time">3h ago</span>
    );
  }
});

var ReplyButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-reply reply-button"/>
    );
  }
});

var RetweetButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-retweet retweet-button"/>
    );
  }
});

var LikeButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-heart like-button"/>
  );
  }
});

var MoreOptionsButton = React.createClass({
  render: function() {
    return (
      <i className="fa fa-ellipsis-h more-options-button"/>
    );
  }
});

ReactDOM.render(<Tweet/>,
  document.querySelector('#root'));
