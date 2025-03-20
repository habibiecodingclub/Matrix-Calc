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
    let hasil = [];

    for(let i = 0; i < matriks1.length; i++){
        hasil[i] = [];
        for(let j = 0; j < matriks1[i].length; j++){
            hasil[i][j] = matriks1[i][j] - matriks2[i][j];
        }
    }
    return hasil;
}


// Perkalian Matriks
function kaliMatriks(matriks1, matriks2){
    let hasil = [];

    for (let i = 0; i < matriks1.length; i++){
        hasil[i] = [];
        for (let j = 0; j < matriks2[0].length; j++){
            hasil[i][j] = 0;
            for (let k = 0; k < matriks1[0].length; k++){
                hasil[i][j] += matriks1[i][k] * matriks2[k][j];
            }
        }
    }
    return hasil;
}

// Determinan Matriks
function determinanMatriks(matriks){
    let hasil = 0;
    if (matriks.length == 2){
        return matriks[0][0] * matriks[1][1] - matriks[0][1] * matriks[1][0];
        } else {
            for (let i = 0; i < matriks.length; i++){
                let subMatriks = [];
                for (let j = 1; j < matriks.length; j++){
                    subMatriks[j-1] = [];
                    for (let k = 0; k < matriks.length; k++){
                        if (k != i){
                            subMatriks[j-1].push(matriks[j][k]);
                        }
                    }
                }
            }
        }
    return hasil;
}




let A = [
    [1, 2],
    [2, 1]];

let B = [
    [4, 2],
    [2, 3]];

tampilkanMatriks(A);
tampilkanMatriks(B);
console.log("---------Tambah--------")
let tambah = tambahMatriks(A, B);
tampilkanMatriks(tambah);
console.log("---------Kurang--------")
let kurang = kurangMatriks(A, B);
tampilkanMatriks(kurang);
console.log("---------Kali--------")
let kali = kaliMatriks(A, B);
tampilkanMatriks(kali);
console.log("---------Det--------")
let det = determinanMatriks(A);
console.log(det)
