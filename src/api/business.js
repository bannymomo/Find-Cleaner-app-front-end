import { get, put, post } from "./axios";
import queryString from "query-string";

const API_BUSINESSES_URL = "/businesses";
const getApiBusinessUrlWithId = id => `${API_BUSINESSES_URL}/${id}`;

export const fetchBusinessById = id => {
	const url = getApiBusinessUrlWithId(id);
	return get(url).then(res => res.data.data);
};

export const fetchAllBusiness = () => {
	return get(API_BUSINESSES_URL).then(res => res.data.data);
};

export const fetchBusinessOrderById = id => {
	const url = `${getApiBusinessUrlWithId()}/orders`;
	return get(url).then(res => res.data.data);
};

export const createBusiness = business => {
	return post(API_BUSINESSES_URL, business).then(res => res.data.data);
};

export const updateBusinessById = (id, business) => {
	const url = getApiBusinessUrlWithId(id);
	return put(url, business);
};

export const fetchHisOrders = (id, page = 1, pageSize = 5, status) => {
	const stringified = queryString.stringify({
		page,
		pageSize,
		status
	});
	const url = `${getApiBusinessUrlWithId(id)}/orders/?${stringified}`;

	return get(url).then(res => ({
		orders: res.data.data.data,
		pagination: res.data.data.pagination,
		status: res.data.data.search
	}));
};

export const updateAvatar = (id, file) => {
	const url = `${getApiBusinessUrlWithId(id)}/avatar`;
	return put(url, file);
};
