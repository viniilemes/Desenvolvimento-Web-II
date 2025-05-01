import { useContext } from "react"; 
import { CtxCar } from "../contexts/CtxCar";

export default function List(){
    const {cars} = useContext(CtxCar);

    return <ol>
        {cars.map((item,index) => <li key={index}>{item.model} - {item.color}</li>)}
    </ol>
}
// Compare this snippet from src/App.tsx:
// // Arquivo App.tsx
// import { ProviderCar } from "./contexts/CtxCar";
// import Form from "./components/Form";
// import List from "./components/List";