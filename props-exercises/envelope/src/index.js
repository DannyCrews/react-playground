import React from 'react';
import ReactDOM from 'react-dom';

// AddressLabel component takes mailingLabel as props
// child component
var AddressLabel = React.createClass ({
  propTypes: {
    mailingLabel: React.PropTypes.shape({
                    name: React.PropTypes.string.isRequired,
                    addressLine1: React.PropTypes.string.isRequired,
                    addressLine2: React.PropTypes.string.isRequired
    }).isRequired
  },
  render: function() {
    var { name, addressLine1, addressLine2 } = this.props.mailingLabel; // destructure to pull object from props
    return (
      <div className='mailingLabel'>
        <div className='name'>{name}</div>
        <div className='addressLine1'>{addressLine1}</div>
        <div className='addressLine2'>{addressLine2}</div>
      </div>
    );
  }
});

// Envelope component takes toPerson and fromPerson as props
// parent component
var Envelope = React.createClass ({
  render: function() {
    var {toPerson, fromPerson} = this.props;
    // Return child components
    return (
      <div className='envelope'>
        <AddressLabel className='to-label' mailingLabel={toPerson} />
        <AddressLabel classname='from-label' mailingLabel={fromPerson} />
      </div>
    );
  }
});

var returnLabel = {
  name: 'Full Name',
  addressLine1: '123 Fake Street',
  addressLine2: 'Boston, MA 02118'
};

var recipientLabel = {
  name: 'Mrs. Receiver',
  addressLine1: '123 Fake Street',
  addressLine2: 'San Francisco, CA 94101'
};

// Render Envelope component passing in toPerson and fromPerson as props
// render Envelope which takes in props and, in turn, passes those props to
// AddressLabel component
ReactDOM.render(
  <Envelope toPerson={recipientLabel} fromPerson={returnLabel} />,
  document.getElementById('root')
);
