import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './logo.svg'

var posterImage = image;
var posterTitle = 'ReacT';
var posterText = 'The best thing since jQuery, probably.'



var Poster = React.createClass ({
  render: function() {
    return (
      <div className='poster'>
        <div className='image'>
          <img src={this.props.image} alt='react' />
        </div>
        <div className='title'>
          {this.props.title}
        </div>
        <div className='text'>
          {this.props.text}
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Poster image={posterImage} title={posterTitle} text={posterText}/>,
  document.getElementById('root')
);
