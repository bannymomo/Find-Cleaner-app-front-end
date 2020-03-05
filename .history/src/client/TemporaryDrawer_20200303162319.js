import React from "react";
import Drawer from "@material-ui/core/Drawer";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import SideBar from "./Sidebar/SideBar";

export default function TemporaryDrawer() {
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false
	});

	const toggleDrawer = (side, open) => event => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	return (
		<div>
			<MenuRoundedIcon
				onClick={toggleDrawer("left", true)}
                fontSize="large"
                enableBackground="rgba(245, 246, 253, 0.9)"
			/>
			<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
				<SideBar />
			</Drawer>
		</div>
	);
}
