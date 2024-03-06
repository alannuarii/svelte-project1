<script>
	import { createEventDispatcher } from 'svelte';

	let videoStream;
	let videoElement;
	let capturedImage;
	let capturing = false;

	const dispatch = createEventDispatcher();

	async function startCamera() {
		try {
			videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
			videoElement = document.getElementById('videoElement');
			videoElement.srcObject = videoStream;
			videoElement.addEventListener('loadedmetadata', () => {
				// Set canvas size equal to video size
				canvas.width = videoElement.videoWidth;
				canvas.height = videoElement.videoHeight;
			});
		} catch (error) {
			console.error('Error accessing camera:', error);
		}
	}

	function stopCamera() {
		if (videoStream) {
			videoStream.getTracks().forEach((track) => track.stop());
		}
	}

	function captureImage() {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');
		// Set canvas size equal to video size
		canvas.width = videoElement.videoWidth;
		canvas.height = videoElement.videoHeight;
		context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
		capturedImage = canvas.toDataURL('image/png');
		capturing = true;
		dispatch('imageCaptured', { capturedImage });
	}

	function resetCapture() {
		capturedImage = null;
		capturing = false;
	}
</script>

<div
	class="modal fade"
	id="camera"
	div
	tabindex="-1"
	aria-labelledby="exampleModalLabel"
	aria-hidden="true"
>
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-body position-relative">
				<div class="d-flex flex-column">
					<video id="videoElement" autoplay style="display: {!capturing ? 'block' : 'none'};"
					></video>

					{#if capturing}
						<img src={capturedImage} alt="Captured Image" />
					{/if}
					<div class="nav d-flex justify-content-center mt-3">
						<button
							class="btn btn-sm rounded-0 d-flex flex-column justify-content-center align-items-center"
							on:click={startCamera}><i class="bi-play-fill"></i><span>Start</span></button
						>
						<button
							class="btn btn-sm rounded-0 d-flex flex-column justify-content-center align-items-center"
							on:click={stopCamera}><i class="bi-stop-fill"></i><span>Stop</span></button
						>
						{#if !capturing}
							<button
								class="btn btn-sm rounded-0 d-flex flex-column justify-content-center align-items-center"
								on:click={captureImage}><i class="bi-camera-fill"></i><span>Capture</span></button
							>
						{/if}
						{#if capturing}
							<button
								class="btn btn-sm rounded-0 d-flex flex-column justify-content-center align-items-center"
								on:click={resetCapture}><i class="bi-arrow-repeat"></i><span>Reset</span></button
							>
						{/if}
					</div>
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
	.modal-lg {
		max-width: 600px;
	}
	.btn {
		width: 70px;
		background-color: #2a9d8f;
		border: none;
		margin: 0;
		color: #ffffff;
	}
	i {
		font-size: 25px;
	}
	span {
		font-size: 10px;
		margin: 0;
	}
</style>
