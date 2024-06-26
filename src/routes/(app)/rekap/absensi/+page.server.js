import { API_ENDPOINT } from '$env/static/private';


export const load = async () => {
    const res = await fetch(`${API_ENDPOINT}/api/alldaftarhadir`);
    const data = await res.json();

    return {
        data: data,
    };
};