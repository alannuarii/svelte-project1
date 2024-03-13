import { API_ENDPOINT } from '$env/static/private';


export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();

        const formData = new FormData();
        formData.append('kode', data.get('kode'))
        formData.append('tanggal', data.get('tanggal'))
        formData.append('tempat', data.get('tempat'))
        formData.append('waktu', data.get('waktu'))
        formData.append('agenda', data.get('agenda'))
        formData.append('dasar', data.get('dasar'))
        formData.append('notulis', data.get('notulis'))
        formData.append('foto', data.get('foto'))
        formData.append('namaPeg', data.get('namaPeg'))
        formData.append('namaOH', data.get('namaOH'))
        formData.append('namaCs', data.get('namaCs'))
        formData.append('namaSec', data.get('namaSec'))

        const arrDmn = []
        const arrStatus = []
        const arrTp = []
        const arrTh = []
        const arrK3kl = []
        const arrAdm = []
        const arrKegiatan = []
        const arrPic = []
        const arrTarget = []

        for (let i = 0; i < data.getAll('dmn').length; i++) {
            arrDmn.push(data.getAll('dmn')[i])
            arrStatus.push(data.getAll('status')[i])
        }
        for (const value of data.getAll('tp')) {
            arrTp.push(value)
        }
        for (const value of data.getAll('th')) {
            arrTh.push(value)
        }
        for (const value of data.getAll('k3kl')) {
            arrK3kl.push(value)
        }
        for (const value of data.getAll('adm')) {
            arrAdm.push(value)
        }

        for (let i = 0; i < data.getAll('kegiatan').length; i++) {
            arrKegiatan.push(data.getAll('kegiatan')[i])
            arrPic.push(data.getAll('pic')[i])
            arrTarget.push(data.getAll('target')[i])
        }
        formData.append('dmn', arrDmn)
        formData.append('status', arrStatus)
        formData.append('tp', arrTp)
        formData.append('th', arrTh)
        formData.append('k3kl', arrK3kl)
        formData.append('adm', arrAdm)
        formData.append('kegiatan', arrKegiatan)
        formData.append('pic', arrPic)
        formData.append('target', arrTarget)

        console.log(formData)


        const res = await fetch(`${API_ENDPOINT}/api/notulen`, {
            method: 'POST',
            body: formData
        });

        return res.json();
    }
};
