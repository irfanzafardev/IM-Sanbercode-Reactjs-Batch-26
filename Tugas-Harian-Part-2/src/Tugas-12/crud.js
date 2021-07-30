import React, { Component } from "react";

class CRUDbuah extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataBuah: [
				{ nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
				{ nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
				{ nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
				{ nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
				{ nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
			],
			inputNama: "",
			inputHargaTotal: 0,
			inputBeratTotal: 2000,
			currentIndex: -1, //untuk menandakan create
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleDelete(event) {
		let deletedIndex = parseInt(event.target.value);
		let currentIndex = this.state.currentIndex;
		let newDataBuah = this.state.dataBuah;
		let editedDataBuah = newDataBuah[currentIndex];
		newDataBuah.splice(deletedIndex, 1);

		if (editedDataBuah !== undefined) {
			// array findIndex baru ada di ES6
			var newIndex = newDataBuah.findIndex((el) => el === editedDataBuah);
			this.setState({
				dataBuah: newDataBuah,
				currentIndex: newIndex,
			});
		} else {
			this.setState({
				dataBuah: newDataBuah,
			});
		}
	}

	handleEdit(event) {
		let editedIndex = parseInt(event.target.value);
		let singleBuah = this.state.dataBuah[editedIndex];
		this.setState({
			inputNama: singleBuah.nama,
			inputHargaTotal: singleBuah.hargaTotal,
			inputBeratTotal: singleBuah.beratTotal,
			currentIndex: editedIndex,
		});
	}

	handleSubmit(event) {
		// menahan submit
		event.preventDefault();

		let nama = this.state.inputNama;
		let hargaTotal = this.state.inputHargaTotal;
		let beratTotal = this.state.inputBeratTotal;

		let newDataBuah = this.state.dataBuah;
		let index = this.state.currentIndex;

		if (index === -1) {
			// berarti create data baru
			newDataBuah = [...newDataBuah, { nama, hargaTotal, beratTotal }];
		} else {
			// berarti update data yang sudah ada (dapat dari indexnya)
			newDataBuah[index] = { nama, hargaTotal, beratTotal };
		}

		this.setState({
			dataBuah: newDataBuah,
			inputNama: "",
			inputHargaTotal: 0,
			inputBeratTotal: 2000,
			currentIndex: -1,
		});
	}

	handleChange(event) {
		let value = event.target.value;
		let typeOfInput = event.target.name;
		this.setState({
			[typeOfInput]: value,
		});
	}

	render() {
		const containerStyle = { margin: "0 auto", width: "80%" };
		return (
			<div>
				<h1 style={{ textAlign: "center" }}>Tugas 12</h1>
				<header style={{ marginBottom: "30px" }} className="App-header">
					<h1 style={{ textAlign: "center" }}>Daftar Harga Buah</h1>
					<table>
						<tr>
							<th>No</th>
							<th>Nama</th>
							<th>Harga Total</th>
							<th>Berat Total</th>
							<th>Harga Per Kg</th>
							<th>Aksi</th>
						</tr>
						{this.state.dataBuah.map((el, index) => {
							return (
								<tr>
									<td>{index + 1}</td>
									<td>{el.nama}</td>
									<td>{el.hargaTotal}</td>
									<td>{el.beratTotal / 1000} Kg</td>
									<td>{el.hargaTotal / (el.beratTotal / 1000)}</td>
									<td>
										<button
											style={{ marginRight: "10px" }}
											onClick={this.handleEdit}
											value={index}
										>
											Edit
										</button>
										<button onClick={this.handleDelete} value={index}>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</table>
					{/* form */}
					<h1 style={{ textAlign: "center" }}>Form Daftar Harga Buah</h1>
					<form
						style={{
							...containerStyle,
							width: "60%",
							border: "1px solid #aaa",
							padding: "20px",
						}}
						onSubmit={this.handleSubmit}
					>
						<strong
							style={{
								width: "300px",
								marginBottom: "10px",
								display: "inline-block",
							}}
						>
							Nama
						</strong>
						<input
							style={{ display: "inline-block", float: "right" }}
							name="inputNama"
							onChange={this.handleChange}
							value={this.state.inputNama}
							type="text"
							required
						/>
						<br />
						<strong
							style={{
								width: "300px",
								marginBottom: "10px",
								display: "inline-block",
							}}
						>
							Harga Total
						</strong>
						<input
							style={{ display: "inline-block", float: "right" }}
							name="inputHargaTotal"
							onChange={this.handleChange}
							value={this.state.inputHargaTotal}
							type="number"
							required
						/>
						<br />
						<strong
							style={{
								width: "300px",
								marginBottom: "10px",
								display: "inline-block",
							}}
						>
							Berat Total (dalam gram)
						</strong>
						<input
							style={{ display: "inline-block", float: "right" }}
							name="inputBeratTotal"
							onChange={this.handleChange}
							value={this.state.inputBeratTotal}
							type="number"
							min={2000}
							required
						/>
						<br />
						<button
							style={{
								display: "inline-block",
								float: "right",
								marginBottom: "10px",
							}}
						>
							Submit
						</button>
						<br />
					</form>
				</header>
			</div>
		);
	}
}

export default CRUDbuah;
