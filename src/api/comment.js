import { get } from "./axios";
import queryString from "query-string";

const API_COMMENTS_URL = "/comments";
const getApiCommentUrlWithId = id => `${API_COMMENTS_URL}/${id}`;

export const fetchCommentById = id => {
	const url = getApiCommentUrlWithId(id);
	return get(url).then(res => res.data.data);
};

export const fetchAllComments = (page = 1, pageSize = 5, businessId) => {
	const stringified = queryString.stringify({
		page,
        pageSize,
        businessId
	});
	return get(`${API_COMMENTS_URL}/?${stringified}`).then(res => ({
		comments: res.data.data.data,
		pagination: res.data.data.pagination
	}));
}; 