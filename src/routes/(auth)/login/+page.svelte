<script>
	import pnp from '../../../lib/img/pnp.png';
	import Alert from '../../../lib/components/Alert.svelte';

	export let form;

	const response = form ? form.message : '';
</script>

<section>
	{#if response}
		<Alert message={response} color="danger" icon="x-circle" />
	{/if}
	<div
		class="outer position-absolute top-50 end-0 translate-middle-y p-5 bg-secondary d-flex flex-column justify-content-center"
	>
		<div class="">
			<div class="icon mb-5">
				<img src={pnp} class="mb-1" alt="" />
				<h6 class="text-light">ULPLTD Kotamobagu</h6>
			</div>
			<form method="POST">
				<div class="input-group mb-1">
					<!-- svelte-ignore element_invalid_self_closing_tag -->
					<span class="input-group-text text-light"><i class="bi-person-circle" /></span>
					<div class="form-floating">
						<input
							type="email"
							class="form-control bg-dark-subtle"
							id="floatingInputGroup1"
							placeholder="Email User"
							name="email"
						/>
						<label for="floatingInputGroup1">Email User</label>
					</div>
				</div>
				<div class="input-group">
					<!-- svelte-ignore element_invalid_self_closing_tag -->
					<span class="input-group-text text-light"><i class="bi-key" /></span>
					<div class="form-floating">
						<input
							type="password"
							class="form-control bg-dark-subtle"
							id="floatingInputGroup1"
							placeholder="Password"
							name="password"
						/>
						<label for="floatingInputGroup1">Password</label>
					</div>
				</div>
				<div class="mt-3 d-flex justify-content-center">
					<button class="btn btn-outline-dark w-50" type="reset">Reset</button>
					<button class="btn btn-login w-50 text-light" type="submit">Login</button>
				</div>
			</form>
		</div>
	</div>
</section>

<style>
	section {
		background-image: url('../../../lib/img/pltd.jpeg');
		background-position: center center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 100vh;
		opacity: 0.8;
	}
	.outer {
		height: 100vh;
		width: 450px;
		opacity: 0.85;
		/* border-radius: 50px 0 0 50px; */
	}
	button,
	input,
	span {
		border-radius: 0px;
	}
	img {
		height: 50px;
	}
	.icon h6 {
		font-size: 23px;
		font-weight: 700;
	}
	.btn-login {
		background-color: #2a9d8f;
	}
	.btn-login:hover {
		background-color: #2a9d8fdf;
	}
	span {
		background-color: #2a9d8f;
	}
</style>
