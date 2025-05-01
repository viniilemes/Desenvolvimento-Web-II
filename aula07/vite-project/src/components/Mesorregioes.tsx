import { useEffect, useState } from "react";
import { getMesorregioes } from "../services/ibge";
import { Mesorregiao } from "../types";

interface Props {
    estadoId: number;
}

export default function Mesorregioes({ estadoId }: Props) {
    const [mesorregioes, setMesorregioes] = useState<Mesorregiao[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getMesorregioes(estadoId);
            setMesorregioes(data);
        }
        fetchData();
    }, [estadoId]);

    return (
        <ul>
            {mesorregioes.map((mesorregiao) => (
                <li key={mesorregiao.id}>{mesorregiao.nome}</li>
            ))}
        </ul>
    );
}
