import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";
import {createEpicMiddleware} from "redux-observable";
import {rootEpic} from "./rootEpic";

const epicMiddleware = createEpicMiddleware();

const rootStore = configureStore({
	reducer: rootReducer,
	middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export {rootStore};