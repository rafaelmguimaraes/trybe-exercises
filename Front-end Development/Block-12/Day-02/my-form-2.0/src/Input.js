import React, { Component } from 'react';

class Input extends Component {

  render() {
    const { labelText, name, type, value, messageError ,handleChange, handleOnBlur, handleOnMouseEnter } = this.props;
    return (
      <label key="labelText">
        {labelText}
        <input 
          key={name}
          name={name}
          value={value}
          type={type}
          onChange={handleChange}
          onBlur={handleOnBlur}
          onMouseEnter={handleOnMouseEnter}
        />
        <span className="error">{messageError}</span>
      </label>
    );
  }
}

export default Input;