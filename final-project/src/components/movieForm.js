import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap";

const MovieListEditor = () => {
	const [movie, setMovie] = useState([]);
	const [inputTitle, setInputTitle] = useState("");
	const [inputDescription, setInputDescription] = useState("");
	const [inputYear, setInputYear] = useState(2021);
	const [inputDuration, setInputDuration] = useState(0);
	const [inputGenre, setInputGenre] = useState(0);
	const [inputRating, setInputRating] = useState(0);
	const [inputReview, setInputReview] = useState(0);
	const [currentMovieId, setCurrentMovieId] = useState(null);
	const [fetch, setFetch] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				`https://backendexample.sanbersy.com/api/data-movie`
			);

			setMovie(
				result.data.map((el) => {
					const {
						id,
						title,
						description,
						year,
						duration,
						genre,
						rating,
						review,
					} = el;
					return {
						id,
						title,
						description,
						year,
						duration,
						genre,
						rating,
						review,
					};
				})
			);
		};
		if (fetch) {
			fetchData();
			setFetch(false);
		}
	}, [fetch]);

	const handleChangeTitle = (event) => {
		let inputNameValue = event.target.value;
		setInputTitle(inputNameValue);
	};

	const handleChangeDescription = (event) => {
		let inputDescriptionValue = event.target.value;
		setInputDescription(inputDescriptionValue);
	};

	const handleChangeYear = (event) => {
		let inputReleaseYearValue = event.target.value;
		setInputYear(inputReleaseYearValue);
	};

	const handleChangeDuration = (event) => {
		let inputSizeValue = event.target.value;
		setInputDuration(inputSizeValue);
	};

	const handleChangeGenre = (event) => {
		let inputPriceValue = event.target.value;
		setInputGenre(inputPriceValue);
	};

	const handleChangeRating = (event) => {
		let inputRatingValue = event.target.value;
		setInputRating(inputRatingValue);
	};

	const handleChangeReview = (event) => {
		let inputRatingValue = event.target.value;
		setInputReview(inputRatingValue);
	};

	const handleEdit = (event) => {
		let idMovie = event.target.value;
		axios
			.get(`https://backendexample.sanbersy.com/api/data-movie/${idMovie}`)
			.then((res) => {
				let data = res.data;
				setInputTitle(data.name);
				setInputDescription(data.description);
				setInputYear(data.year);
				setInputDuration(data.duration);
				setInputGenre(data.genre);
				setInputRating(data.rating);
				setInputReview(data.review);
				setCurrentMovieId(idMovie);
			});
	};

	const handleDelete = (event) => {
		let idMovies = parseInt(event.target.value);
		axios
			.delete(`https://backendexample.sanbersy.com/api/data-movie/${idMovies}`)
			.then(() => {
				let newMovie = movie.filter((data) => {
					return data.id !== currentMovieId;
				});
				setMovie(newMovie);
				setFetch(true);
			});
	};

	// const handleSubmit = (event) => {
	// 	event.preventDefault();

	// 	const input = {
	// 		title: inputTitle,
	// 		description: inputDescription,
	// 		year: inputYear,
	// 		duration: inputDuration,
	// 		genre: inputGenre,
	// 		rating: inputRating,
	// 		review: inputReview,
	// 	};
	// 	if (currentMovieId === null) {
	// 		axios
	// 			.post(`https://backendexample.sanbersy.com/api/data-movie/`, input)
	// 			.then(() => {
	// 				setFetch(true);
	// 				history.push(`/games`);
	// 			});
	// 	} else {
	// 		axios
	// 			.put(
	// 				`https://backendexample.sanbersy.com/api/data-movie/${currentMovieId}`,
	// 				input
	// 			)
	// 			.then(() => {
	// 				setFetch(true);
	// 				history.push(`/games`);
	// 			});
	// 	}
	// 	setInputTitle("");
	// 	setInputDescription("");
	// 	setInputYear(2021);
	// 	setInputDuration(0);
	// 	setInputGenre("");
	// 	setInputRating(0);
	// 	setInputReview("");
	// 	setCurrentMovieId(null);
	// };

	return (
		<>
			<section style={{ padding: "40px" }}>
				{movie !== null && (
					<div style={{ margin: "0 auto" }}>
						<h1 style={{ textAlign: "center" }}>Movie List</h1>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>No</th>
									<th>Title</th>
									<th>Genre</th>
									<th>Description</th>
									<th>Year</th>
									<th>Duration</th>
									<th>Rating</th>
									<th>Review</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{movie.map((item, index) => {
									return (
										<tr key={index}>
											<td>{index + 1}</td>
											<td>{item.title}</td>
											<td>{item.genre}</td>
											<td>{item.description}</td>
											<td>{item.year}</td>
											<td>{item.duration}</td>
											<td>{item.rating}</td>
											<td>{item.review}</td>
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
								<Form.Label>Title</Form.Label>
								<Form.Control
									type="text"
									value={inputTitle}
									onChange={handleChangeTitle}
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
								<Form.Label>Deskripsi</Form.Label>
								<Form.Control
									type="text"
									value={inputDescription}
									onChange={handleChangeDescription}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Year</Form.Label>
								<Form.Control
									type="text"
									value={inputYear}
									onChange={handleChangeYear}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Duration</Form.Label>
								<Form.Control
									type="text"
									value={inputDuration}
									onChange={handleChangeDuration}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Rating</Form.Label>
								<Form.Control
									type="text"
									value={inputRating}
									onChange={handleChangeRating}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Review</Form.Label>
								<Form.Control
									type="text"
									value={inputReview}
									onChange={handleChangeReview}
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

export default MovieListEditor;
