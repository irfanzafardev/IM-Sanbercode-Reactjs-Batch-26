// Tugas 3 by Irfan Zafar

// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var upperKedua = kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1);
var upperKetiga =
	kataKetiga.substring(0, 6) + kataKetiga.charAt(6).toUpperCase();
var upperKeempat = kataKeempat.toUpperCase();

var gabunganKata =
	kataPertama + " " + upperKedua + " " + upperKetiga + " " + upperKeempat;
console.log(gabunganKata);

// Soal 2
var panjangPersegiPanjang = "8";
var lebarPersegiPanjang = "5";

var alasSegitiga = "6";
var tinggiSegitiga = "7";

var kelilingPersegiPanjang =
	2 * (parseInt(panjangPersegiPanjang) + parseInt(lebarPersegiPanjang));
console.log(kelilingPersegiPanjang);

var luasSegitiga = (parseInt(tinggiSegitiga) * parseInt(alasSegitiga)) / 2;
console.log(luasSegitiga);

// Soal 3
var sentences = "wah javascript itu keren sekali";

var firstWord = sentences.substring(0, 3);
var secondWord = sentences.substring(4, 14);
var thirdWord = sentences.substring(14, 18);
var fourthWord = sentences.substring(19, 25);
var fifthWord = sentences.substring(25, 32);

console.log("Kata Pertama: " + firstWord);
console.log("Kata Kedua: " + secondWord);
console.log("Kata Ketiga: " + thirdWord);
console.log("Kata Keempat: " + fourthWord);
console.log("Kata Kelima: " + fifthWord);

//soal 4
var nilaiJohn = 80;

if (nilaiJohn >= 80) {
	console.log("indeks  = A");
} else if (nilaiJohn >= 70 && nilaiJohn < 80) {
	console.log("indeks  = B");
} else if (nilaiJohn >= 60 && nilaiJohn < 70) {
	console.log("indeks  = C");
} else if (nilaiJohn >= 50 && nilaiJohn < 60) {
	console.log("indeks  = D");
} else {
	console.log("error");
}

var nilaiDoe = 50;

if (nilaiDoe >= 80) {
	console.log("indeks  = A");
} else if (nilaiDoe >= 70 && nilaiDoe < 80) {
	console.log("indeks  = B");
} else if (nilaiDoe >= 60 && nilaiDoe < 70) {
	console.log("indeks  = C");
} else if (nilaiDoe >= 50 && nilaiDoe < 60) {
	console.log("indeks  = D");
} else {
	console.log("error");
}

//soal 5

var tanggal = 15;
var bulan = 6;
var tahun = 2001;

var strBulan;

switch (bulan) {
	case 1: {
		strBulan = "Januari";
		break;
	}
	case 2: {
		strBulan = "Februari";
		break;
	}
	case 3: {
		strBulan = "Maret";
		break;
	}
	case 4: {
		strBulan = "April";
		break;
	}
	case 5: {
		strBulan = "Mei";
		break;
	}
	case 6: {
		strBulan = "Juni";
		break;
	}
	case 7: {
		strBulan = "Juli";
		break;
	}
	case 8: {
		strBulan = "Agustus";
		break;
	}
	case 9: {
		strBulan = "September";
		break;
	}
	case 10: {
		strBulan = "Oktober";
		break;
	}
	case 11: {
		strBulan = "November";
		break;
	}
	case 12: {
		strBulan = "Desember";
		break;
	}
	default: {
		strBulan = "Undefined";
		break;
	}
}
console.log(tanggal + " " + strBulan + " " + tahun);
