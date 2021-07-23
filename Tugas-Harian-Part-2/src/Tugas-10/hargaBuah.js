import React from "react";

class HargaBuah extends React.Component {
	render() {
		return (
			<header className="App-header">
				<table className="tableHargaBuah">
					<tr>
						<th>Nama</th>
						<th>Harga</th>
						<th>Berat</th>
					</tr>
					<tr>
						<td>Semangka</td>
						<td>10000</td>
						<td>1 kg</td>
					</tr>
					<tr>
						<td>Anggur</td>
						<td>40000</td>
						<td>0.5 kg</td>
					</tr>
					<tr>
						<td>Strawberry</td>
						<td>30000</td>
						<td>0.4 kg</td>
					</tr>
					<tr>
						<td>Jeruk</td>
						<td>30000</td>
						<td>1 kg</td>
					</tr>
					<tr>
						<td>Mangga</td>
						<td>30000</td>
						<td>0.5 kg</td>
					</tr>
				</table>
			</header>
		);
	}
}

export default HargaBuah;
