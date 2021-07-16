// Tugas 5 by Irfan Zafar

// soal 1
console.log("---Soal 1---");
function luasPersegiPanjang(panjang, lebar) {
	return panjang * lebar;
}

function kelilingPersegiPanjang(panjang, lebar) {
	return (panjang + lebar) * 2;
}

function volumeBalok(panjang, lebar, tinggi) {
	return panjang * lebar * tinggi;
}

var panjang = 12;
var lebar = 4;
var tinggi = 8;

var luasPersegiPanjang = luasPersegiPanjang(panjang, lebar);
var kelilingPersegiPanjang = kelilingPersegiPanjang(panjang, lebar);
var volumeBalok = volumeBalok(panjang, lebar, tinggi);

console.log(luasPersegiPanjang);
console.log(kelilingPersegiPanjang);
console.log(volumeBalok);

//soal 2
console.log("---Soal 2---");
function introduce(name, age, address, hobby) {
	return (
		"Nama saya " +
		name +
		", Umur saya " +
		age +
		", alamat saya di  " +
		address +
		" dan saya punya hobby yaitu " +
		hobby
	);
}

var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";

var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

//soal 3
console.log("---Soal 3---");

var arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
arrayDaftarPeserta = {
	nama: arrayDaftarPeserta[0],
	jenisKelamin: arrayDaftarPeserta[1],
	hobi: arrayDaftarPeserta[2],
	tahunLahir: arrayDaftarPeserta[3],
};

console.log(arrayDaftarPeserta);

//soal 4
console.log("---Soal 4---");
var buah = [
	{ nama: "Nanas", warna: "Kuning", adaBijinya: "tidak", harga: 9000 },
	{ nama: "Jeruk", warna: "Oranye", adaBijinya: "ada", harga: 8000 },
	{ nama: "Semangka", warna: "Hijau & Merah", adaBijinya: "ada", harga: 10000 },
	{ nama: "Pisang", warna: "Kuning", adaBijinya: "tidak", harga: 5000 },
];

var arrayBuahFilter = buah.filter(function (item) {
	return item.adaBijinya != "ada";
});

console.log(arrayBuahFilter);

// soal 5
console.log("---Soal 5---");
function tambahDataFilm(nama, durasi, genre, tahun) {
	dataFilm.push({
		nama: nama,
		durasi: durasi,
		genre: genre,
		tahun: tahun,
	});
}

var dataFilm = [];

tambahDataFilm("LOTR", "2 jam", "action", "1999");
tambahDataFilm("avenger", "2 jam", "action", "2019");
tambahDataFilm("spiderman", "2 jam", "action", "2004");
tambahDataFilm("juon", "2 jam", "horror", "2004");

console.log(dataFilm);
