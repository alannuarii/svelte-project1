import { API_ENDPOINT } from '$env/static/private';
import { PUBLIC_API_ENDPOINT } from '$env/static/public'

export const load = async (params) => {
    const kode = params.params.notulen

    console.log(kode)
    const res = await fetch(`${API_ENDPOINT}/api/notulen/${kode}`);
    const data = await res.json();

    return {
        data: data,
        endpoint: PUBLIC_API_ENDPOINT
    };
};