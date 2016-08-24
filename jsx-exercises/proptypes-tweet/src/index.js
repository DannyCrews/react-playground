import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

var testTweet = {
  message: "Something about cats",
  gravatar: "43779d56f7a7db8ed9b5b1856d9073f4",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 2,
  retweets: 5,
  timestamp: "2016-07-30 21:24:37"
};

var Tweet = React.createClass({
  propTypes: {
    tweet: React.PropTypes.shape ({
      message: React.PropTypes.string.isRequired,
      gravatar: React.PropTypes.string.isRequired,
      author: React.PropTypes.object.isRequired,
      likes: React.PropTypes.number,
      retweets: React.PropTypes.number,
      timestamp: React.PropTypes.string.isRequired
    })
  },
  render: function() {
    var {tweet} = this.props;
    return(
      <div className="tweet">
        <Avatar hash={tweet.gravatar}/>
        <div className="content">
          <NameWithHandle author={tweet.author}/>
          <Time time={tweet.timestamp}/>
          <Message text={tweet.message}/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton/>
          </div>
         </div>
      </div>
    );
  }
});

var Avatar = React.createClass({
  propTypes: {
    hash: React.PropTypes.string.isRequired
  },
  render: function() {
    var hash=this.props.hash;
    var url=`https://www.gravatar.com/avatar/${hash}`;
    return (
      <img src={url}
      className="avatar"
      alt="avatar" />
    );
  }
});

var Message = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function() {
    return(
      <div className="message">
        {this.props.text}
      </div>
    );
  }
});

var NameWithHandle = React.createClass({
  propTypes: {
    author: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      handle: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function() {
    var { handle, name } = this.props.author;
    return(
      <span className="name-with-handle">
        <span className="name">{name}</span>
        <span className="handle">@{handle}</span>
      </span>
    );
  }
});

var Time = React.createClass({
  propTypes: {
    time: React.PropTypes.string.isRequired
  },
  computeTimeString: function() {
    return moment(this.props.time).fromNow();
  },
  render: function() {
    return (
      <span className="time">
        {this.computeTimeString()}
      </span>
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
  propTypes: {
    count: React.PropTypes.number
  },
  getCount: function() {
    if(this.props.count > 0) {
      return (
        <span className="retweet-count">
          {this.props.count}
        </span>
      );
    } else {
      return null;
    }
  },
  render: function() {
    return (
      <span className="retweet-button">
        <i className="fa fa-retweet" />
        {this.getCount()}
      </span>
    );
  }
});

var LikeButton = React.createClass({
  // Check that count is a number
  propTypes: {
    count: React.PropTypes.number
  },
  render: function() {
    var {count} = this.props;
    return (
      <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 ?
          <span className="like-count">{count}</span>
         : null}
      </span>
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

ReactDOM.render(<Tweet tweet={testTweet}/>,
  document.querySelector('#root'));
