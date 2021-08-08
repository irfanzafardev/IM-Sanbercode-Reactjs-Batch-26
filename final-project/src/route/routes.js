import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Sidebar from "../layouts/sidebar";
import SidebarGame from "../layouts/sidebarGame";
import Futer from "../layouts/footer";

import Slider from "../layouts/carouselMovie";
import SliderGame from "../layouts/carouselGame";
import PosterSection from "../components/moviePoster";
import MovieList from "../components/movieList";
import MovieForm from "../components/movieForm";
import MovieDetail from "../components/movieDetail";

import PosterGameSection from "../components/gamePoster";
import GameList from "../components/gameList";
import GameDetail from "../components/gameDetail";
import GameForm from "../components/gameForm";

import { Layout, Menu } from "antd";

import logo from "../assets/img/logo.png";

const { Header, Content } = Layout;

const Routes = () => {
	const ImgStyle = {
		width: "100px",
		display: "inline-block",
	};
	return (
		<Router>
			<Header className="header">
				<img style={ImgStyle} src={logo} alt="img"></img>
				<Menu
					style={{ display: "inline-block", float: "right" }}
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={["1"]}
				>
					<Menu.Item key="1">
						<Link to="/movie">Movie</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Link to="/game">Game</Link>
					</Menu.Item>
				</Menu>
			</Header>
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<Layout className="sidebar">
							<Sidebar />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<Slider />
									<PosterSection />
									<MovieList />
								</Content>
							</Layout>
						</Layout>
					</Route>
					<Route exact path="/movie">
						<Layout className="sidebar">
							<Sidebar />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<Slider />
									<PosterSection />
									<MovieList />
								</Content>
							</Layout>
						</Layout>
					</Route>
					<Route exact path="/game">
						<Layout className="sidebar">
							<SidebarGame />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<SliderGame />
									<PosterGameSection />
									<GameList />
								</Content>
							</Layout>
						</Layout>
					</Route>
					<Route exact path="/movie/form">
						<Layout className="sidebar">
							<Sidebar />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<MovieForm />
								</Content>
							</Layout>
						</Layout>
					</Route>
					<Route exact path="/movie/detail">
						<Layout className="sidebar">
							<Sidebar />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<MovieDetail />
								</Content>
							</Layout>
						</Layout>
					</Route>
					<Route exact path="/game/form">
						<Layout className="sidebar">
							<SidebarGame />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<GameForm />
								</Content>
							</Layout>
						</Layout>
					</Route>
					<Route exact path="/game/detail">
						<Layout className="sidebar">
							<SidebarGame />
							<Layout style={{ padding: "20px 20px 20px 20px" }}>
								<Content className="content">
									<GameDetail />
								</Content>
							</Layout>
						</Layout>
					</Route>
				</Switch>
			</div>
			<Futer />
		</Router>
	);
};
export default Routes;
