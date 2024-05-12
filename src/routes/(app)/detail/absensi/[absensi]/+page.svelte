<script>
	import { convertDate, convertTime, date4 } from '../../../../../lib/js/date';

	export let data;

	const agenda = data.data.data.agenda.length > 0 ? data.data.data.agenda[0] : [];
	const daftarHadir = data.data.data.daftar_hadir.length > 0 ? data.data.data.daftar_hadir : [];
</script>

<div>
	<div class="card p-3">
		<h4 class="text-center mb-3">DAFTAR HADIR</h4>
		<div class="mx-4 mb-2">
			<table class="table table-bordered">
				<tbody>
					<tr>
						<td class="fw-bold">ID DAFTAR HADIR</td>
						<td class="fw-bold">{agenda.Kode}</td>
					</tr>
					<tr>
						<td class="fw-bold">HARI/TANGGAL</td>
						<td>{convertDate(agenda.Tanggal)}</td>
					</tr>
					<tr>
						<td class="fw-bold">TEMPAT</td>
						<td>{agenda.Tempat}</td>
					</tr>
					<tr>
						<td class="fw-bold">WAKTU</td>
						<td>{convertTime(agenda.Waktu)}</td>
					</tr>
					<tr>
						<td class="fw-bold">AGENDA RAPAT</td>
						<td>{agenda.NamaAgenda}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="mx-4 absensi">
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<th scope="col" class="align-middle">No</th>
						<th scope="col" class="align-middle">NAMA</th>
						<th scope="col" class="align-middle">NID</th>
						<th scope="col" class="align-middle">UNIT</th>
                        <th scope="col" class="align-middle">JABATAN</th>
					</tr>
				</thead>
				<tbody>
					{#each daftarHadir as abs, index}
						<tr>
							<td class="align-middle">{index + 1}</td>
							<td class="align-middle text-start">{abs.Nama}</td>
							<td class="align-middle">{abs.NID}</td>
							<td class="align-middle">{abs.Unit}</td>
                            <td class="align-middle">{abs.Jabatan}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.card {
		border-radius: 20px;
	}
	h4,
	h5,
	label {
		font-weight: 700;
		color: #2a9d8f;
	}
	h6,
	p,
	label {
		margin: 0;
		font-size: 15px;
	}
	h6,
	label {
		font-weight: 700;
	}
	.title {
		height: 40px;
	}
	.title span {
		font-weight: 700;
	}
	th,
	td {
		font-size: 15px;
	}
    .absensi th,
	.absensi td {
		font-size: 13px;
	}
	.nama {
		font-size: 15px;
	}
	img {
		height: 200px;
	}
</style>
