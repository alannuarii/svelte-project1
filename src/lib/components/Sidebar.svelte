<script>
	import pnp from '../img/pnp.png';
	import Absensi from '../../lib/components/modals/Absensi.svelte';
</script>

<div id="sidebar" class="position-relative">
	<div class="logo d-flex flex-column justify-content-center align-items-center py-4">
		<img src={pnp} class="img-fluid pnp mb-1" alt="" />
		<h6>ULPLTD Kotamobagu</h6>
	</div>
	<div class="menu d-flex flex-column justify-content-center mt-5">
		<a class="btn btn-light mx-4 mb-3" href="/input/notulen" role="button"
			><i class="bi-plus-lg me-2"></i>Service 1</a
		>
		<div
			class="btn btn-light mx-4"
			role="button"
			data-bs-toggle="modal"
			data-bs-target="#exampleModal"
		>
			<i class="bi-plus-lg me-2"></i>Service 2
		</div>
		<Absensi />
	</div>
</div>

<style>
	#sidebar {
		color: #ffffff;
		width: 100%;
		height: 100vh;
		background-color: #2a9d8f;
		background-image: url('../img/bolt.png');
		background-position: left;
		background-repeat: no-repeat;
		background-size: 180%;
		border-radius: 0 0 180px 0;
	}
	.logo h6 {
		font-weight: 700;
		font-size: 15px;
	}
	.pnp {
		width: 60%;
	}
	.menu .btn {
		font-weight: 500;
		font-size: 15px;
		color: #2a9d8f;
		border-radius: 0 15px 0 15px;
	}
</style>
