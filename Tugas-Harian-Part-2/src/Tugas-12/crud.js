import React, { Component } from "react";

let daftarBuah = [
	{ nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
	{ nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
	{ nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
	{ nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
	{ nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
];

class CRUDbuah extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buah: daftarBuah,
			inputBuah: {
				nama: "",
				hargaTotal: "",
				beratTotal: "",
			},
		};
		this.handleName = this.handleName.bind(this);
		this.handlePrice = this.handlePrice.bind(this);
		this.handleWeight = this.handleWeight.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.inputBuah.beratTotal < 2000) {
			alert("The weight must be more than 2 Kg");
		} else {
			this.setState({
				buah: [...this.state.buah, this.state.inputBuah],
				inputBuah: {
					nama: "",
					hargaTotal: "",
					beratTotal: "",
				},
			});
		}
	};

	handleName = (event) => {
		let inputBuah = this.state.inputBuah;
		inputBuah.nama = event.target.value;

		this.setState({
			inputBuah: inputBuah,
		});
	};

	handlePrice = (event) => {
		let inputBuah = this.state.inputBuah;
		inputBuah.hargaTotal = event.target.value;

		this.setState({
			inputBuah: inputBuah,
		});
	};

	handleWeight = (event) => {
		let inputBuah = this.state.inputBuah;
		inputBuah.beratTotal = event.target.value;
		this.setState({
			inputBuah: inputBuah,
		});
	};

	handleEdit = (event) => {
		let array = [...this.state.buah];
		let index = event.target.value;
		console.log(index);
		let newBuah = array[index];
		this.setState({
			inputBuah: newBuah,
		});
	};

	handleDelete = (event) => {
		let array = [...this.state.buah];
		let index = event.target.value;
		if (index !== -1) {
			array.splice(index, 1);
			this.setState({
				buah: array,
			});
		}
	};

	render() {
		return (
			<>
				<h1 style={{ textAlign: "center" }}>Tugas 12</h1>
				<header style={{ marginBottom: "30px" }} className="App-header">
					<div>
						<h1 style={{ textAlign: "center" }}>Daftar Harga Buah</h1>
						<table>
							<thead>
								<tr>
									<th>No</th>
									<th>Nama</th>
									<th>Harga Total</th>
									<th>Berat Total</th>
									<th>Harga per Kg</th>
									<th>Aksi</th>
								</tr>
							</thead>
							<tbody>
								{this.state.buah.map((val, index) => {
									return (
										<tr>
											<td>{index + 1}</td>
											<td>{val.nama}</td>
											<td>{val.hargaTotal}</td>
											<td>{val.beratTotal / 1000} kg</td>
											<td>{val.hargaTotal / (val.beratTotal / 1000)}</td>
											<td>
												<button
													style={{ marginRight: "10px" }}
													value={index}
													onClick={this.handleEdit}
												>
													Edit
												</button>
												<button value={index} onClick={this.handleDelete}>
													Delete
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<h1 style={{ textAlign: "center" }}>Form Daftar Harga Buah</h1>
						<form
							onSubmit={this.handleSubmit}
							style={{ border: "1px solid #000", padding: "10px" }}
						>
							<div style={{ marginBottom: "10px" }}>
								<label for="nama">
									<b>Nama: </b>
								</label>
								<input
									style={{ float: "right" }}
									type="text"
									defaultValue={this.state.inputBuah.nama}
									onChange={this.handleName}
								/>
							</div>
							<div style={{ marginBottom: "10px" }}>
								<label for="hargaTotal">
									<b>Harga Total: </b>
								</label>
								<input
									style={{ float: "right" }}
									type="text"
									defaultValue={this.state.inputBuah.hargaTotal}
									onChange={this.handlePrice}
								/>
							</div>
							<div style={{ marginBottom: "10px" }}>
								<label for="beratTotal">
									<b>Berat Total (dalam gram): </b>
								</label>
								<input
									style={{ float: "right" }}
									type="text"
									defaultValue={this.state.inputBuah.beratTotal}
									onChange={this.handleWeight}
								/>
							</div>
							<input style={{ float: "right" }} type="submit" value="Submit" />
						</form>
					</div>
				</header>
			</>
		);
	}
}

export default CRUDbuah;
