import { useState } from "react";
import "./App.css";
import CounterClass from "./features/counter/CounterClass";
import CounterFn from "./features/counter/CounterFn";
import UserList from "./features/users/UsersList";
import usersSlice from "./features/users/usersSlice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App container">
        <UserList />
      </div>
    </>
  );
}

export default App;