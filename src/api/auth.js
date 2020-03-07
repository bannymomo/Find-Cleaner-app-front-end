import { post, put, get } from "./axios";

const API_LOGIN_URL = "/auth";
const API_SIGNUP_URL = "/users";

export const login = data => {
	return post(API_LOGIN_URL, data).then(res => {
		return res.data.data;
	});
};

export const signup = data => {
	return post(API_SIGNUP_URL, data).then(res => {
		return res.data.data;
	});
};

export const changePasswordById = (userId, password) => {
	const url = `${API_SIGNUP_URL}/${userId}`;
	return put(url, password);
};

export const getUserId = () => {
	return get(`${API_SIGNUP_URL}/me`).then( res => 
		 res.data.data._id
	)
}
