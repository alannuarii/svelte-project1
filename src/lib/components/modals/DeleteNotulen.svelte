<script>
	export let kode;
	export let tanggal;
</script>

<div
	class="modal fade"
	id="deleteNotulen{kode}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-body d-flex justify-content-center align-items-center">
				<span
					>Apakah Anda yakin ingin menghapus notulen tanggal <span class="tanggal">{tanggal}</span
					>?</span
				>
			</div>
			<div class="modal-footer d-flex justify-content-center">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
				<form method="POST">
					<input type="hidden" name="kode" value={kode} />
					<input type="hidden" name="method" value="delete" />
					<button type="submit" class="btn btn-danger">Ya!</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-body {
		height: 80px;
	}
	.btn {
		font-size: 13px;
	}
	.tanggal {
		font-weight: 700;
	}
</style>
