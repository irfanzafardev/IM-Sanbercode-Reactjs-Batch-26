import React from "react";
import axios from "axios";

class HomeSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
		};
	}

	componentDidMount() {
		axios
			.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
			.then((res) =>
				this.setState({
					games: res.data,
				})
			);
	}

	render() {
		return (
			<div>
				<section>
					<h1 style={{ textAlign: "center" }}>Popular Mobile Apps</h1>
					{this.state.games.map((el) => {
						return (
							<div>
								<h3>{el.name}</h3>
								<table>
									<tr>
										<td>
											<img
												src={el.image_url}
												style={{
													width: "600px",
													height: "400px",
												}}
												alt="game img"
											/>
										</td>
										<tr>
											<td>
												<b>Realease year : {el.release_year}</b>
											</td>
										</tr>
										<tr>
											<td>
												<b>Price: Rp.{el.price},-</b>
											</td>
										</tr>
										<tr>
											<td>
												<b>Rating: {el.rating}</b>
											</td>
										</tr>
										<tr>
											<td>
												<b>Size: {el.size} MB</b>
											</td>
										</tr>
										<tr>
											<td>
												<b>Platform: -</b>
											</td>
										</tr>
									</tr>
								</table>
								<p>
									<b>Description :</b> {el.description}
								</p>
								<hr />
							</div>
						);
					})}
				</section>
			</div>
		);
	}
}

export default HomeSection;
