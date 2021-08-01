import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const GameListEditor = () => {
	let history = useHistory();

	const [games, setGames] = useState([]);
	const [inputName, setInputName] = useState("");
	const [inputCategory, setInputCategory] = useState("");
	const [inputDescription, setInputDescription] = useState("");
	const [inputReleaseYear, setInputReleaseYear] = useState(2021);
	const [inputSize, setInputSize] = useState(0);
	const [inputPrice, setInputPrice] = useState(0);
	const [inputRating, setInputRating] = useState(0);
	const [currentGameId, setCurrentGameId] = useState(null);
	const [fetch, setFetch] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`http://backendexample.sanbercloud.com/api/mobile-apps`
			);

			setGames(
				result.data.map((el) => {
					const {
						id,
						name,
						description,
						category,
						size,
						price,
						rating,
						image_url,
						release_year,
					} = el;
					return {
						id,
						name,
						description,
						category,
						size,
						price,
						rating,
						image_url,
						release_year,
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

	const handleChangeCategory = (event) => {
		let inputCategoryValue = event.target.value;
		setInputCategory(inputCategoryValue);
	};

	const handleChangeDescription = (event) => {
		let inputDescriptionValue = event.target.value;
		setInputDescription(inputDescriptionValue);
	};

	const handleChangeReleaseYear = (event) => {
		let inputReleaseYearValue = event.target.value;
		setInputReleaseYear(inputReleaseYearValue);
	};

	const handleChangeSize = (event) => {
		let inputSizeValue = event.target.value;
		setInputSize(inputSizeValue);
	};

	const handleChangePrice = (event) => {
		let inputPriceValue = event.target.value;
		setInputPrice(inputPriceValue);
	};

	const handleChangeRating = (event) => {
		let inputRatingValue = event.target.value;
		setInputRating(inputRatingValue);
	};

	const handleEdit = (event) => {
		let idGame = event.target.value;
		axios
			.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${idGame}`)
			.then((res) => {
				let data = res.data;
				setInputName(data.name);
				setInputCategory(data.category);
				setInputDescription(data.description);
				setInputReleaseYear(data.release_year);
				setInputSize(data.size);
				setInputPrice(data.price);
				setInputRating(data.rating);
				setCurrentGameId(idGame);
			});
	};

	const handleDelete = (event) => {
		let idGames = parseInt(event.target.value);
		axios
			.delete(
				`http://backendexample.sanbercloud.com/api/mobile-apps/${idGames}`
			)
			.then(() => {
				let newGame = games.filter((data) => {
					return data.id !== currentGameId;
				});
				setGames(newGame);
				setFetch(true);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const input = {
			name: inputName,
			category: inputCategory,
			description: inputDescription,
			release_year: inputReleaseYear,
			size: inputSize,
			price: inputPrice,
			rating: inputRating,
		};
		if (currentGameId === null) {
			axios
				.post(`http://backendexample.sanbercloud.com/api/mobile-apps/`, input)
				.then(() => {
					setFetch(true);
					history.push(`/games`);
				});
		} else {
			axios
				.put(
					`http://backendexample.sanbercloud.com/api/mobile-apps/${currentGameId}`,
					input
				)
				.then(() => {
					setFetch(true);
					history.push(`/games`);
				});
		}
		setInputName("");
		setInputDescription("");
		setInputDescription("");
		setInputReleaseYear(2020);
		setInputSize(0);
		setInputPrice(0);
		setInputRating(0);
		setCurrentGameId(null);
	};

	return (
		<>
			<section>
				{games !== null && (
					<div style={{ margin: "0 auto" }}>
						<h1 style={{ textAlign: "center" }}>Mobile App List</h1>
						<table className="daftar-buku">
							<thead>
								<tr>
									<th>No</th>
									<th>Name</th>
									<th>Category</th>
									<th>Description</th>
									<th>Release Year</th>
									<th>Size</th>
									<th>Price</th>
									<th>Rating</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{games.map((item, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{item.name}</td>
											<td>{item.category}</td>
											<td>{item.description}</td>
											<td>{item.release_year}</td>
											<td>{item.size}</td>
											<td>{item.price}</td>
											<td>{item.rating}</td>
											<td>{item.index}</td>
											<td>
												<button onClick={handleEdit} value={item.id}>
													Edit
												</button>
												&nbsp;
												<button onClick={handleDelete} value={item.id}>
													Delete
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
						<hr style={{ border: "1px solid" }} />
						<form
							onSubmit={handleSubmit}
							style={{
								width: "60%",
								border: "1px solid #aaa",
								padding: "20px",
							}}
						>
							<tr style={{ marginBottom: "200px" }}>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Title:</b>
									</label>
								</td>
								<td>
									<input
										type="text"
										value={inputName}
										onChange={handleChangeName}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Kategori:</b>
									</label>
								</td>
								<td>
									<input
										type="text"
										value={inputCategory}
										onChange={handleChangeCategory}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Deskripsi:</b>
									</label>
								</td>
								<td>
									<textarea
										type="text"
										value={inputDescription}
										onChange={handleChangeDescription}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Release Year:</b>
									</label>
								</td>
								<td>
									<input
										type="number"
										value={inputReleaseYear}
										onChange={handleChangeReleaseYear}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Size:</b>
									</label>
								</td>
								<td>
									<input
										type="number"
										value={inputSize}
										onChange={handleChangeSize}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Price:</b>
									</label>
								</td>
								<td>
									<input
										type="number"
										value={inputPrice}
										onChange={handleChangePrice}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label
										style={{
											width: "200px",
											marginBottom: "50px",
											display: "inline-block",
										}}
									>
										<b>Rating:</b>
									</label>
								</td>
								<td>
									<input
										type="number"
										value={inputRating}
										onChange={handleChangeRating}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<input type="submit" value="Submit" />
								</td>
							</tr>
						</form>
					</div>
				)}
			</section>
		</>
	);
};

export default GameListEditor;
