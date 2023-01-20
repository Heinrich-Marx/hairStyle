import {TEpic} from "../root/rootEpic";
import {ofType} from "redux-observable";
import {mergeMap, from} from "rxjs";
import {IUser} from "./initialState";
import {TAny} from "../../../../utils/types";
import {createUserApi} from "../Api/userApi";

interface IAction {type: string, payload:IUser}

const createUserEpic: TEpic<TAny> = (action$) => action$.pipe(
	ofType("@USER/ADD_USER"),
	mergeMap(({payload}) => {

		return from(createUserApi(payload.email, payload.password));
	})

);

export {createUserEpic};

export type {IAction};