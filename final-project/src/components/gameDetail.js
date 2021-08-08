import React from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import { Descriptions, Image, Typography } from "antd";
const { Title } = Typography;

class GameDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			games: [],
		};
	}

	componentDidMount() {
		axios.get(`https://backendexample.sanbersy.com/api/data-game`).then((res) =>
			this.setState({
				games: res.data,
			})
		);
	}

	render() {
		return (
			<div>
				{this.state.games.map((el) => {
					return (
						<>
							<Title>
								{el.name} ({el.release})
							</Title>
							<Container>
								<Row>
									<Col lg="3">
										<Image width="240px" src={el.image_url}></Image>
									</Col>
									<Col lg="6">
										<Descriptions title="Game Info">
											<Descriptions.Item label="Name">
												{el.name}
											</Descriptions.Item>
											<Descriptions.Item label="Year">
												{el.release}
											</Descriptions.Item>

											<Descriptions.Item label="Genre">
												{el.genre}
											</Descriptions.Item>
											<Descriptions.Item label="Platform">
												{el.platform}
											</Descriptions.Item>
										</Descriptions>
									</Col>
								</Row>
							</Container>
						</>
					);
				})}
			</div>
		);
	}
}

export default GameDetail;
