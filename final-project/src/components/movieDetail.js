import React from "react";
import axios from "axios";

import { Container, Row, Col } from "react-bootstrap";

import { Descriptions, Image, Typography } from "antd";
const { Title } = Typography;

class MovieDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
		};
	}

	componentDidMount() {
		axios
			.get(`https://backendexample.sanbersy.com/api/data-movie`)
			.then((res) =>
				this.setState({
					movies: res.data,
				})
			);
	}

	render() {
		return (
			<div>
				{this.state.movies.map((el) => {
					return (
						<>
							<Title>
								{el.title} ({el.year})
							</Title>
							<Container>
								<Row>
									<Col lg="3">
										<Image width="240px" src={el.image_url}></Image>
									</Col>
									<Col lg="6">
										<Descriptions title="Movie Info">
											<Descriptions.Item label="Title">
												{el.title}
											</Descriptions.Item>
											<Descriptions.Item label="Year">
												{el.year}
											</Descriptions.Item>
											<Descriptions.Item label="Duration">
												{el.duration}
											</Descriptions.Item>
											<Descriptions.Item label="Genre">
												{el.genre}
											</Descriptions.Item>
											<Descriptions.Item label="Rating">
												{el.rating}/10
											</Descriptions.Item>
											<Descriptions.Item label="">
												{/* {el.rating}/10 */}
											</Descriptions.Item>
											<Descriptions.Item label="Rating">
												{el.description}
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

export default MovieDetail;
