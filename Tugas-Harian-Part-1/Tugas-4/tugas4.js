// Tugas 4 by Irfan Zafar

// soal 1
// Looping pertama
var flag = 2;
while (flag < 21) {
	console.log(flag + " - I love coding");
	flag = flag + 2;
}

// Looping kedua
var flag = 20;
while (flag > 0) {
	console.log(flag + " - I love coding");
	flag = flag - 2;
}

// soal 2
for (i = 1; i < 21; i++) {
	if (i % 3 == 0 && i % 2 == 1) {
		console.log(i + " - I Love Coding");
	} else if (i % 2 == 1) {
		console.log(i + " - Santai");
	} else if (i % 2 == 0) {
		console.log(i + " - Berkualitas");
	}
}

// soal 3
var triangle = "#";
while (triangle.length <= 7) {
	console.log(triangle);
	triangle = triangle + "#";
}

// Soal 4
var kalimat = [
	"aku",
	"saya",
	"sangat",
	"sangat",
	"senang",
	"belajar",
	"javascript",
];

var kalimatBaru = ["saya", "sangat", "senang", "belajar", "javascript"];

kalimat.shift();
kalimat.splice(2, 1);

console.log(kalimat.join(" "));

// soal 5
var sayuran = [];

sayuran.push("Kangkung");
sayuran.push("Bayam");
sayuran.push("Buncis");
sayuran.push("Kubis");
sayuran.push("Timun");
sayuran.push("Seledri");
sayuran.push("Tauge");

sayuran.sort();

var j;
for (i = 0, j = 1; i < sayuran.length, j < sayuran.length + 1; i++, j++) {
	console.log(j + ". " + sayuran[i]);
}
