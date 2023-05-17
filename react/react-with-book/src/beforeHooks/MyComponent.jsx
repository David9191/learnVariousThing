import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const MyComponent = ({ name, favoriteNumber, children }) => {
//   return (
//     <div>
//       Hi, My name is {name}.
//       <br />
//       children is {children}.<br />
//       My favoriteNumber is {favoriteNumber}
//     </div>
//   );
// };

class MyComponent extends Component {
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        Hi, My name is {name}. <br />
        children is {children}. <br />
        My favoriteNumber is {favoriteNumber}
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: 'Default Name',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
