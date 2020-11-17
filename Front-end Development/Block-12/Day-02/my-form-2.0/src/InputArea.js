import React, { Component } from 'react';

class InputArea extends Component {

  render() {
    const { labelText, name, value, handleChange, messageError } = this.props;
    return (
      <label key="labelText">
        {labelText}
        <textarea 
          key={name}
          name={name}
          value={value}
          onChange={handleChange}
        />
        <span className="error">{messageError}</span>
      </label>
    );
  }
}

export default InputArea;