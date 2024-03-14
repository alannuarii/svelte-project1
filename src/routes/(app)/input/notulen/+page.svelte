<script>
	import { pegawai, ophar, cs, security } from '../../../../lib/js/data';
	import { generateRandomCode } from '../../../../lib/js/random';
	import { getToday, date6, getNextDay } from '../../../../lib/js/date';
	import Camera from '../../../../lib/components/modals/Camera.svelte';
	import Qrcode from '../../../../lib/components/modals/Qrcode.svelte';

	export let data;
	let arrPegawai = [];
	let arrOphar = [];
	let arrCs = [];
	let arrSecurity = [];
	let formSr = [];
	let formK3kl = [];
	let formAdm = [];
	let formKegiatan = [];
	let capturedImage;
	const randomCode = generateRandomCode();
	const tanggal =
		data.data.data.agenda.length > 0 ? date6(data.data.data.agenda[0].Tanggal) : getToday();
	const daftarHadir = data.data.data.daftar_hadir.length > 0 ? data.data.data.daftar_hadir : [];
	const pembangkit = data.data.data.pembangkit.length > 0 ? data.data.data.pembangkit : [];
	const tp = data.data.data.tp.length > 0 ? data.data.data.tp : [];
	const th = data.data.data.th.length > 0 ? data.data.data.th : [];
	const k3kl = data.data.data.k3kl.length > 0 ? data.data.data.k3kl : [];
	const adm = data.data.data.adm.length > 0 ? data.data.data.adm : [];
	const kegiatan = data.data.data.kegiatan.length > 0 ? data.data.data.kegiatan : [];

	console.log(tanggal === getToday());
	console.log(getToday());

	$: {
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
	}

	const handleArr = (event) => {
		event.preventDefault();
		const selectedValue = event.target.value;
		if (
			!arrPegawai.includes(selectedValue) &&
			pegawai.find((pegawai) => pegawai.nama === selectedValue)
		) {
			arrPegawai = [...arrPegawai, selectedValue];
		} else if (
			!arrOphar.includes(selectedValue) &&
			ophar.find((ophar) => ophar.nama === selectedValue)
		) {
			arrOphar = [...arrOphar, selectedValue];
		} else if (!arrCs.includes(selectedValue) && cs.find((cs) => cs.nama === selectedValue)) {
			arrCs = [...arrCs, selectedValue];
		} else if (
			!arrSecurity.includes(selectedValue) &&
			security.find((security) => security.nama === selectedValue)
		) {
			arrSecurity = [...arrSecurity, selectedValue];
		}
	};

	const tambahForm = (event) => {
		event.preventDefault();
		const targetElement = event.target;

		if (targetElement.classList.contains('sr')) {
			formSr = [...formSr, {}];
		} else if (targetElement.classList.contains('k3kl')) {
			formK3kl = [...formK3kl, {}];
		} else if (targetElement.classList.contains('adm')) {
			formAdm = [...formAdm, {}];
		} else if (targetElement.classList.contains('kegiatan')) {
			formKegiatan = [...formKegiatan, {}];
		}
	};

	const hapusForm = (event, index) => {
		event.preventDefault();
		const targetElement = event.target;

		if (targetElement.classList.contains('delSr')) {
			formSr = formSr.filter((_, i) => i !== index);
		} else if (targetElement.classList.contains('delK3kl')) {
			formK3kl = formK3kl.filter((_, i) => i !== index);
		} else if (targetElement.classList.contains('delAdm')) {
			formAdm = formAdm.filter((_, i) => i !== index);
		} else if (targetElement.classList.contains('delKegiatan')) {
			formKegiatan = formKegiatan.filter((_, i) => i !== index);
		}
	};

	const hapusNama = (nama) => {
		event.preventDefault();
		if (arrPegawai.find((peg) => nama === peg)) {
			arrPegawai = arrPegawai.filter((element) => element !== nama);
		} else if (arrOphar.find((op) => nama === op)) {
			arrOphar = arrOphar.filter((element) => element !== nama);
		} else if (arrCs.find((cs) => nama === cs)) {
			arrCs = arrCs.filter((element) => element !== nama);
		} else if (arrSecurity.find((sec) => nama === sec)) {
			arrSecurity = arrSecurity.filter((element) => element !== nama);
		}
	};

	const hapusFoto = () => {
		capturedImage = '';
	};

	const handleImageCaptured = (event) => {
		event.preventDefault();
		capturedImage = event.detail.capturedImage;
	};

	const handlePreventDafault = (event) => {
		event.preventDefault();
	};
</script>

<div>
	{#if tanggal === getToday()}
		<div class="alert alert-success p-4" role="alert">
			<h4 class="alert-heading">Well done!</h4>
			<p>
				Daily meeting hari ini telah dilaksanakan, silahkan klik link di bawah ini untuk melihat
				notulen hari ini.
			</p>
			<button class="btn btn-sm mt-2">Notulen</button>
			<hr />
			<p class="mb-0">
				Daily meeting selanjutnya dilaksanakan pada tanggal <span>{getNextDay(getToday())}</span>
			</p>
		</div>
	{:else}
		<form method="POST">
			<div class="card p-3">
				<h4 class="text-center mb-3">NOTULEN RAPAT</h4>
				<div class="mx-4 mb-4">
					<div class="row mb-1">
						<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
							>ID NOTULEN</label
						>
						<div class="col-sm-5">
							<input
								type="text"
								class="form-control form-control-sm"
								id="colFormLabelSm"
								value={randomCode}
								disabled
							/>
							<input type="hidden" name="kode" value={randomCode} />
						</div>
					</div>
					<div class="row mb-1">
						<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
							>HARI/TANGGAL</label
						>
						<div class="col-sm-5">
							<input
								type="date"
								class="form-control form-control-sm"
								id="colFormLabelSm"
								name="tanggal"
								value={getToday()}
							/>
						</div>
					</div>
					<div class="row mb-1">
						<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
							>TEMPAT</label
						>
						<div class="col-sm-5">
							<input
								type="text"
								class="form-control form-control-sm"
								id="colFormLabelSm"
								name="tempat"
								value="Ruang Rapat ULPLTD Kotamobagu"
							/>
						</div>
					</div>
					<div class="row mb-1">
						<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
							>WAKTU</label
						>
						<div class="col-sm-5">
							<input
								type="time"
								class="form-control form-control-sm"
								id="colFormLabelSm"
								name="waktu"
								value="08:30"
							/>
						</div>
					</div>
					<div class="row mb-1">
						<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
							>AGENDA RAPAT</label
						>
						<div class="col-sm-5">
							<input
								type="text"
								class="form-control form-control-sm"
								id="colFormLabelSm"
								name="agenda"
								value="Daily Meeting"
							/>
						</div>
					</div>
					<div class="row">
						<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
							>DASAR PEMBAHASAN</label
						>
						<div class="col-sm-5">
							<input
								type="text"
								class="form-control form-control-sm"
								id="colFormLabelSm"
								name="dasar"
								value="Implementasi Tata Kelola Pembangkit"
							/>
						</div>
					</div>
				</div>
				<div class="row px-3 gx-0 mb-4">
					<h5>PESERTA RAPAT</h5>
					<div class="col-3 border py-2">
						<div class="text-center mb-2">
							<h6>PT PLN Nusantara Power</h6>
							<p>ULPLTD Kotamobagu</p>
						</div>
						{#each arrPegawai as peg, index}
							<div class="d-flex align-items-center mx-3">
								<span class="me-2">{index + 1}.</span>
								<p class="">{peg}</p>
								<button
									class="btn bi-x-circle-fill text-danger ms-auto"
									on:click={() => hapusNama(peg)}
								></button>
							</div>
						{/each}
						<div class="mx-2 mt-2">
							<select
								class="form-select form-select-sm"
								aria-label="Default select example"
								on:change={handleArr}
							>
								<option selected disabled>Pilih nama . . .</option>
								{#each pegawai as peg}
									<option value={peg.nama}>{peg.nama}</option>
								{/each}
							</select>
						</div>
						<input type="hidden" name="namaPeg" value={arrPegawai} />
					</div>
					<div class="col-3 border py-2">
						<div class="text-center mb-2">
							<h6>PT PLN Nusa Daya</h6>
							<p>Operasi & Pemeliharaan</p>
						</div>
						{#each arrOphar as op, index}
							<div class="d-flex align-items-center mx-3">
								<span class="me-2">{index + 1}.</span>
								<p class="">{op}</p>
								<button
									class="btn bi-x-circle-fill text-danger ms-auto"
									on:click={() => hapusNama(op)}
								></button>
							</div>
						{/each}
						<div class="mx-2 mt-2">
							<select
								class="form-select form-select-sm"
								aria-label="Default select example"
								on:change={handleArr}
							>
								<option selected disabled>Pilih nama . . .</option>
								{#each ophar as oh}
									<option value={oh.nama}>{oh.nama}</option>
								{/each}
							</select>
						</div>
						<input type="hidden" name="namaOH" value={arrOphar} />
					</div>
					<div class="col-3 border py-2">
						<div class="text-center mb-2">
							<h6>PT Carefast</h6>
							<p>Cleaning Service</p>
						</div>
						{#each arrCs as cs, index}
							<div class="d-flex align-items-center mx-3">
								<span class="me-2">{index + 1}.</span>
								<p class="">{cs}</p>
								<button
									class="btn bi-x-circle-fill text-danger ms-auto"
									on:click={() => hapusNama(cs)}
								></button>
							</div>
						{/each}
						<div class="mx-2 mt-2">
							<select
								class="form-select form-select-sm"
								aria-label="Default select example"
								on:change={handleArr}
							>
								<option selected disabled>Pilih nama . . .</option>
								{#each cs as c}
									<option value={c.nama}>{c.nama}</option>
								{/each}
							</select>
						</div>
						<input type="hidden" name="namaCs" value={arrCs} />
					</div>
					<div class="col-3 border py-2">
						<div class="text-center mb-2">
							<h6>PT Jayamahe</h6>
							<p>Security</p>
						</div>
						{#each arrSecurity as sec, index}
							<div class="d-flex align-items-center mx-3">
								<span class="me-2">{index + 1}.</span>
								<p class="">{sec}</p>
								<button
									class="btn bi-x-circle-fill text-danger ms-auto"
									on:click={() => hapusNama(sec)}
								></button>
							</div>
						{/each}
						<div class="mx-2 mt-2">
							<select
								class="form-select form-select-sm"
								aria-label="Default select example"
								on:change={handleArr}
							>
								<option selected disabled>Pilih nama . . .</option>
								{#each security as sec}
									<option value={sec.nama}>{sec.nama}</option>
								{/each}
							</select>
						</div>
						<input type="hidden" name="namaSec" value={arrSecurity} />
					</div>
				</div>
				<div class="px-3 mb-4">
					<h5>CATATAN DISKUSI</h5>
					<div class="mb-3">
						<h6 class="mb-2">1. BAGIAN OPERASI</h6>
						<div class="card px-3 pt-3">
							<div class="mb-2">
								<p class="mb-2">Kondisi Pembangkit</p>
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
												<td class="dmn"
													><input
														type="number"
														class="form-control form-control-sm"
														name="dmn"
														value={mes.DMN}
													/></td
												>
												<td
													><input
														type="text"
														class="form-control form-control-sm text-center"
														name="status"
														value={mes.Status}
													/></td
												>
											</tr>
										{/each}
									</tbody>
								</table>
							</div>
							<div class="mb-3">
								<div class="mb-2">
									<p>Laporan Gangguan/Service Request</p>
								</div>
								{#each formSr as formSr, index}
									<div class="d-flex align-items-center mb-1">
										<span class="me-3">{index + 1}.</span><input
											type="text"
											class="form-control form-control-sm me-3"
										/>
										<button
											class="delSr btn bi-x-circle-fill text-danger"
											on:click={(event) => hapusForm(event, index)}
										></button>
									</div>
								{/each}
								<div class="d-flex justify-content-center">
									<button class="sr btn btn-sm" on:click={tambahForm}>
										<i class="bi-plus-lg me-2"></i>Tambah
									</button>
								</div>
							</div>
							<div>
								<p class="mb-2">Informasi Tambahan</p>
								<div class="row">
									<div class="col-3">
										<table class="table table-bordered text-center">
											<tbody>
												{#each tp as t}
													<tr>
														<td class="align-middle">{t.KodeTangki}</td>
														<td class="tangki"
															><input
																type="text"
																class="form-control form-control-sm"
																name="tp"
																value={(+t.Pengukuran).toFixed(2)}
															/></td
														>
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
														<td class="tangki"
															><input
																type="text"
																class="form-control form-control-sm"
																name="th"
																value={(+t.Pengukuran).toFixed(2)}
															/></td
														>
													</tr>
												{/each}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="mb-3">
						<h6 class="mb-2">2. BAGIAN PEMELIHARAAN</h6>
						<div class="card p-3"></div>
					</div>
					<div class="mb-3">
						<div class="mb-2">
							<h6 class="me-3">3. BAGIAN K3, LINGKUNGAN DAN KEAMANAN</h6>
						</div>
						<div class="card p-3">
							{#each formK3kl as fk3kl, index}
								<div class="d-flex align-items-center mb-1">
									<span class="me-3">{index + 1}.</span><input
										type="text"
										class="form-control form-control-sm me-3"
										name="k3kl"
										value={fk3kl.Info}
									/>
									<button
										class="delK3kl btn bi-x-circle-fill text-danger"
										on:click={(event) => hapusForm(event, index)}
									></button>
								</div>
							{/each}
							<div class="d-flex justify-content-center">
								<button class="k3kl btn btn-sm" on:click={tambahForm}>
									<i class="bi-plus-lg me-2"></i>Tambah
								</button>
							</div>
						</div>
					</div>
					<div class="mb-3">
						<div class="mb-2">
							<h6 class="me-3">4. ADMINISTRASI DAN UMUM</h6>
						</div>
						<div class="card p-3">
							{#each formAdm as fadm, index}
								<div class="d-flex align-items-center mb-1">
									<span class="me-3">{index + 1}.</span><input
										type="text"
										class="form-control form-control-sm me-3"
										name="adm"
										value={fadm.Info}
									/>
									<button
										class="delAdm btn bi-x-circle-fill text-danger"
										on:click={(event) => hapusForm(event, index)}
									></button>
								</div>
							{/each}
							<div class="d-flex justify-content-center">
								<button class="adm btn btn-sm" on:click={tambahForm}>
									<i class="bi-plus-lg me-2"></i>Tambah
								</button>
							</div>
						</div>
					</div>
				</div>
				<div class="px-3 mb-4">
					<h5>KEGIATAN</h5>
					<table class="table table-bordered text-center">
						<thead>
							<tr>
								<th>No</th>
								<th scope="col" class="namaKegiatan">Nama Kegiatan</th>
								<th scope="col">PIC</th>
								<th scope="col">Target</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{#each formKegiatan as fkegiatan, index}
								<tr>
									<td class="align-middle">{index + 1}</td>
									<td
										><input
											type="text"
											class="form-control form-control-sm"
											name="kegiatan"
											value={fkegiatan.NamaKegiatan}
										/></td
									>
									<td
										><select
											class="form-select form-select-sm"
											aria-label="Small select example"
											name="pic"
										>
											<option selected value={fkegiatan.PIC}>{fkegiatan.PIC}</option>
											{#each pegawai.filter((item) => item.jabatan.includes('TL')) as peg}
												<option value={peg.jabatan}>{peg.jabatan}</option>
											{/each}
										</select></td
									>
									<td
										><input
											type="date"
											class="form-control form-control-sm"
											name="target"
											value={date6(fkegiatan.Target)}
										/></td
									>
									<td class="align-middle"
										><button
											class="delKegiatan btn bi-x-circle-fill text-danger"
											on:click={(event) => hapusForm(event, index)}
										></button></td
									>
								</tr>
							{/each}
							<tr>
								<td colspan="5"
									><button class="kegiatan btn btn-sm" on:click={tambahForm}>
										<i class="bi-plus-lg me-2"></i>Tambah
									</button></td
								>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="row px-3 gx-0 mb-3">
					<div
						class="col-6 border d-flex flex-column justify-content-center align-items-center py-3"
					>
						<p class="fw-bold mb-3">DOKUMENTASI</p>
						<div>
							<button
								class="{!!capturedImage ? 'd-none' : ''} btn btn-sm camera px-3"
								data-bs-toggle="modal"
								data-bs-target="#camera"
								on:click={handlePreventDafault}><i class="bi-camera-fill"></i></button
							>
							<input type="hidden" name="foto" value={capturedImage} />
							<button
								class="{!!capturedImage ? 'd-none' : ''} btn btn-sm camera px-3"
								data-bs-toggle="modal"
								data-bs-target="#qrcode"
								on:click={handlePreventDafault}><i class="bi-qr-code"></i></button
							>
						</div>
						{#if capturedImage}
							<img
								src={capturedImage}
								class="capture img-fluid my-2"
								alt="Dokumentasi Daily Meeting"
							/>
							<button class="btn bi-x-circle-fill text-danger" on:click={hapusFoto}></button>
						{/if}
						<Camera on:imageCaptured={handleImageCaptured} />
						<Qrcode url={`http://10.7.177.188:5173/input/${randomCode}`} />
					</div>
					<div class="col-6 position-relative text-center border">
						<div class="position-absolute top-50 start-50 translate-middle">
							<p class="fw-bold mb-3">NOTULIS</p>
							<div class="notulis">
								<input
									type="text"
									class="form-control form-control-sm text-center"
									placeholder="Nama Notulis"
									name="notulis"
									value={data.data.data.agenda[0].Notulis}
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="mx-auto"><input type="submit" class="btn kirim" value="Kirim" /></div>
			</div>
		</form>
	{/if}
</div>

<style>
	.card {
		border-radius: 20px;
		/* border: none; */
	}
	.btn {
		background-color: #2a9d8f;
		color: #ffffff;
		border: none;
	}
	.bi-x-circle-fill {
		background-color: transparent;
	}
	h4,
	h5,
	label {
		font-weight: 700;
		color: #2a9d8f;
	}
	h5 {
		font-size: 17px;
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
	.list-group,
	th,
	td,
	span {
		font-size: 13px;
	}
	.dmn {
		width: 10%;
	}
	.tangki {
		width: 60%;
	}
	.bi-x-circle-fill {
		border: none;
	}
	.namaKegiatan {
		width: 50%;
	}
	.bi-camera-fill,
	.bi-qr-code {
		font-size: 40px;
	}
	.camera {
		background-color: rgba(42, 157, 144, 0.114);
		color: #2a9d8f;
		border-radius: 15px;
	}
	.capture {
		width: 50%;
	}
	.kirim {
		width: 150px;
	}
	.alert {
		margin: 70px 300px;
		background-color: rgba(42, 157, 144, 0.114);
	}
	.alert span {
		font-weight: 700;
		font-size: 15px;
		color: #2a9d8f;
	}
</style>
