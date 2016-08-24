import React from 'react';
import ReactDOM from 'react-dom';

var ComponentName = React.createClass({
  render: function() {
    return (
      <div className="book">
        <div className="title">{'"Quoted string"'}</div>
        <div className="author">The Author</div>
        <ul className="stats">
          <li className="rating">5 stars</li>
          <li className="isbn">12-345678-910</li>
        </ul>
      </div>
    );
  }
});
//
// var ComponentName = React.createClass({
//   render: function() {
//     return (
//       React.createElement('div', {className: 'book'},
//         React.createElement('div', {className: 'title'}, 'The Title'),
//         React.createElement('div', {className: 'author'}, 'The Author'),
//         React.createElement('ul', {className: 'stats'},
//           React.createElement('li', {className: 'rating'}, '5 stars'),
//           React.createElement('li', {className: 'isbn'}, '12-345678-910')
//         )
//       )
//     );
//   }
// });

ReactDOM.render(
  <ComponentName/>,
  document.getElementById('root')
);

// var LoginIndicator = React.createClass({
//   render: function() {
//     // var username = "root";
//     // var username = undefined;
//     // var username = null;
//     var username = false;

//     return(
//       <div>{username ? `Hello, ${username}` : 'Not logged in'}</div>
//     );
//   }
// });

// ReactDOM.render(
//   <LoginIndicator/>,
//   document.getElementById('root')
// );
