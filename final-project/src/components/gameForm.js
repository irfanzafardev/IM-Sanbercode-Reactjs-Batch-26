import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap";

const GameListEditor = () => {
	const [game, setGame] = useState([]);
	const [inputname, setInputName] = useState("");
	const [inputrelease, setInputrelease] = useState(2021);
	const [inputGenre, setInputGenre] = useState("");
	const [inputPlatform, setInputPlatform] = useState("");
	const [inputPoster, setInputPoster] = useState("");
	const [currentGameId, setCurrentGameId] = useState(null);
	const [fetch, setFetch] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`https://backendexample.sanbersy.com/api/data-game`
			);

			setGame(
				result.data.map((el) => {
					const { id, name, release, genre, platform, poster } = el;
					return {
						id,
						name,
						release,
						genre,
						platform,
						poster,
					};
				})
			);
		};
		if (fetch) {
			fetchData();
			setFetch(false);
		}
	}, [fetch]);

	const handleChangeName = (event) => {
		let inputNameValue = event.target.value;
		setInputName(inputNameValue);
	};

	const handleChangerelease = (event) => {
		let inputReleasereleaseValue = event.target.value;
		setInputrelease(inputReleasereleaseValue);
	};

	const handleChangeGenre = (event) => {
		let inputPriceValue = event.target.value;
		setInputGenre(inputPriceValue);
	};

	const handleChangePlatform = (event) => {
		let inputPlatformValue = event.target.value;
		setInputPlatform(inputPlatformValue);
	};

	const handleChangePoster = (event) => {
		let inputRatingValue = event.target.value;
		setInputPoster(inputRatingValue);
	};

	const handleEdit = (event) => {
		let idgame = event.target.value;
		axios
			.get(`https://backendexample.sanbersy.com/api/data-game/${idgame}`)
			.then((res) => {
				let data = res.data;
				setInputName(data.name);
				setInputrelease(data.release);
				setInputGenre(data.genre);
				setInputPlatform(data.platform);
				setInputPoster(data.review);
				setCurrentGameId(idgame);
			});
	};

	const handleDelete = (event) => {
		let idgames = parseInt(event.target.value);
		axios
			.delete(`https://backendexample.sanbersy.com/api/data-game/${idgames}`)
			.then(() => {
				let newgame = game.filter((data) => {
					return data.id !== currentGameId;
				});
				setGame(newgame);
				setFetch(true);
			});
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();

	// 	const input = {
	// 		name: inputname,
	// 		release: inputrelease,
	// 		genre: inputGenre,
	// 		Platform: inputPlatform,
	// 		Poster: inputPoster,
	// 	};
	// 	if (currentGameId === null) {
	// 		axios
	// 			.post(`https://backendexample.sanbersy.com/api/data-game/`, input)
	// 			.then(() => {
	// 				setFetch(true);
	// 				history.push(`/games`);
	// 			});
	// 	} else {
	// 		axios
	// 			.put(
	// 				`https://backendexample.sanbersy.com/api/data-game/${currentGameId}`,
	// 				input
	// 			)
	// 			.then(() => {
	// 				setFetch(true);
	// 				history.push(`/games`);
	// 			});
	// 	}
	// 	setInputName("");
	// 	setInputrelease(2021);
	// 	setInputGenre("");
	// 	setInputPlatform("");
	// 	setInputPoster("");
	// 	setCurrentGameId(null);
	// };

	return (
		<>
			<section style={{ padding: "40px" }}>
				{game !== null && (
					<div style={{ margin: "0 auto" }}>
						<h1 style={{ textAlign: "center" }}>Game List</h1>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>No</th>
									<th>name</th>
									<th>Genre</th>
									<th>Year</th>
									<th>Platform</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{game.map((item, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{item.name}</td>
											<td>{item.genre}</td>
											<td>{item.release}</td>
											<td>{item.platform}</td>
											<td>
												<Button
													variant="secondary"
													onClick={handleEdit}
													value={item.id}
												>
													Edit
												</Button>
												&nbsp;
												<Button
													variant="secondary"
													onClick={handleDelete}
													value={item.id}
												>
													Delete
												</Button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</Table>

						<hr style={{ border: "1px solid" }} />

						<Form>
							<Form.Group className="mb-3">
								<Form.Label>name</Form.Label>
								<Form.Control
									type="text"
									value={inputname}
									onChange={handleChangeName}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Genre</Form.Label>
								<Form.Control
									type="text"
									value={inputGenre}
									onChange={handleChangeGenre}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Year</Form.Label>
								<Form.Control
									type="number"
									value={inputrelease}
									onChange={handleChangerelease}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Platform</Form.Label>
								<Form.Control
									type="text"
									value={inputPlatform}
									onChange={handleChangePlatform}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Poster</Form.Label>
								<Form.Control
									type="text"
									value={inputPoster}
									onChange={handleChangePoster}
								/>
							</Form.Group>

							<Button variant="primary" type="submit" value="Submit">
								Submit
							</Button>
						</Form>
					</div>
				)}
			</section>
		</>
	);
};

export default GameListEditor;
