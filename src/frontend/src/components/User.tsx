import {memo, useState} from "react";
import {useDispatch} from "react-redux";
import {Input} from "./Input";
import {createUserAction} from "../store/user/actions";

const User = memo(() => {
	const dispatch = useDispatch();

	const handleClick = () => dispatch(createUserAction({password: pass, email: email}));

	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");

	return (
		<>
			<div>
				<Input value={email} handle={setEmail} />
				<Input value={pass} handle={setPass} />
			</div>

			<button onClick={handleClick}>{"add user"}</button>
		</>
	);
});
User.displayName="User";

export {User};

