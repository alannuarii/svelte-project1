<script>
	import { convertDate, convertTime, date4 } from '../../../../lib/js/date';

	export let data;
	let arrPegawai = [];
	let arrOphar = [];
	let arrCs = [];
	let arrSecurity = [];
	let formSr = [];
	let formK3kl = [];
	let formAdm = [];
	let formKegiatan = [];

	const agenda = data.data.data.agenda.length > 0 ? data.data.data.agenda[0] : [];
	const daftarHadir = data.data.data.daftar_hadir.length > 0 ? data.data.data.daftar_hadir : [];
	const pembangkit = data.data.data.pembangkit.length > 0 ? data.data.data.pembangkit : [];
	const tp = data.data.data.tp.length > 0 ? data.data.data.tp : [];
	const th = data.data.data.th.length > 0 ? data.data.data.th : [];
	const k3kl = data.data.data.k3kl.length > 0 ? data.data.data.k3kl : [];
	const adm = data.data.data.adm.length > 0 ? data.data.data.adm : [];
	const kegiatan = data.data.data.kegiatan.length > 0 ? data.data.data.kegiatan : [];
	const endpoint = data.endpoint;

	arrPegawai = daftarHadir
		.filter((item) => item.Instansi === 'PLN Nusantara Power')
		.map((item) => item.Nama);

	arrOphar = daftarHadir
		.filter((item) => item.Instansi === 'PLN Nusa Daya')
		.map((item) => item.Nama);

	arrCs = daftarHadir.filter((item) => item.Instansi === 'Carefast').map((item) => item.Nama);

	arrSecurity = daftarHadir.filter((item) => item.Instansi === 'JSS').map((item) => item.Nama);

	formK3kl = k3kl.map((item) => item);

	formAdm = adm.map((item) => item);

	formKegiatan = kegiatan.map((item) => item);
</script>

<div>
	<div class="card p-3">
		<h4 class="text-center mb-3">NOTULEN RAPAT</h4>
		<div class="mx-4 mb-2">
			<table class="table table-bordered">
				<tbody>
					<tr>
						<td class="fw-bold">ID NOTULEN</td>
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
					<tr>
						<td class="fw-bold">DASAR PEMBAHASAN</td>
						<td>{agenda.DasarPembahasan}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="row mx-4 gx-0 border mb-4">
			<div class="border title d-flex align-items-center">
				<span class="ms-2">PESERTA RAPAT</span>
			</div>
			<div class="col-3 border">
				<div class="py-3">
					<div class="text-center">
						<h6>PT PLN Nusantara Power</h6>
						<p>ULPLTD Kotamobagu</p>
					</div>
					<div class="mx-3">
						{#each arrPegawai as peg, index}
							<div class="nama my-2">{index + 1}. {peg}</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-3 border">
				<div class="py-3">
					<div class="text-center">
						<h6>PT PLN Nusa Daya</h6>
						<p>ULPLTD Kotamobagu</p>
					</div>
					<div class="mx-3">
						{#each arrOphar as oh, index}
							<div class="nama my-2">{index + 1}. {oh}</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-3 border">
				<div class="py-3">
					<div class="text-center">
						<h6>PT Carefast</h6>
						<p>ULPLTD Kotamobagu</p>
					</div>
					<div class="mx-3">
						{#each arrCs as cs, index}
							<div class="nama my-2">{index + 1}. {cs}</div>
						{/each}
					</div>
				</div>
			</div>
			<div class="col-3 border">
				<div class="py-3">
					<div class="text-center">
						<h6>PT Jayamahe</h6>
						<p>ULPLTD Kotamobagu</p>
					</div>
					<div class="mx-3">
						{#each arrSecurity as sec, index}
							<div class="nama my-2">{index + 1}. {sec}</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
		<div class="mx-4 mb-4">
			<div class="border title d-flex align-items-center">
				<span class="ms-2">HASIL PEMBAHASAN</span>
			</div>
			<div class="border p-3">
				<h6 class="mb-2">1. BAGIAN OPERASI</h6>
				<div class="mb-2">
					<p class="ms-3 mb-2">Kondisi Pembangkit</p>
					<div class="mx-3">
						<table class="table table-bordered text-center">
							<thead>
								<tr>
									<th scope="col">Unit</th>
									<th scope="col">Tipe</th>
									<th scope="col">No. Seri</th>
									<th scope="col">DTP (kW)</th>
									<th scope="col">DMN (kW)</th>
									<th scope="col">Status</th>
								</tr>
							</thead>
							<tbody>
								{#each pembangkit as mes}
									<tr>
										<td class="align-middle">{mes.Mesin}</td>
										<td class="align-middle">{mes.Tipe}</td>
										<td class="align-middle">{mes.Seri}</td>
										<td class="align-middle">{mes.DTP}</td>
										<td class="align-middle">{mes.DMN}</td>
										<td class="align-middle">{mes.Status}</td>
									</tr>
								{/each}
							</tbody>
						</table>
					</div>
				</div>
				<div class="mb-3">
					<p class="ms-3 mb-2">Informasi Tambahan</p>
					<div class="mx-3">
						<div class="row">
							<div class="col-3">
								<table class="table table-bordered text-center">
									<tbody>
										{#each tp as t}
											<tr>
												<td class="align-middle">{t.KodeTangki}</td>
												<td class="align-middle">{(+t.Pengukuran).toFixed(2)}</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
							<div class="col-3">
								<table class="table table-bordered text-center">
									<tbody>
										{#each th as t}
											<tr>
												<td class="align-middle">{t.KodeTangki}</td>
												<td class="align-middle">{(+t.Pengukuran).toFixed(2)}</td>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<h6 class="mb-2">3. BAGIAN K3, LINGKUNGAN DAN KEAMANAN</h6>
				<div class="mb-4">
					{#each formK3kl as k3kl, index}
						<p class="ms-3 mb-2">{index + 1}. {k3kl.Info}</p>
					{/each}
				</div>
				<h6 class="mb-2">4. BAGIAN ADMINISTRASI</h6>
				<div class="mb-2">
					{#each formAdm as adm, index}
						<p class="ms-3 mb-2">{index + 1}. {adm.Info}</p>
					{/each}
				</div>
			</div>
		</div>
		<div class="mx-4 mb-4">
			<div class="border title d-flex align-items-center">
				<span class="ms-2">KEGIATAN</span>
			</div>
			<div class="border p-3">
				<div class="mx-3">
					<table class="table table-bordered text-center">
						<thead>
							<tr>
								<th scope="col">No</th>
								<th scope="col">Nama Kegiatan</th>
								<th scope="col">PIC</th>
								<th scope="col">Target</th>
							</tr>
						</thead>
						<tbody>
							{#each formKegiatan as keg, index}
								<tr>
									<td class="align-middle">{index + 1}</td>
									<td class="align-middle text-start">{keg.NamaKegiatan}</td>
									<td class="align-middle">{keg.PIC}</td>
									<td class="align-middle">{date4(keg.Target)}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<div class="row mx-4 border">
			<div class="col-7 d-flex justify-content-center">
				<img class="my-3" src={`${endpoint}/photo/${agenda.Foto}`} alt="" />
			</div>
			<div class="col-5 text-center d-flex justify-content-center align-items-center">
				<div>
					<h6>NOTULIS</h6>
					<p>{agenda.Notulis}</p>
				</div>
			</div>
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
	.nama {
		font-size: 15px;
	}
	img {
		height: 200px;
	}
</style>
