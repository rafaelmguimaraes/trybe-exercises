import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokemon.css'

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div  className="pokemon">
        <div className="pokeInfo">
          <h3> { pokemon.name } </h3>
          <p>{ pokemon.type }</p>
          <p>{ pokemon.averageWeight.value } { pokemon.averageWeight.measurementUnit }</p>
        </div>
        <div className="pokeImg">
          <img src={ pokemon.image } alt={ pokemon.name }/>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        value: PropTypes.number,
        measurementUnit: PropTypes.string
      }),
      image: PropTypes.string,
  }).isRequired,
};


export default Pokemon;