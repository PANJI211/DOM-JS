document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('infoForm');

    form.addEventListener('submit', (event) => {
     
        event.preventDefault();

        const name = document.getElementById('name').value;
        const absen = document.getElementById('absen').value;
        const className = document.getElementById('class').value;
        const hobby = document.getElementById('hobby').value;

        alert(
            `Informasi Anda:\n\n` +
            `Nama: ${name}\n` +
            `No Absen: ${absen}\n` +
            `Kelas: ${className}\n` +
            `Hobi: ${hobby}`
        );
    });
});
