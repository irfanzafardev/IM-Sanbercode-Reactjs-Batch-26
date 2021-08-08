import React from "react";
import axios from "axios";

import { Card, Typography } from "antd";
const { Meta } = Card;
const { Title } = Typography;

class PosterGameSection extends React.Component {
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
				<section>
					<Title
						style={{
							padding: "30px 0 0 30px",
							color: "#001529",
							fontSize: "30px",
						}}
						level={3}
					>
						Your Recommended Games
					</Title>
					{this.state.games.map((el) => {
						return (
							<div style={{ display: "inline-block", padding: "30px" }}>
								<Card
									hoverable
									style={{ width: 240 }}
									cover={<img alt="example" src={el.image_url} />}
								>
									<Meta title={el.name} description={el.genre} />
								</Card>
							</div>
						);
					})}
				</section>
			</div>
		);
	}
}

export default PosterGameSection;
