import { useState } from "react"; // Removido useEffect

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Idade</label>
        <input id="age" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>Nome: {name}</div>
      <div>Idade: {age}</div>
    </>
  );
}
