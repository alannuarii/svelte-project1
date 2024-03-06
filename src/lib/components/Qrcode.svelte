<!-- QRCode.svelte -->
<script>
    import { onMount } from 'svelte';
    import QRCode from 'qrcode';
  
    let qrUrl = '';
  
    onMount(async () => {
      try {
        const url = 'https://example.com'; // URL yang ingin Anda encode menjadi QR code
        qrUrl = await QRCode.toDataURL(url);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    });
  </script>
  
  {#if qrUrl}
    <img src={qrUrl} alt="QR Code" />
  {:else}
    <p>Generating QR code...</p>
  {/if}
  