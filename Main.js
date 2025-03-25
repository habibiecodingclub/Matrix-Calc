function buatMatrix(input) {
    const matrix = [];
    let row = [];

    for (let i = 0; i < input.length; i++) {
        row.push(parseFloat(input[i].value) || 0);

        if ((i + 1) % 3 === 0) {
            matrix.push(row);
            row = [];
        }
    }
    console.log('Matrix yg dibuat: ',matrix);
    return  matrix;
}


// Pertambahan
function pertambahanMatriks(matrixA, matrixB) {
    if (matrixA.length !== matrixB.length || 
        matrixA[0].length !== matrixB[0].length) {
            console.error('Ukuran matrix tidak sama');
            return null;
        }

    const hasil = [];
    for (let i = 0; i < matrixA.length; i++) {
        const rowResult = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            rowResult.push(matrixA[i][j] + matrixB[i][j]);
        }
        hasil.push(rowResult);
    }
    console.log('Hasil Pertambahan: ',hasil);
    return hasil;
}



document.addEventListener('DOMContentLoaded', () => {
    const matrixAinput = document.querySelectorAll('.matriksA:nth-child(2) .input .inputan input');
    const matrixBinput = document.querySelectorAll('.matriksA:nth-child(3) .input .inputan input');
    const tombolTambah = document.getElementById('tambahBtn');


    tombolTambah.addEventListener('click', () => {
        const matrixA = buatMatrix(matrixAinput);
        const matrixB = buatMatrix(matrixBinput);

        const hasilPertambahan = pertambahanMatriks(matrixA, matrixB);
        if (hasilPertambahan) {
        console.log('Hasil akhir di console:', hasilPertambahan);
        }
    });
});