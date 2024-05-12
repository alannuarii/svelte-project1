<script>
	import { date } from '../../../../lib/js/date';

	export let data;

	const allAbsensi = data.data.data.length > 0 ? data.data.data : [];
</script>

<div>
	<div class="card p-3">
		<h4 class="text-center mb-3">REKAP DAFTAR HADIR</h4>
		<div class="mx-4">
			<table class="table table-bordered text-center">
				<thead>
					<tr>
						<th scope="col" class="align-middle">No</th>
						<th scope="col" class="align-middle">TANGGAL</th>
						<th scope="col" class="align-middle">TEMPAT</th>
						<th scope="col" class="align-middle">AGENDA</th>
					</tr>
				</thead>
				<tbody>
					{#each allAbsensi as abs, index}
						<tr>
							<td class="align-middle">{index + 1}</td>
							<td class="align-middle"
								><a href="/detail/absensi/{abs.Kode}" class="text-decoration-none"
									>{date(abs.Tanggal)}</a
								></td
							>
							<td class="align-middle">{abs.Tempat}</td>
							<td class="align-middle">{abs.NamaAgenda}</td>
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
	/* .btn {
		border: none;
	}
	i {
		font-size: 13px;
	} */
</style>
