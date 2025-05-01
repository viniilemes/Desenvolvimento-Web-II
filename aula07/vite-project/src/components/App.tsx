import { useState } from "react";
import Regioes from "../components/Regioes";
import Estados from "../components/Estados";
import Mesorregioes from "../components/Mesorregioes";

export default function App() {
    const [selectedRegiao, setSelectedRegiao] = useState<number | null>(null);
    const [selectedEstado, setSelectedEstado] = useState<number | null>(null);

    return (
        <div>
            {!selectedRegiao && (
                <Regioes onClick={(id: number) => setSelectedRegiao(id)} />
            )}
            {selectedRegiao && !selectedEstado && (
                <Estados
                    regiaoId={selectedRegiao}
                    onClick={(id: number) => setSelectedEstado(id)}
                />
            )}
            {selectedEstado && <Mesorregioes estadoId={selectedEstado} />}
        </div>
    );
}
