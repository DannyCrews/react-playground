import React from 'react';
import ReactDOM from 'react-dom';

var returnLabel = {
  name: 'Full Name',
  addressLine1: '123 Fake Street',
  addressLine2: 'Boston, MA 02118'
};


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

ReactDOM.render(
  <AddressLabel mailingLabel={returnLabel}/>,
  document.getElementById('root')
);
