import { useEffect, useState } from "react";
import { getRegioes } from "../services/ibge";
import { Regiao } from "../types";

interface Props {
    onClick: (regiaoId: number) => void;
}

export default function Regioes({ onClick }: Props) {
    const [regioes, setRegioes] = useState<Regiao[]>([]);

    useEffect(() => {
        async function fetchData() {
            const data = await getRegioes();
            setRegioes(data);
        }
        fetchData();
    }, []);

    return (
        <ul>
            {regioes.map((regiao) => (
                <li key={regiao.id} onClick={() => onClick(regiao.id)}>
                    {regiao.nome}
                </li>
            ))}
        </ul>
    );
}
