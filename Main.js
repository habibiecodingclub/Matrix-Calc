// Fungsionalitas Matriks
function tampilkanMatriks(matriks){
    for(let i = 0; i < matriks.length; i++){
        console.log(matriks[i]);
    }
}

// Pertambahan Matriks
function tambahMatriks(matriks1, matriks2){
    let hasil = [];

    for(let i = 0; i < matriks1.length; i++){
        hasil[i] = [];
        for(let j = 0; j < matriks1[i].length; j++){
            hasil[i][j] = matriks1[i][j] + matriks2[i][j]

        }
    }
    return hasil;
}
// Pengurangan Matriks
function kurangMatriks (matriks1, matriks2){
    // let hasil = [];

    // for(let i = 0; i < matriks1.length; i++){
    //     hasil[i] = [];
    //     for(let j = 0; j < matriks1.length[i]; j++){
    //         hasil[i][j] = Math.abs(matriks1[i][j]) - Math.abs(matriks2[i][j]);
    //     }
    // }
    // console.log(hasil);
    // Masih error
}


// Perkalian Matriks
// Determinan Matriks



let A = [
    [1, 2],
    [2, 1]];

let B = [
    [4, 2],
    [2, 3]];

tampilkanMatriks(A);
tampilkanMatriks(B);
console.log("-----------------")
let tambah = tambahMatriks(A, B);
tampilkanMatriks(tambah);
console.log("-----------------")
