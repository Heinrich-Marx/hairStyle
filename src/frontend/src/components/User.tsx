import {memo, useState} from "react";
import {useDispatch} from "react-redux";
import {ADD_USER} from "../store/user/userReducer";
import {Input} from "./Input";

const User = memo(() => {
    const dispatch = useDispatch()

    const handleClick = () => dispatch(ADD_USER({password: pass, email: email}))

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    return (
        <>
            <div>
                <Input value={email} handle={setEmail} />
                <Input value={pass} handle={setPass} />
            </div>

            <button onClick={handleClick}>{"add user"}</button>
        </>
    )
})

export {User}

