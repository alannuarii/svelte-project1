<script>
	import placeholder from '../../img/placeholder.png';
	import meeting1 from '../../img/meeting1.png';
	import meeting2 from '../../img/meeting2.png';
</script>

<div
	class="modal fade"
	id="exampleModal"
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content bg-transparent border-0">
			<div class="modal-body">
				<div class="row">
					<div class="col-6">
						<div class="card">
							<img src={meeting1} class="card-img-top img-fluid" alt="..." />
							<div class="card-body d-flex justify-content-center">
								<a href="/rekap/notulen" class="btn meeting1">Daily Meeting</a>
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="card">
							<img src={meeting2} class="card-img-top img-fluid" alt="..." />
							<div class="card-body d-flex justify-content-center">
								<a href="/" class="btn meeting2">Lain-lain</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.meeting1 {
		background-color: #2a9d8f;
		color: #ffffff;
	}
	.meeting2 {
		background-color: #8d99ae;
		color: #ffffff;
	}
	.card {
		border-radius: 0 0 30px 30px;
	}
</style>
