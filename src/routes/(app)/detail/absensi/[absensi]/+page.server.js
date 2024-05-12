import { API_ENDPOINT } from '$env/static/private';

export const load = async (params) => {
    const kode = params.params.absensi

    const res = await fetch(`${API_ENDPOINT}/api/daftarhadir/${kode}`);
    const data = await res.json();

    return {
        data: data
    };
};