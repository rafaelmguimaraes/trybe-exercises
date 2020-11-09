import React, { Component } from 'react';

import './App.css';
import Pokedex from './Pokedex';
// import pokemons from './data';
import ApiPokedex from 'pokedex-promise-v2';


class App extends  Component {
  state = {
    pokemons: [],
    next: '',
    previous: null,
    page: 1,
  }

  componentDidMount() {
    this.loadPokemons();
  }

  loadPokemons = (offsetNumber = 0, pageNumber = 1) => {
    const options = {
      protocol: 'https',
      hostName: 'pokeapi.co:443',
      versionPath: '/api/v2/',
      cacheLimit: 100 * 1000, // 100s
      timeout: 5 * 1000 // 5s
    }

    const P = new ApiPokedex(options);
    const interval = {
      limit: 9,
      offset: offsetNumber,
    }
    console.log('offsetNumber: ',offsetNumber);
    const dataPokemons = [];
    
    P.getPokemonsList(interval)
    .then(response => { response.results.forEach(pokeObj => 
      P.getPokemonByName(pokeObj.name)
        .then(responsePoke => {
          const newPokeData = {
            id: responsePoke.id,
            name: responsePoke.name,
            type: responsePoke.types[0].type.name,
            averageWeight: {
                value: responsePoke.weight,
                measurementUnit: "kg"
            },
            image: responsePoke.sprites.other['official-artwork'].front_default,
            moreInfo: ''
          };
          dataPokemons.push(newPokeData);
          this.setState({ pokemons: dataPokemons, next: response.next, previous: response.previous, page: pageNumber });  
        })
    );
    console.log(response);
    });
  };

  prevPage = () => {
    const { page, previous } = this.state;

    if (!previous) return;
    
    const pageNumber = page - 1;

    const param = "offset";
    const regex = new RegExp("[?&]" + param + "=([^&]+).*$");
    const returnVal = previous.match(regex);
    const offsetNumber = parseInt(returnVal[1]) + 1;

    this.loadPokemons(offsetNumber, pageNumber);
  }

  nextPage = () => {
    const { page, next } = this.state;

    if (!next) return;
    
    const pageNumber = page + 1;

    const param = "offset";
    const regex = new RegExp("[?&]" + param + "=([^&]+).*$");
    const returnVal = next.match(regex);
    const offsetNumber = parseInt(returnVal[1]) + 1;
    
    this.loadPokemons(offsetNumber, pageNumber);
  }

  render() {
    return ( 
      <div className="pokedex">
        <div className="title-container">
          <h1> Pokedex </h1>
        </div>
        <Pokedex pokemons={ this.state.pokemons } />
        <div className="actions">
          <button onClick={this.prevPage}>Anterior</button>
          <span> Page {this.state.page} of 105 </span>
          <button onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  };
};

export default App;
