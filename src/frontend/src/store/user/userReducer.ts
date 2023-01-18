import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {initialState, IUser} from "./initialState";

export const userSlice = createSlice({
	name: "@USER",
	initialState,
	reducers: {
		ADD_USER: (state, action:PayloadAction<IUser>) => {
			state.users = [...state.users, action.payload];
		}
	}
});

export const {ADD_USER} = userSlice.actions;

export default userSlice.reducer;