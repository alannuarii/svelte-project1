<script>
	export let message;
	export let color;
	export let icon;
	let show = true;
	let progress = 0;

	setTimeout(() => {
		show = false;
	}, 6500);

	setInterval(() => {
		progress += 0.2;
	}, 10);
</script>

<div
	class="alert alert-{color} {show
		? 'position-absolute bottom-0 end-0'
		: 'd-none'} text-center me-4 d-flex flex-column"
	role="alert"
>
	<i class="bi-{icon} me-2" />{message}
	<div
		class="progress mt-2"
		role="progressbar"
		aria-label="Example 1px high"
		aria-valuenow="25"
		aria-valuemin="0"
		aria-valuemax="100"
		style="height: 7px"
	>
		<div class="progress-bar bg-secondary" style="width: {progress}%" />
	</div>
</div>

<style>
	.alert {
		width: 200px;
		border-color: transparent;
		font-size: 15px;
		border-radius: 10px;
		font-weight: 600;
		/* z-index: 9999; */
		background-color: rgba(42, 157, 144, 0.114) !important;
		color: #2a9d8f;
	}
	i {
		font-size: 40px;
		color: #2a9d8f;
	}
</style>
