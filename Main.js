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
    const matrixAinput = document.querySelectorAll('.matriks:nth-child(2) .input .inputan input');
    const matrixBinput = document.querySelectorAll('.matriks:nth-child(3) .input .inputan input');
    const tombolTambah = document.getElementById('tambahBtn');


    const tombolkali = document.getElementById('kaliBtn')

    const x1 = document.getElementById('hasil-x1')
    const x2 = document.getElementById('hasil-x2')
    const x3 = document.getElementById('hasil-x3')
    const y1 = document.getElementById('hasil-y1')
    const y2 = document.getElementById('hasil-y2')
    const y3 = document.getElementById('hasil-y3')
    const z1 = document.getElementById('hasil-z1')
    const z2 = document.getElementById('hasil-z2')
    const z3 = document.getElementById('hasil-z3')



    tombolTambah.addEventListener('click', () => {
        const matrixA = buatMatrix(matrixAinput);
        const matrixB = buatMatrix(matrixBinput);

        const hasilPertambahan = pertambahanMatriks(matrixA, matrixB);
        // if (hasilPertambahan) {
        // console.log('Hasil akhir di console:', hasilPertambahan);
        // }
        x1.value = hasilPertambahan[0][0]
        x2.value = hasilPertambahan[0][1]
        x3.value = hasilPertambahan[0][2]
        y1.value = hasilPertambahan[1][0]
        y2.value = hasilPertambahan[1][1]
        y3.value = hasilPertambahan[1][2]
        z1.value = hasilPertambahan[2][0]
        z2.value = hasilPertambahan[2][1]
        z3.value = hasilPertambahan[2][2]
    });
});


