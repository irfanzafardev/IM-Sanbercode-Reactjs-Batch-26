// Tugas 6 by Irfan Zafar

// Soal 1

console.log("---Soal 1---");

let π = 22 / 7;
let radius = 21;

const luasLingkarang = (π, radius) => {
	let luas = π * radius * radius;
	return luas;
};

const kelilingLingkarang = (π, radius) => {
	let keliling = 2 * π * radius;
	return keliling;
};

console.log("Area of cirlce: " + luasLingkarang(π, radius));
console.log("Perimeter of cirlce: " + kelilingLingkarang(π, radius));

// Soal 2

console.log("---Soal 2---");

const introduce = (...restData) => {
	let [name, age, sex, occupation] = restData;
	return `Pak ${name} adalah seorang ${occupation} yang berusia ${age} tahun.`;
};

const perkenalan = introduce("John", "30", "Laki-Laki", "penulis");
console.log(perkenalan);

// Soal 3

console.log("---Soal 3---");

const newFunction = (firstName, lastName) => {
	const fullName = `${firstName} ${lastName}`;
	return {
		firstName,
		lastName,
		fullName: (print = () => {
			console.log(fullName);
		}),
	};
};

console.log(newFunction("John", "Doe").firstName);
console.log(newFunction("Richard", "Roe").lastName);
newFunction("William", "Imoh").fullName();

// Soal 4

console.log("---Soal 4---");

let phone = {
	name: "Galaxy Note 20",
	brand: "Samsung",
	year: 2020,
	colors: ["Mystic Bronze", "Mystic White", "Mystic Black"],
};

const {
	name: phoneName,
	brand: phoneBrand,
	year,
	colors: [colorMysticBronze, colorMysticWhite, colorMysticBlack],
} = phone;

console.log(phoneBrand, phoneName, year, colorMysticBlack, colorMysticBronze);

// Soal 5

console.log("---Soal 4---");

let warna = ["biru", "merah", "kuning", "hijau"];

let dataBukuTambahan = {
	penulis: "john doe",
	tahunTerbit: 2020,
};

let buku = {
	nama: "pemograman dasar",
	jumlahHalaman: 172,
	warnaSampul: ["hitam"],
};

let bukuSummary = {
	nama: buku.nama,
	jumlahHalaman: buku.jumlahHalaman,
	warnaSampul: [...buku.warnaSampul, ...warna],
	...dataBukuTambahan,
};

console.log(bukuSummary);

let stationaries = [
	"Semangka",
	"jeruk",
	"mangga",
	"strawberry",
	"nangka",
	"salak",
];

const arr = [1, 2, 3, 4, 5];

const [a, b, , , c] = arr;

console.log(c);
