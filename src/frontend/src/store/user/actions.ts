import {createAction} from "@reduxjs/toolkit";
import {IUser} from "./initialState";

const createUserAction = createAction<IUser>("@USER/ADD_USER");

export {createUserAction};