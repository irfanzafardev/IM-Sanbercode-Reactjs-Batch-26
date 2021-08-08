import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SidebarGame = () => {
	return (
		<Sider width={200}>
			<Menu
				mode="inline"
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				style={{ height: "100%", borderRight: 0 }}
			>
				<Menu.Item key="1">
					<Link to="/game">For You</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/game/detail">Game Detail</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/game/form">Game Form</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default SidebarGame;
