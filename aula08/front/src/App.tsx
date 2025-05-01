// Arquivo App.tsx
import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Botao count={count} setCount={setCount} />
      <Placar quant={count} />
    </>
  );
}

// Arquivo components/Botao.tsx
interface Props {
    count: number;
    setCount: (value:number) => void;
}

export default function Botao(props:Props) {
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>
        Incrementar
      </button>
    </>
  );
}

// Arquivo components/Placar.tsx

interface Props {
    quant: number;
}

export default function Placar(props:Props){
    return <h3>Quantidade: {props.quant}</h3>
}