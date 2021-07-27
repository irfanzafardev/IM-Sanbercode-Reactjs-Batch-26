import React, { Component } from "react";

class WaktuDanTimer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 100,
			date: new Date(),
		};
	}

	componentDidMount() {
		this.hitungmundur = setInterval(() => this.hitungMundurTimer(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.hitungmundur);
	}

	hitungMundurTimer() {
		if (this.state.time > 0) {
			this.setState({
				time: this.state.time - 1,
				date: new Date(),
			});
		} else {
			clearInterval(1000);
		}
	}

	render() {
		return (
			<>
				{this.state.time > 0 ? (
					<>
						<div className="component-timer">
							<div className="component-timer-date">
								<h1 className="date">{this.state.date.toLocaleTimeString()}</h1>
							</div>
							<div className="component-timer-timer">
								<h1 className="timer">{this.state.time}</h1>
							</div>
						</div>
					</>
				) : (
					<></>
				)}
			</>
		);
	}
}

export default WaktuDanTimer;
