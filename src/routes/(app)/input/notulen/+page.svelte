<script>
	import { pegawai, ophar, cs, security } from '../../../../lib/js/data';

	let arrPegawai = [];

	const handleArrPegawai = (event) => {
		const selectedValue = event.target.value;
		arrPegawai = [...arrPegawai, selectedValue]; // Menggunakan spread operator untuk membuat referensi baru
	};

	$: console.log(arrPegawai);
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
				<ol class="list-group list-group-numbered list-group-flush mb-2">
					{#if arrPegawai.length > 0}
						{#each arrPegawai as peg}
							<li class="list-group-item">{peg}</li>
						{/each}
					{/if}
				</ol>
				<div class="mx-2">
					<select
						class="form-select form-select-sm"
						aria-label="Default select example"
						on:change={handleArrPegawai}
					>
						<option selected>Pilih nama . . .</option>
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
				<ol class="list-group list-group-numbered list-group-flush mb-2">
					{#each ophar as oh}
						<li class="list-group-item">{oh.nama}</li>
					{/each}
				</ol>
				<div class="mx-2">
					<select class="form-select form-select-sm" aria-label="Default select example">
						<option selected>Pilih nama . . .</option>
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
				<ol class="list-group list-group-numbered list-group-flush mb-2">
					{#each cs as c}
						<li class="list-group-item">{c.nama}</li>
					{/each}
				</ol>
				<div class="mx-2">
					<select class="form-select form-select-sm" aria-label="Default select example">
						<option selected>Pilih nama . . .</option>
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
				<ol class="list-group list-group-numbered list-group-flush mb-2">
					{#each security as sec}
						<li class="list-group-item">{sec.nama}</li>
					{/each}
				</ol>
				<div class="mx-2">
					<select class="form-select form-select-sm" aria-label="Default select example">
						<option selected>Pilih nama . . .</option>
						{#each security as sec}
							<option value={sec.nama}>{sec.nama}</option>
						{/each}
					</select>
				</div>
			</div>
		</div>
		<div class="px-3">
			<h5>CATATAN DISKUSI</h5>
			<div>
				<h6 class="mb-2">1. BAGIAN OPERASI</h6>
				<div class="card p-3">
					<div>
						<p>Kondisi Pembangkit</p>
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
								<tr>
									<td>Daihatsu</td>
									<td>6PSHTc 26 Dm</td>
									<td>6265146</td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="text" class="form-control form-control-sm" /></td>
								</tr>
								<tr>
									<td>Daihatsu</td>
									<td>6PSHTc 26 Dm</td>
									<td>6265146</td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="text" class="form-control form-control-sm" /></td>
								</tr>
								<tr>
									<td>Daihatsu</td>
									<td>6PSHTc 26 Dm</td>
									<td>6265146</td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="text" class="form-control form-control-sm" /></td>
								</tr>
								<tr>
									<td>Daihatsu</td>
									<td>6PSHTc 26 Dm</td>
									<td>6265146</td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="text" class="form-control form-control-sm" /></td>
								</tr>
								<tr>
									<td>Daihatsu</td>
									<td>6PSHTc 26 Dm</td>
									<td>6265146</td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="text" class="form-control form-control-sm" /></td>
								</tr>
								<tr>
									<td>Daihatsu</td>
									<td>6PSHTc 26 Dm</td>
									<td>6265146</td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="number" class="form-control form-control-sm" /></td>
									<td><input type="text" class="form-control form-control-sm" /></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<p>Laporan Gangguan/Service Request</p>
						<input type="text" class="form-control form-control-sm" />
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
</style>
