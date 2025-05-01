import { createContext, useContext, useState } from "react";

export default function App() {
  return (
    <UserProvider>
      <Form />
      <List />
    </UserProvider>
  );
}

interface ContextProps {
  users: User[];
  add: (user: User) => void;
}

interface User {
  name: string;
  age: string;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const UserContext = createContext<ContextProps | null>(null);

function UserProvider({ children }: ChildrenProps) {
  const [users, setUsers] = useState<User[]>([]);

  function add(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  return (
    <UserContext.Provider value={{ users, add }}>
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext deve ser usado dentro de um UserProvider");
  }
  return context;
}

function Form() {
  const { add } = useUserContext();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div>
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
      <div>
        <button onClick={() => add({ name, age })}>Salvar</button>
      </div>
    </div>
  );
}

function List() {
  const { users } = useUserContext();

  return (
    <ol>
      {users.map((item, index) => (
        <li key={index}>
          {item.name} - {item.age}
        </li>
      ))}
    </ol>
  );
}