import React from "react";

class FormBuah extends React.Component {
	render() {
		return (
			<header className="App-header">
				<h1 style={{ textAlign: "center" }}>Tugas 9</h1>
				<div
					className="FormBuah"
					style={{
						width: "40vw",
						border: "1px solid black",
						borderRadius: "10px",
					}}
				>
					<h1 style={{ textAlign: "center" }}>Form Pembelian Buah</h1>
					<form action="">
						<table>
							<tr>
								<td>
									<label style={{ fontWeight: "bold" }} for="fname">
										Nama pelanggan
									</label>
								</td>
								<td>
									<input type="text" id="fname" name="fname" />
								</td>
							</tr>
							<tr>
								<td>
									<label style={{ fontWeight: "bold" }} for="fname">
										Daftar Item
									</label>
								</td>

								<td>
									<input name="mail" type="checkbox" />
									Semangka
									<br />
									<input name="payroll" type="checkbox" />
									Jeruk
									<br />
									<input name="selfservice" type="checkbox" />
									Nanas
									<br />
									<input name="selfservice" type="checkbox" />
									Salak
									<br />
									<input name="selfservice" type="checkbox" />
									Anggur
									<br />
								</td>
							</tr>
							<input
								style={{
									margin: "15px",
									borderRadius: "10px",
									fontWeight: "bolder",
								}}
								type="submit"
								value="Kirim"
							/>
						</table>
					</form>
				</div>
			</header>
		);
	}
}

export default FormBuah;
