import React, { Component } from 'react';

class InputSelect extends Component {

  render() {
    const { labelText, name, value, handleChange, options, messageError } = this.props;
    return (
      <label>
        {labelText}
        <select name={name} value={value} onChange={handleChange}>
          <option value="" >Selecione</option>
          {options.map((estado) => <option key={estado.sigla}>{estado.nome}</option>)}
        </select>
        <span className="error">{messageError}</span>
      </label>
    );
  }
}

export default InputSelect;