import {combineEpics, StateObservable} from "redux-observable";
import {createUserEpic} from "../user/epic";
import {Observable} from "rxjs";
import {Action} from "redux";
import {TAny} from "../../../../utils/types";

type TEpic<A extends Action = Action, S extends TAny = TAny> = (action$: Observable<A>, state$: StateObservable<S>) => Observable<A>

const rootEpic = combineEpics(
	createUserEpic
);

export {rootEpic};

export type {TEpic};