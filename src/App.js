import React from "react";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";

import "./App.css";

function App() {
  return (
    <div>
      <AddToDo />
      <ToDos />
    </div>
  );
}

export default App;
