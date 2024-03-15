<script>
	import { date, date2 } from '../../../../lib/js/date';
	import DeleteNotulen from '../../../../lib/components/modals/DeleteNotulen.svelte';
	import UploadFoto from '../../../../lib/components/modals/UploadFoto.svelte';

	export let data;

	const allNotulen = data.data.data.length > 0 ? data.data.data : [];
</script>

<div>
	<div class="card p-3">
		<h4 class="text-center mb-3">REKAP DOKUMEN NOTULEN</h4>
		<div class="mx-4">
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<th scope="col" rowspan="2" class="align-middle">No</th>
						<th scope="col" rowspan="2" class="align-middle">TANGGAL</th>
						<th scope="col" colspan="3">DOKUMEN</th>
						<th scope="col" rowspan="2" class="align-middle">ACTIONS</th>
					</tr>
					<tr>
						<th scope="col">Notulen</th>
						<th scope="col">Daftar Hadir</th>
						<th scope="col">Dokumentasi</th>
					</tr>
				</thead>
				<tbody>
					{#each allNotulen as not, index}
						<tr>
							<td class="align-middle">{index + 1}</td>
							<td class="align-middle">{date(not.Tanggal)}</td>
							<td class="align-middle"><i class="bi-check-circle text-success"></i></td>
							<td class="align-middle"><i class="bi-check-circle text-success"></i></td>
							<td class="align-middle"
								>{#if not.Foto === ''}
									<i class="bi-x-circle text-danger"></i>
								{:else}
									<i class="bi-check-circle text-success"></i>
								{/if}</td
							>
							<td class="d-flex justify-content-evenly align-items-center"
								><button
									class="btn bi-cloud-upload-fill text-secondary"
									data-bs-toggle="modal"
									data-bs-target="#uploadFoto{not.Kode}"
								></button>
								<UploadFoto tanggal={date2(not.Tanggal)} kode={not.Kode} />
								<button
									class="btn bi-trash3-fill text-danger"
									data-bs-toggle="modal"
									data-bs-target="#deleteNotulen"
								></button>
								<DeleteNotulen id={not.ID} tanggal={date2(not.Tanggal)} />
							</td>
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
	h4 {
		font-weight: 700;
		color: #2a9d8f;
	}
	th {
		background-color: #2a9d8f;
		color: #ffffff;
	}
	th,
	td {
		font-size: 13px;
	}
	td {
		height: 40px;
	}
	.btn {
		border: none;
	}
</style>
