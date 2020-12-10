import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputTodo from './InputTodo';
import Item from './Item';
import { updAssignment, fltAssignment, undAssignment } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.flt(value);
  }

  render() {
    const { list: listTodo, searchText } = this.props;
    return (
      <div className="App">
        <InputTodo />
        <input type="radio" id="filterAll" name="filter" value="" checked={searchText === ''} onChange={(e) => this.handleChange(e.target.value) } />
        <label htmlFor="filterAll">Todas</label>
        <input type="radio" id="filterOnlyDone" name="filter" value="done" checked={searchText === 'done'} onChange={(e) => this.handleChange(e.target.value) } />
        <label htmlFor="filterOnlyDone">Somente Concluídas</label>
        <input type="radio" id="filterOnlyTodo" name="filter" value="todo" checked={searchText === 'todo'} onChange={(e) => this.handleChange(e.target.value) } />
        <label htmlFor="filterOnlyTodo">Somente Em Andamento</label>
        <button
          type="button"
          onClick={() => this.props.und() }
        > 
          Desfazer Última Ação
        </button>
        {listTodo &&
          <ul>
            {
              listTodo.map(({text, done}, index) => (
                <li
                  key={index + 1}
                  onDoubleClick={ () => this.props.upd({ text, done: !done }) }
                  style={ done ? { textDecoration: 'line-through' } : { textDecoration: 'none' } } 
                >
                  <Item content={text} />
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { tasklist, searchText } = state.listReducer;
  if (searchText && tasklist.length) {
    const done = searchText === 'done' ? true : false; 
    return {
      list: tasklist.filter((item) => item.done === done),
      searchText
    };
  }
  return {
    list: [...tasklist],
    searchText
  };
};

const mapDispatchToProps = dispatch => ({
  upd: e => dispatch(updAssignment(e)),
  flt: e => dispatch(fltAssignment(e)),
  und: () => dispatch(undAssignment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
