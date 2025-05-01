import api from "./api";

export async function getRegioes() {
    const { data } = await api.get("regioes");
    return data;
}

export async function getEstados(regiaoId: number) {
    const { data } = await api.get(`regioes/${regiaoId}/estados`);
    return data;
}

export async function getMesorregioes(estadoId: number) {
    const { data } = await api.get(`estados/${estadoId}/mesorregioes`);
    return data;
}