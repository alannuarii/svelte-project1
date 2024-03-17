<script>
	export let kode;
	export let tanggal;
</script>

<div
	class="modal fade"
	id="uploadFoto{kode}"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<form method="POST" enctype="multipart/form-data">
				<div class="modal-body mx-4">
					<label for="exampleFormControlInput1" class="form-label mb-3"
						>Upload dokumentasi rapat tanggal <span>{tanggal}</span></label
					>
					<input type="file" class="form-control form-control-sm" name="foto" required />
				</div>
				<div class="modal-footer d-flex justify-content-center">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>

					<input type="hidden" name="kode" value={kode} />
					<input type="hidden" name="method" value="put" />
					<button type="submit" class="btn upload">Upload</button>
				</div>
			</form>
		</div>
	</div>
</div>

<style>
	.modal-body {
		height: 100px;
	}
	.btn {
		font-size: 13px;
	}
	.upload {
		background-color: #2a9d8f;
		color: #ffffff;
	}
	span {
		font-weight: 700;
	}
</style>
