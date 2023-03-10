import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {Provider} from "react-redux";
import {rootStore} from "./store/root/rootStore";
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./store/apollo";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={rootStore}>
		<ApolloProvider client={apolloClient}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ApolloProvider>
	</Provider>
);
