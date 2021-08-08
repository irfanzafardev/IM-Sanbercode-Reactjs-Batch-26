import React from "react";
import { Carousel } from "react-bootstrap";

import backgroundGame from "../assets/img/backgroundGame.jpg";
import backgroundGame2 from "../assets/img/backgroundGame2.jpg";

const Slider = () => {
	const contentStyle = {
		height: "400px",
		objectFit: "cover",
	};
	return (
		<Carousel>
			<Carousel.Item>
				<img
					style={contentStyle}
					className="d-block w-100"
					src={backgroundGame2}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3 style={{ color: "#fff" }}>Let's play games</h3>
					<p>See your favorite movies below</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={contentStyle}
					className="d-block w-100"
					src={backgroundGame}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3 style={{ color: "#fff" }}>Let's play games</h3>
					<p>See your favorite movies below</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
