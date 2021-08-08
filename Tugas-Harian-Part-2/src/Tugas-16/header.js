import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
	const { Header } = Layout;
	return (
		<Header>
			<div className="logo" />
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
				<Menu.Item>
					<Link to="/">materi-9</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas10">materi-10</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas11">materi-11</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas12">materi-12</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas13">materi-13</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas14">materi-14</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas15">materi-15</Link>
				</Menu.Item>
				<Menu.Item>
					<Link to="/tugas16">materi-16</Link>
				</Menu.Item>
			</Menu>
		</Header>
	);
};

export default Header;

// import React from "react";
// import { Layout, Menu } from "antd";
// import { Link } from "react-router-dom";

// const Header = () => {
// 	const { Header } = Layout;
// 	return (
// 		<>
// 			<Header className="header">
// 				<div className="logo" />
// 				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
// 					<Menu.Item>
// 						<Link to="/">Tugas 9</Link>
// 					</Menu.Item>
// 					<Menu.Item>
// 						<Link to="/tugas10">Tugas 10</Link>
// 					</Menu.Item>
// 					<Menu.Item>
// 						<Link to="/tugas11">Tugas 11</Link>
// 					</Menu.Item>
// 					<Menu.Item>
// 						<Link to="/tugas12">Tugas 12</Link>
// 					</Menu.Item>
// 					<Menu.Item>
// 						<Link to="/tugas13">Tugas 13</Link>
// 					</Menu.Item>
// 					<Menu.Item>
// 						<Link to="/tugas14">Tugas 14</Link>
// 					</Menu.Item>
// 					<Menu.Item>
// 						<Link to="/tugas15">Tugas 15</Link>
// 					</Menu.Item>
// 				</Menu>
// 			</Header>
// 			;
// 		</>
// 	);
// };

// export default Header;
