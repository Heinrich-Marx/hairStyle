import {filter, Observable} from "rxjs";
import {TAny} from "../../../../common/utils/types";
import {Action} from "redux";
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {PayloadAction} from "@reduxjs/toolkit/src/createAction";

const isCreator = <T extends TAny = TAny>(...actions:  ActionCreatorWithPayload<T>[]) => {
	const actionsTypes = actions.map((act) => act.type);
	return (observable: Observable<Action>) => observable.pipe(
		filter(({type}) => actionsTypes.includes(type))
	) as Observable<PayloadAction<T>>;
};


export {isCreator};