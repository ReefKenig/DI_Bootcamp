import './App.css';
import UserFavoriteColors from './UserFavoriteColors';
import Exercise4 from './Exercise4';

function App() {
  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;
  const user = {
    first_name: 'Bob',
    last_name: 'Dylan',
    fav_animals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <div className="App">
      <h1>I do not use JSX</h1>
      {myelement}
      <h1>React is {sum} times better with JSX</h1>
      <h3>{user.first_name}</h3>
      <h3>{user.last_name}</h3>
      <UserFavoriteColors fav_animals={user.fav_animals} />
      <Exercise4 />
    </div>
  );
}

export default App;
