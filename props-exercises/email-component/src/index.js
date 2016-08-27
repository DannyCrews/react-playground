import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



var MailItem = React.createClass({
  propTypes: {
    email: React.PropTypes.shape({
      sender: React.PropTypes.string.isRequired,
      subject: React.PropTypes.string.isRequired,
      date: React.PropTypes.string.isRequired,
      message: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function() {
    var {sender, subject, date, message} = this.props.email;
    return (
      <div className="email">
        <input type="checkbox"/>
        <i className="fa fa-thumb-tack pin"/>
        <div className="content">
          <div className="line1">
            <div className="sender">{sender}</div>
            <div className="subject">{subject}</div>
            <div className="date">{date}</div>
          </div>
          <div className="message">{message}</div>
        </div>
      </div>
    );
  }
});

var emailData = {
  sender: "React NewsLetter",
  subject: "React NewsLetter - Issue 36",
  date: "Jul 15, 2014",
  message: "This is the message"
};

ReactDOM.render(
  <MailItem email={emailData} />,
  document.getElementById('root')
);
