import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
	return (
		<Sider width={200} className="site-layout-background">
			<Menu
				mode="inline"
				defaultSelectedKeys={["1"]}
				defaultOpenKeys={["sub1"]}
				style={{ height: "100%", borderRight: 0 }}
			>
				<Menu.Item key="1">
					<Link to="/movie">For You</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/movie/detail">Movie detail</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/movie/form">Movie Form</Link>
				</Menu.Item>
			</Menu>
		</Sider>
	);
};

export default Sidebar;
