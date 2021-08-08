import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Typography } from "antd";

const { Column } = Table;
const { Title } = Typography;

const MovieList = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				"https://backendexample.sanbersy.com/api/data-movie"
			);
			setMovies(
				result.data.map((movie) => {
					return {
						id: movie.id,
						title: movie.title,
						description: movie.description,
						yeard: movie.year,
						duration: movie.duration,
						genre: movie.genre,
						rating: movie.rating,
						review: movie.review,
						image_url: movie.image_url,
					};
				})
			);
		};
		fetchData();
	}, []);

	return (
		<div>
			<section>
				<Title
					style={{
						padding: "0px 20px 0 30px",
						color: "#001529",
						fontSize: "30px",
					}}
					level={3}
				>
					Movie List
				</Title>
				<Table
					dataSource={movies}
					pagination={{ pageSize: 4 }}
					style={{ padding: "0 0 0 30px" }}
				>
					<Column title="ID" dataIndex="id" key="id" />
					<Column title="Title" dataIndex="title" key="title" />
					<Column title="Year" dataIndex="yeard" key="year" />
					<Column title="Duration" dataIndex="duration" key="duration" />
					<Column title="Genre" dataIndex="genre" key="genre" />
					<Column title="Poster" dataIndex="image_url" key="image_url" />
				</Table>
			</section>
		</div>
	);
};

export default MovieList;
