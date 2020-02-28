import { get, put, post, patch } from './axios';
import queryString from 'query-string';

const API_ORDERS_URL = '/orders';
const getApiOrderUrlWithId = id => `${API_ORDERS_URL}/${id}`

export const fetchOrderById = id => {
    const url = getApiOrderUrlWithId(id)
    return get(url).then(res => res.data.data)
}

export const fetchAllNewOrders = (page=1, pageSize=5) => {
    const  stringified = queryString.stringify({
        page,
        pageSize
    });
    return get(`${API_ORDERS_URL}/?${stringified}`).then(res => ({
        orders: res.data.data,
        pagination: res.data.pagination
    }));
}

// need to be double checked
export const createOrder = (clientId, order) => {
    const url=`${API_ORDERS_URL}?clientId=${clientId}`;
    return post(url, order).then(res => res.data.data)
}

export const updateOrderById = (id, order) => {
    const url = getApiOrderUrlWithId(id);
    return put(url, order);
}

export const changeOrderStatusByClient = (orderId, clientId, status) => {
    const url = `${getApiOrderUrlWithId(orderId)}/clients/${clientId}?status=${status}`;
    return patch(url,status).then(res => res.data.data)
}

export const changeOrderStatusByBusiness = (orderId, businessId, status) => {
    const url = `${getApiOrderUrlWithId(orderId)}/businesses/${businessId}?status=${status}`;
    return patch(url,status).then(res => res.data.data)
}
