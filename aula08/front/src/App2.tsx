// VERSÃO COM CONTEXTO

import List from "./components/List";
import { ProviderCar } from "./contexts/CtxCar";
import Form from "./Form";

// Arquivo App2.tsx


export default function App2() {
  return (
    <>
    <ProviderCar>
      <Form />
      <List />
    </ProviderCar>
    </>
  );
}

