import React from "react";

const About = () => {
	let myData = {
		nama: "Irfan Zafar",
		email: "01.irfanzafar@gmail.com",
		os: "Microsoft Win 10",
		gitlab: "@irfanzafardev",
		telegram: "081388567800",
	};

	return (
		<div>
			<Render props={myData} />
		</div>
	);
};

function Render({ props }) {
	return (
		<div style={{}}>
			<section>
				<h1 style={{ textAlign: "center" }}>
					Data Peserta Sanbercode Bootcamp Reactjs
				</h1>
				<table>
					<ol>
						<li>
							<tr>
								<td>
									<strong>Nama:</strong>
								</td>
								<td>{props.nama}</td>
							</tr>
						</li>
						<li>
							<tr>
								<td>
									<strong>Email:</strong>
								</td>
								<td>{props.email}</td>
							</tr>
						</li>
						<li>
							<tr>
								<td>
									<strong>Sistem Operasi :</strong>
								</td>
								<td>{props.os}</td>
							</tr>
						</li>
						<li>
							<tr>
								<td>
									<strong>Akun Gitlab:</strong>
								</td>
								<td>{props.gitlab}</td>
							</tr>
						</li>
						<li>
							<tr>
								<td>
									<strong>Akun Telegram:</strong>
								</td>
								<td>{props.telegram}</td>
							</tr>
						</li>
					</ol>
				</table>
			</section>
		</div>
	);
}

export default About;
