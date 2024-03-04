<script>
	import { pegawai, ophar, cs, security, mesin, tp, th } from '../../../../lib/js/data';

	let arrPegawai = [];
	let arrOphar = [];
	let arrCs = [];
	let arrSecurity = [];
	let formSr = [];
	let formK3kl = [];
	let formAdm = [];

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
		}
	};

	const hapusForm = (index) => {
		formSr = formSr.filter((_, i) => i !== index);
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
</script>

<div>
	<div class="card p-3">
		<h4 class="text-center mb-3">NOTULEN RAPAT</h4>
		<div class="mx-4 mb-4">
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
					>HARI/TANGGAL</label
				>
				<div class="col-sm-5">
					<input type="date" class="form-control form-control-sm" id="colFormLabelSm" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">TEMPAT</label>
				<div class="col-sm-5">
					<input type="text" class="form-control form-control-sm" id="colFormLabelSm" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">WAKTU</label>
				<div class="col-sm-5">
					<input type="time" class="form-control form-control-sm" id="colFormLabelSm" />
				</div>
			</div>
			<div class="row mb-1">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
					>AGENDA RAPAT</label
				>
				<div class="col-sm-5">
					<input type="text" class="form-control form-control-sm" id="colFormLabelSm" />
				</div>
			</div>
			<div class="row">
				<label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm"
					>DASAR PEMBAHASAN</label
				>
				<div class="col-sm-5">
					<input type="text" class="form-control form-control-sm" id="colFormLabelSm" />
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
		<div class="px-3">
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
						<div class="d-flex align-items-center mb-2">
							<p class="me-3">Laporan Gangguan/Service Request</p>
							<div class="sr btn btn-sm btn-success" on:click={tambahForm}>
								<i class="bi-plus-lg me-2"></i>Tambah
							</div>
						</div>
						{#each formSr as formSr, index}
							<div class="d-flex align-items-center mb-1">
								<span class="me-3">{index + 1}.</span><input
									type="text"
									class="form-control form-control-sm me-3"
								/>
								<i class="btn bi-x-circle-fill text-danger" on:click={() => hapusForm(index)}></i>
							</div>
						{/each}
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
				<div class="card p-3">
					{#each formSr as formSr, index}
						<div class="d-flex align-items-center mb-1">
							<span class="me-3">{index + 1}.</span><input
								type="text"
								class="form-control form-control-sm me-3"
							/>
							<i class="btn bi-x-circle-fill text-danger" on:click={() => hapusForm(index)}></i>
						</div>
					{/each}
				</div>
			</div>
			<div class="mb-3">
				<h6 class="mb-2">3. BAGIAN K3, LINGKUNGAN DAN KEAMANAN</h6>
				<div class="card p-3"></div>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		border-radius: 20px;
		/* border: none; */
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
	td {
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
</style>
