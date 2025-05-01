import React from "react";
import Exercise1 from "./Exercise1";
import Exercise2 from "./Exercise2";
import "../styles/App.css";
const App: React.FC = () => {
  return (
    <div className="container-1">
      <div className="container-2">
        <h1 className="title-1">Exercício 1</h1>
        <Exercise1 />
      </div>
     
      <div className="container-2">
        <h1 className="title-2">Exercício 2</h1>
        <Exercise2 />
      </div>
    </div>
  );
};

export default App;
