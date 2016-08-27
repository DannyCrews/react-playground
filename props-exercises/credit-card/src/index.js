import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var cardData = {
  name: 'CARDHOLDER NAME',
  expiration: '08/19',
  ccNumber: '1234 5678 8765 4321',
  bankname: 'Big Bank, Inc.'
};

var CreditCard = React.createClass ({
  propTypes: {
    account: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      expiration: React.PropTypes.string.isRequired,
      ccNumber: React.PropTypes.string.isRequired,
      bankname: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function() {
    var { account } = this.props
    return (
      <div className="card">
        <Logo bankName={account.bankname}/>
        <AccountNumber acctNumber={account.ccNumber}/>
        <Name name={account.name}/>
        <Expiration expiration={account.expiration}/>
      </div>
    );
  }
});

var Logo = React.createClass ({
  propTypes: {
    bankName: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="logo">
        {this.props.bankName}
      </div>
    );
  }
});

var AccountNumber = React.createClass ({
  propTypes: {
    acctNumber: React.PropTypes.string.isRequired
  },
  render: function() {
    var acctNumber = this.props.acctNumber;
    var firstFour = acctNumber.slice(0, 4);

    return (
      <div className="acct-field">
        <div className="full-number">
          {acctNumber}
        </div>
        <div className="first-four">
          {firstFour}
        </div>
      </div>
    );
  }
});

var Name = React.createClass ({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="name">
        {this.props.name}
      </div>
    );
  }
});

var Expiration = React.createClass ({
  propTypes: {
    expiration: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div className="expiration">
        <span className="valid-thru">Valid Thru</span>
        {this.props.expiration}
      </div>
    );
  }
});

ReactDOM.render(
  <CreditCard account={cardData}/>,
  document.getElementById('root')
);


