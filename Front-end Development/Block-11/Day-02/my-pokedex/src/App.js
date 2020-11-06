import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <Pokedex title="Pokedex" pokemons={ pokemons } />
  );
}

export default App;
