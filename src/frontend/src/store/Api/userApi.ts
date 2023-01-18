import axios from "axios";

const userApi = (email:string, pass:string) => {
	axios.post("http://localhost:8080/api/registration", {
		email: email,
		password: pass
	})
		.then(function (response) {
			console.log(1);
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

export {userApi};