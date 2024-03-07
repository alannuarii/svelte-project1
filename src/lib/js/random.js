export const generateRandomCode = () => {
    // Menggabungkan angka dan huruf
    var characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Menghasilkan kombinasi acak sebanyak 6 digit
    var randomCode = '';
    for (var i = 0; i < 20; i++) {
        randomCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return randomCode;
}