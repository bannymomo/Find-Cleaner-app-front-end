import { get, put, post } from './axios';

const API_BUSINESSES_URL = '/businesses';
const getApiBusinessUrlWithId = id => `${API_BUSINESSES_URL}/${id}`

export const fetchBusinessById = id => {
    const url = getApiBusinessUrlWithId(id)
    return get(url).then(res => res.data.data)
}

export const fetchAllBusiness = () => {
    return get(API_BUSINESSES_URL).then(res => res.data.data)
}

// need to be double checked
export const fetchBusinessOrderById = id => {
    const url = `${getApiBusinessUrlWithId()}/orders`;
    return get(url).then(res => res.data.data)
}

export const createBusiness = (business) => {
    return post(API_BUSINESSES_URL, business).then(res => res.data.data)
}

export const updateClientById = (id, business) => {
    const url = getApiBusinessUrlWithId(id);
    return put(url, business);
}