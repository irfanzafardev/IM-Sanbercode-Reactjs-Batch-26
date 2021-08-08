import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Header from "./header";
import Section from "./section";

const { Content, Footer } = Layout;

const Main = () => {
	return (
		<Router>
			<Layout className="layout">
				<Header />
				<Content style={{ padding: "0 50px" }}>
					<div className="site-layout-content">
						<Section />
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Router>
	);
};

export default Main;
