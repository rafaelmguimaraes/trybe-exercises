import React from 'react';

const task = (value) => {
  return (
    <li key={{value}}>{value}</li>
  );
}

const myTasks = ['Do Something!', 'Do Exercises', 'Watch Movie', 'Eat Salad', 'Drink Water'];

function App() {
  return (
    <ul>
      {myTasks.map(myTask => task(myTask))}
    </ul>
  );
}

export default App;
