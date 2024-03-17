import { API_ENDPOINT } from '$env/static/private';


export const load = async () => {
    const res = await fetch(`${API_ENDPOINT}/api/allnotulen`);
    const data = await res.json();

    return {
        data: data,
    };
};


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const formData = new FormData();
        formData.append('kode', data.get('kode'));
        formData.append('foto', data.get('foto'));

        if (data.get('method') === 'put') {
            const res = await fetch(`${API_ENDPOINT}/api/fotonotulen`, {
                method: 'PUT',
                body: formData
            });
            return res.json();
        } else {
            const res = await fetch(`${API_ENDPOINT}/api/notulen`, {
                method: 'DELETE',
                body: formData
            });
            return res.json();
        }
    }
};