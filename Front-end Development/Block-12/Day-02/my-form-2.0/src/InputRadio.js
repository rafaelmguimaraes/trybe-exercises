import React, { Component } from 'react';

class InputRadio extends Component {
  
  render() {
    const { labelText, children, messageError } = this.props;
    return (
      <span>
        {labelText}
        {
          React.Children.map(children, child => {
            return (
              <label for={child.key}>
                {child}
                {child.props.value}
              </label>
            );
          })
        }
        <span className="error">{messageError}</span>
      </span>
    );
  }
}

export default InputRadio;