import "./App.css";
import User from "./components/User";

function App() {
  const users = [
    { id: 1, name: "Mari", email: "omari@gmail.com" },
    { id: 2, name: "Sunny", email: "sun@something.com" },
    { id: 3, name: "Basil", email: "sun@flower.com" },
  ];

  return (
    <div className="App">
      {users.map((item, index) => {
        return <User userdata={item} key={item.id} />;
      })}
    </div>
  );
}

export default App;
