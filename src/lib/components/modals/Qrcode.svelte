<script>
	import { onMount } from 'svelte';
	import QRCode from 'qrcode';

	export let url;

	let qrUrl;

	onMount(async () => {
		try {
			qrUrl = await QRCode.toDataURL(url, {
				width: 400,
				height: 400,
				type: 'image/png',
				quality: 1
			});
		} catch (error) {
			console.error('Error generating QR code:', error);
		}
	});
</script>

<div
	class="modal fade"
	id="qrcode"
	div
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-body position-relative">
				<div class="d-flex flex-column">
					{#if qrUrl}
						<img src={qrUrl} alt="QR Code" />
					{:else}
						<p>Generating QR code...</p>
					{/if}
				</div>
				<button
					type="button"
					class="btn-close position-absolute top-0 end-0 mt-4 me-4 bg-danger"
					data-bs-dismiss="modal"
					aria-label="Close"
				></button>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-sm {
		max-width: 400px;
	}
</style>
