import React from "react";
import { Carousel } from "react-bootstrap";

import backgroundMovie from "../assets/img/backgroundMovie.jpg";
import backgroundMovie2 from "../assets/img/backgroundMovie2.jpg";

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
					src={backgroundMovie}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3 style={{ color: "#fff" }}>Let's watch movies</h3>
					<p>See your favorite movies below</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					style={contentStyle}
					className="d-block w-100"
					src={backgroundMovie2}
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3 style={{ color: "#fff" }}>Let's watch movies</h3>
					<p>See your favorite movies below</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
