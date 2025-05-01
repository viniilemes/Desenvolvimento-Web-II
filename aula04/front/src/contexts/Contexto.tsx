
// Arquivo App2.tsx
import Botao2 from "./components/Botao2";
import Placar2 from "./components/Placar2";
import { Provedor } from "./contexts/Contexto";

export default function App2x() {
  return (
    <>
      <Provedor>
        <Botao2 />
        <Placar2 />
      </Provedor>
      <Placar2 />
    </>
  );
}


// Arquivo components/Botao2.tsx
// Arquivo components/Placar.tsx

interface Props {
    quant: number;
}

export default function Placar(props:Props){
    return <h3>Quantidade: {props.quant}</h3>
}