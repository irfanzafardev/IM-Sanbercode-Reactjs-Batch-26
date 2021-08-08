import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Typography } from "antd";

const { Column } = Table;
const { Title } = Typography;

const GameList = () => {
	const [games, setGame] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(
				"https://backendexample.sanbersy.com/api/data-game"
			);
			setGame(
				result.data.map((game) => {
					return {
						id: game.id,
						name: game.name,
						genre: game.genre,
						platform: game.platform,
						release: game.release,
						image_url: game.image_url,
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
						padding: "30px 0 30px 30px",
						color: "#001529",
						fontSize: "30px",
					}}
					level={3}
				>
					Games List
				</Title>
				<Table
					dataSource={games}
					pagination={{ pageSize: 4 }}
					style={{ padding: "0 0 0 30px" }}
				>
					<Column title="ID" dataIndex="id" key="id" />
					<Column title="Poster" dataIndex="image_url" key="image_url" />
					<Column title="Name" dataIndex="name" key="title" />
					<Column title="Year" dataIndex="genre" key="genre" />
					<Column title="Genre" dataIndex="release" key="year" />
					<Column title="Platform" dataIndex="platform" key="duration" />
				</Table>
			</section>
		</div>
	);
};

export default GameList;
