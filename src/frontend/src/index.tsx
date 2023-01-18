import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {rootStore} from "./store/root/rootStore";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={rootStore}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
