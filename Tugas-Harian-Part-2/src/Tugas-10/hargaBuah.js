// import React from "react";

// let dataHargaBuah = [
// 	{ nama: "Semangka", harga: 10000, berat: 1000 },
// 	{ nama: "Anggur", harga: 40000, berat: 500 },
// 	{ nama: "Strawberry", harga: 30000, berat: 400 },
// 	{ nama: "Jeruk", harga: 30000, berat: 1000 },
// 	{ nama: "Mangga", harga: 30000, berat: 500 },
// ];

// class HargaBuah extends React.Component {
// 	render() {
// 		return (
// 			<header className="App-header">
// 				<table className="tableHargaBuah">
// 					<tr>
// 						<th>Nama</th>
// 						<th>Harga</th>
// 						<th>Berat</th>
// 					</tr>
// 					<tr>
// 						<td>Semangka</td>
// 						<td>10000</td>
// 						<td>1 kg</td>
// 					</tr>
// 					<tr>
// 						<td>Anggur</td>
// 						<td>40000</td>
// 						<td>0.5 kg</td>
// 					</tr>
// 					<tr>
// 						<td>Strawberry</td>
// 						<td>30000</td>
// 						<td>0.4 kg</td>
// 					</tr>
// 					<tr>
// 						<td>Jeruk</td>
// 						<td>30000</td>
// 						<td>1 kg</td>
// 					</tr>
// 					<tr>
// 						<td>Mangga</td>
// 						<td>30000</td>
// 						<td>0.5 kg</td>
// 					</tr>
// 				</table>
// 			</header>
// 		);
// 	}
// }

// export default HargaBuah;

import React from "react";

let dataHargaBuah = [
	{ nama: "Semangka", harga: 10000, berat: 1000 },
	{ nama: "Anggur", harga: 40000, berat: 500 },
	{ nama: "Strawberry", harga: 30000, berat: 400 },
	{ nama: "Jeruk", harga: 30000, berat: 1000 },
	{ nama: "Mangga", harga: 30000, berat: 500 },
];

class DataRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.dataBuah.nama}</td>
				<td>{this.props.dataBuah.harga}</td>
				<td>{this.props.dataBuah.berat / 1000} kg</td>
			</tr>
		);
	}
}

class DaftarBuah extends React.Component {
	render() {
		return (
			<header className="App-header">
				<h1 style={{ textAlign: "center" }}>Tugas 10</h1>
				<h1>Tabel Harga Buah</h1>
				<table className="tableHargaBuah">
					<tr>
						<th>Nama</th>
						<th>Harga</th>
						<th>Berat</th>
					</tr>
					{dataHargaBuah.map((hehe) => {
						return <DataRow dataBuah={hehe} />;
					})}
				</table>
			</header>
		);
	}
}

export default DaftarBuah;
