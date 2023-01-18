import {ChangeEvent, Dispatch, memo, SetStateAction} from "react";

interface IInput {
    value: string
    handle: Dispatch<SetStateAction<string>>
    className?: string
}

// @ts-ignore
const Input = memo(({value, handle, className}) => {
	const onChange = (e:ChangeEvent<HTMLInputElement>) => handle(e.target.value);

	return <input value={value} onChange={onChange} className={className}/>;
});
Input.displayName = "Input";

export {Input};