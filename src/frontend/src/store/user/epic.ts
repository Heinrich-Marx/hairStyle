import {TEpic} from "../root/rootEpic";
import {from, filter, switchMap, EMPTY} from "rxjs";
import {TAny} from "../../../../common/utils/types";
import {createUserApi} from "../Api/userApi";
import {createUserAction} from "./actions";

const createUserEpic: TEpic<TAny> = (action$) => action$.pipe(
	filter(createUserAction.match),
	switchMap(({payload}) => {
		from(createUserApi(payload.email, payload.password));

		return EMPTY;
	})
);

export {createUserEpic};