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
			/>
			<Drawer open={state.left} onClose={toggleDrawer("left", false)}>
				<SideBar onClose={setState} />
			</Drawer>
		</div>
	);
}
