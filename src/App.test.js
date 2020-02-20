import React from "react";
import ReactDOM from "react-dom";

import { StaticRouter } from "react-router-dom";
import App from "./App";
// import { it } from "date-fns/locale";

test("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<StaticRouter>
			<App />
		</StaticRouter>,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});
