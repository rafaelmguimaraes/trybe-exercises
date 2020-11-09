import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './pokedex.css'
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokemon-container">
        { pokemons.map( pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
      </div>
    );
  }

  static defaultProps = {
    title: 'Pokedex',
  }

}

Pokedex.propTypes = {
  title: PropTypes.string,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default Pokedex;