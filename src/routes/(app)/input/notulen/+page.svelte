<script>
	import { pegawai, ophar, cs, security, mesin, tp, th } from '../../../../lib/js/data';
	import { generateRandomCode } from '../../../../lib/js/random';
	import { getToday } from '../../../../lib/js/date';
	import Camera from '../../../../lib/components/modals/Camera.svelte';
	import Qrcode from '../../../../lib/components/modals/Qrcode.svelte';

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

	const handleArr = (event) => {
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
		capturedImage = event.detail.capturedImage;
	};
</script>

<div>
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
						value={getToday()}
					/>
				</div>
			</div>
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">TEMPAT</label>
				<div class="col-sm-5">
					<input
						type="text"
						class="form-control form-control-sm"
						id="colFormLabelSm"
						value="Ruang Rapat ULPLTD Kotamobagu"
					/>
				</div>
			</div>
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">WAKTU</label>
				<div class="col-sm-5">
					<input
						type="time"
						class="form-control form-control-sm"
						id="colFormLabelSm"
						value="08:30"
					/>
				</div>
			</div>
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
					>AGENDA RAPAT</label
				>
				<div class="col-sm-5">
					<input type="text" class="form-control form-control-sm" id="colFormLabelSm" value="Daily Meeting" />
				</div>
			</div>
			<div class="row">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
					>DASAR PEMBAHASAN</label
				>
				<div class="col-sm-5">
					<input type="text" class="form-control form-control-sm" id="colFormLabelSm" value="Implementasi Tata Kelola Pembangkit" />
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
						<i class="btn bi-x-circle-fill text-danger ms-auto" on:click={() => hapusNama(peg)}></i>
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
						<i class="btn bi-x-circle-fill text-danger ms-auto" on:click={() => hapusNama(op)}></i>
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
						<i class="btn bi-x-circle-fill text-danger ms-auto" on:click={() => hapusNama(cs)}></i>
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
						<i class="btn bi-x-circle-fill text-danger ms-auto" on:click={() => hapusNama(sec)}></i>
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
								{#each mesin as mes}
									<tr>
										<td class="align-middle">{mes.nama}</td>
										<td class="align-middle">{mes.tipe}</td>
										<td class="align-middle">{mes.seri}</td>
										<td class="align-middle">{mes.dtp}</td>
										<td class="dmn"><input type="number" class="form-control form-control-sm" /></td
										>
										<td><input type="text" class="form-control form-control-sm" /></td>
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
								<i
									class="delSr btn bi-x-circle-fill text-danger"
									on:click={(event) => hapusForm(event, index)}
								></i>
							</div>
						{/each}
						<div class="d-flex justify-content-center">
							<div class="sr btn btn-sm" on:click={tambahForm}>
								<i class="bi-plus-lg me-2"></i>Tambah
							</div>
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
												<td class="align-middle">{t}</td>
												<td class="tangki"
													><input type="number" class="form-control form-control-sm" /></td
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
												<td class="align-middle">{t}</td>
												<td class="tangki"
													><input type="number" class="form-control form-control-sm" /></td
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
					{#each formK3kl as formK3kl, index}
						<div class="d-flex align-items-center mb-1">
							<span class="me-3">{index + 1}.</span><input
								type="text"
								class="form-control form-control-sm me-3"
							/>
							<i
								class="delK3kl btn bi-x-circle-fill text-danger"
								on:click={(event) => hapusForm(event, index)}
							></i>
						</div>
					{/each}
					<div class="d-flex justify-content-center">
						<div class="k3kl btn btn-sm" on:click={tambahForm}>
							<i class="bi-plus-lg me-2"></i>Tambah
						</div>
					</div>
				</div>
			</div>
			<div class="mb-3">
				<div class="mb-2">
					<h6 class="me-3">4. ADMINISTRASI DAN UMUM</h6>
				</div>
				<div class="card p-3">
					{#each formAdm as formAdm, index}
						<div class="d-flex align-items-center mb-1">
							<span class="me-3">{index + 1}.</span><input
								type="text"
								class="form-control form-control-sm me-3"
							/>
							<i
								class="delAdm btn bi-x-circle-fill text-danger"
								on:click={(event) => hapusForm(event, index)}
							></i>
						</div>
					{/each}
					<div class="d-flex justify-content-center">
						<div class="adm btn btn-sm" on:click={tambahForm}>
							<i class="bi-plus-lg me-2"></i>Tambah
						</div>
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
					{#each formKegiatan as formKegiatan, index}
						<tr>
							<td class="align-middle">{index + 1}</td>
							<td><input type="text" class="form-control form-control-sm" /></td>
							<td
								><select class="form-select form-select-sm" aria-label="Small select example">
									<option selected disabled>Pilih PIC</option>
									{#each pegawai.filter((item) => item.jabatan.includes('TL')) as peg}
										<option value={peg.nama}>{peg.jabatan}</option>
									{/each}
								</select></td
							>
							<td><input type="date" class="form-control form-control-sm" /></td>
							<td class="align-middle"
								><i
									class="delKegiatan btn bi-x-circle-fill text-danger"
									on:click={(event) => hapusForm(event, index)}
								></i></td
							>
						</tr>
					{/each}
					<tr>
						<td colspan="5"
							><div class="kegiatan btn btn-sm" on:click={tambahForm}>
								<i class="bi-plus-lg me-2"></i>Tambah
							</div></td
						>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="row px-3 gx-0">
			<div class="col-6 border d-flex flex-column justify-content-center align-items-center py-3">
				<p class="fw-bold mb-3">DOKUMENTASI</p>
				<div>
					<button
						class="{!!capturedImage ? 'd-none' : ''} btn btn-sm camera px-3"
						data-bs-toggle="modal"
						data-bs-target="#camera"><i class="bi-camera-fill"></i></button
					>
					<button
						class="{!!capturedImage ? 'd-none' : ''} btn btn-sm camera px-3"
						data-bs-toggle="modal"
						data-bs-target="#qrcode"><i class="bi-qr-code"></i></button
					>
				</div>
				{#if capturedImage}
					<img src={capturedImage} class="capture img-fluid my-2" alt="Captured Image" />
					<i class="btn bi-x-circle-fill text-danger" on:click={hapusFoto}></i>
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
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
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
</style>
