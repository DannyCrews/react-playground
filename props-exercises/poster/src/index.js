import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './logo.svg'

var posterImage = image;
var posterTitle = 'ReacT';
var posterText = 'The best thing since jQuery, probably.'



var Poster = React.createClass ({
  propTypes: {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
  },
  render: function() {
    var title = this.props.title;
    return (
      <div className='poster'>
        <div className='image-container'>
          <img src={this.props.image} alt='react' />
        </div>
        <div className='title'>
          <span className="first-letter">
            {title.substring(0,1)}
          </span>
          <span className="center">
            {title.substring(1, title.length - 1)}
          </span>
          <span className="last-letter">
            {title.substring(title.length - 1)}
          </span>
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
