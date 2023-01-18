interface IUser {email: string, password: string}

interface IInitialState {
    users: IUser[]
}

const initialState: IInitialState = {
	users: []
};

export {initialState};

export type {IUser};