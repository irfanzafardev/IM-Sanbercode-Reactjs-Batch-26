var readBooks = require("./callback.js");

var books = [
	{ name: "LOTR", timeSpent: 3000 },
	{ name: "Fidas", timeSpent: 2000 },
	{ name: "Kalkulus", timeSpent: 4000 },
	{ name: "komik", timeSpent: 1000 },
];

function readingBook(timeForReading, books, i) {
	if (i < books.length) {
		readBooks(timeForReading, books[i], function (timeRemaining) {
			if (timeRemaining > 0) {
				i += 1;
				readingBook(timeRemaining, books, i);
			}
		});
	}
}

readingBook(10000, books, 0);
