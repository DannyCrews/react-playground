import React from 'react';
import ReactDOM from 'react-dom';


// var Comment = React.createClass ({
//   propTypes: {
//     message: React.PropTypes.string.isRequired,
//     author: React.PropTypes.string.isRequired,
//     likes: React.PropTypes.number
//   },
//   render: function() {
//     return (
//       <div>
//         <div className='author'>{this.props.author}</div>
//         <div className='message'>{this.props.message}</div>
//         <div className='likes'>
//           {this.props.likes > 0 ? this.props.likes : 'No'} likes
//         </div>
//       </div>
//     );
//   }
// });

// ReactDOM.render(
//   //<Comment author='somebody' message='a likeable message' likes={1} />,
//   //<Comment author='mr_unpopular' message='unlikeable message'/>,
//   // <Comment author='mr_unpopular' message='another message' likes={0} />,
//   // <Comment author='error_missing_message' />,
//   // <Comment message='mystery author' />,
//   // <Comment author='an_error' />,
//   <Comment author={42} />,
//   document.getElementById('root')
// );


var CustomTest = React.createClass({
  propTypes: {
    myCustomProp: function(props, propName, componentName) {
      // here, propName === "myCustomProp"
      if (props[propName].length !== 3) {
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Length is not 3.'
        );
      }
    }
  },
  render: function() {
    return (
      <div>test</div>
    );
  }
});

// This will produce a warning:
ReactDOM.render(
  <CustomTest myCustomProp='not_three_letters'/>,
  document.getElementById('root')
);
// This will work:
// ReactDOM.render(
//   <CustomTest myCustomProp={[1, 2, 3]}/>,
//   document.getElementById('root')
// );
// This will also work:
// ReactDOM.render(
//   <CustomTest myCustomProp="abc"/>,
//   document.getElementById('root')
// );
