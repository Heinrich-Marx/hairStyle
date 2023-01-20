import {createReducer} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {initialState, IUser} from "./initialState";
import {createUserAction} from "./actions";

const userReducer = createReducer(
	initialState,
	(builder) => {
		builder.addCase(createUserAction,
			(state, action:PayloadAction<IUser>) => {
				state.users = [...state.users, action.payload];
			});
	}
);

export {userReducer};