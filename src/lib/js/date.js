export const formatTanggal = (tanggal) => {
	const dd = String(tanggal.getDate()).padStart(2, '0');
	const mm = String(tanggal.getMonth() + 1).padStart(2, '0');
	const yyyy = tanggal.getFullYear();
	return dd + '/' + mm + '/' + yyyy;
	// 27/10/2023
};

export const date2 = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export const getToday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 8);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};

export const getYesterday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() - 16);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};

export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

export const date3 = (waktu) => {
	// Format input tanggal
	const inputDateString = waktu;
	const inputDate = new Date(inputDateString);

	// Mendapatkan jam dan menit
	const hours = inputDate.getUTCHours();
	const minutes = inputDate.getUTCMinutes();

	// Mengonversi ke format "HH:MM"
	const formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

	return formattedTime;

	// convert  Fri, 27 Oct 2023 05:00:00 GMT menjadi 05:00
};

export const date4 = (tanggal) => {
	const parsedDate = new Date(tanggal);
	const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}-${(
		parsedDate.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')}-${parsedDate.getFullYear()}`;

	return formattedDate;

	// convert from Fri, 05 May 2023 00:00:00 GMT to 05-05-2023
};

export const date5 = (waktu) => {
	// Format input tanggal
	const inputDateString = waktu;
	const inputDate = new Date(inputDateString);

	// Mendapatkan jam, menit, dan detik
	const hours = inputDate.getUTCHours();
	const minutes = inputDate.getUTCMinutes();
	const seconds = inputDate.getUTCSeconds();

	// Mengonversi ke format "HH:MM:SS"
	const formattedTime =
		(hours < 10 ? '0' : '') +
		hours +
		':' +
		(minutes < 10 ? '0' : '') +
		minutes +
		':' +
		(seconds < 10 ? '0' : '') +
		seconds;

	return formattedTime;
};

export const getTomorrow = () => {
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];

	// Buat objek tanggal untuk tanggal hari ini
	const today = new Date();

	// Tambahkan 1 hari ke tanggal hari ini untuk mendapatkan tanggal besok
	today.setDate(today.getDate() + 1);

	// Dapatkan tanggal besok dalam format "DD NamaBulan YYYY"
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = months[today.getMonth()];
	const yyyy = today.getFullYear();

	const tomorrow = dd + ' ' + mm + ' ' + yyyy;

	return tomorrow;
	// 05 November 2023
};

export const konversiTahunBulan = (angkaDesimal) => {
	// Menghitung jumlah bulan dari angka desimal
	const totalBulan = Math.floor(angkaDesimal * 12);

	// Menghitung tahun dan bulan
	const tahun = Math.floor(totalBulan / 12);
	const bulan = totalBulan % 12;

	return tahun + ' Tahun ' + bulan + ' Bulan';
	// Konversi 5.5 menjadi 5 Tahun 6 Bulan
};

export function convertDate(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

