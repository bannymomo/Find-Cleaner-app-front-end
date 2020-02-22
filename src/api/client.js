import { get, put, post } from './axios';

const API_CLIENTS_URL = '/clients';
const getApiClientUrlWithId = id => `${API_CLIENTS_URL}/${id}`

export const fetchClientById = id => {
    const url = getApiClientUrlWithId(id)
    return get(url).then(res => res.data.data)
}

// need to be double checked
export const fetchClientOrderById = id => {
    const url = `${getApiClientUrlWithId}/orders`;
    return get(url).then(res => res.data.data)
}

export const createClient = (client) => {
    return post(API_CLIENTS_URL, client).then(res => res.data.data)
}

export const updateClientById = (id, client) => {
    const url = getApiClientUrlWithId(id);
    return put(url, client);
}