import {TEpic} from "../root/rootEpic";
import {ofType} from "redux-observable";
import {EMPTY, mergeMap} from "rxjs";
import {IUser} from "./initialState";
import {TAny} from "../../../../utils/types";
import {userApi} from "../Api/userApi";

interface IAction {type: string, payload:IUser}

const createUserEpic: TEpic<TAny> = (action$, state$) => action$.pipe(
    ofType("@USER/ADD_USER"),
    mergeMap(({payload}) => {

        userApi(payload.email, payload.password)
        return EMPTY
    })

)

export {createUserEpic}

export type {IAction}