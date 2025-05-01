import { useEffect, useState } from "react";
import { getEstados } from "../services/ibge";
import { Estado } from "../types";

interface Props {
    regiaoId: number;
    onClick: (estadoId: number) => void;
}

export default function Estados({ regiaoId, onClick }: Props) {
    const [estados, setEstados] = useState<Estado[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getEstados(regiaoId);
            setEstados(data);
        }
        fetchData();
    }, [regiaoId]);

    return (
        <ul>
            {estados.map((estado) => (
                <li key={estado.id} onClick={() => onClick(estado.id)}>
                    {estado.nome}
                </li>
            ))}
        </ul>
    );
}
