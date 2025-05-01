import { createContext, CSSProperties, useContext, useState } from "react";

export default function App() {
  return (
    <SourceProvider>
      <div>
        <Button label="A" />
        <Button label="B" />
        <Button label="C" />
        <Button label="D" />
      </div>
      <List />
    </SourceProvider>
  );
}

interface ButtonProps {
  label: string;
}

interface ContextProps {
  sources: string[];
  add: (value: string) => void;
}

interface ChildrenProps {
  children: React.ReactNode;
}

const SourceContext = createContext<ContextProps | null>(null);

function SourceProvider({ children }: ChildrenProps) {
  const [sources, setSources] = useState<string[]>([]);

  function add(value: string) {
    setSources((prev) => [...prev, value]);
  }

  return (
    <SourceContext.Provider value={{ sources, add }}>
      {children}
    </SourceContext.Provider>
  );
}

function useSourceContext() {
  const context = useContext(SourceContext);
  if (!context) {
    throw new Error(
      "useSourceContext deve ser usado dentro de um SourceProvider"
    );
  }
  return context;
}

function Button({ label }: ButtonProps) {
  const { add } = useSourceContext();

  return (
    <button style={buttonStyle} onClick={() => add(label)}>
      {label}
    </button>
  );
}

function List() {
  const { sources } = useSourceContext();

  return (
    <ol>
      {sources.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
}

const buttonStyle: CSSProperties = {
  backgroundColor: "#567196",
  color: "white",
  padding: "10px 20px",
  marginRight: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};