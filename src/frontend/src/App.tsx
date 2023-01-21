import React from "react";
import {User} from "./components/User";
import classes from "./style.module.scss";

const App = () => (
	<div className={classes.name}>
		<User/>
	</div>
);

export default App;
