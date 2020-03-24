import axios from "axios";
import { getToken } from "../utils/auth";

axios.defaults.baseURL = "https://find-cleaner.herokuapp.com/api";

const appendAuthToken = config => {
	const jwtToken = getToken();
	const Authorization = jwtToken && `Bearer ${jwtToken}`;

	return { ...config, headers: { Authorization, ...config.header } };
};

export const get = (url, config = {}) =>
	axios.get(url, appendAuthToken(config));

export const post = (url, data, config = {}) =>
	axios.post(url, data, appendAuthToken(config));

export const put = (url, data, config = {}) =>
	axios.put(url, data, appendAuthToken(config));

export const del = (url, config = {}) =>
	axios.delete(url, appendAuthToken(config));

export const patch = (url, data, config = {}) =>
	axios.patch(url, data, appendAuthToken(config));
