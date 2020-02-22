import { get, put, post, patch } from './axios';

const API_ORDERS_URL = '/orders';
const getApiOrderUrlWithId = id => `${API_ORDERS_URL}/${id}`

export const fetchOrderById = id => {
    const url = getApiOrderUrlWithId(id)
    return get(url).then(res => res.data.data)
}

export const fetchAllNewOrders = () => {
    return get(API_ORDERS_URL).then(res => res.data.data)
}

// need to be double checked
export const createOrder = (clientId, order) => {
    const url=`${API_ORDERS_URL}?clientId=${clientId}`
    return post(url, order).then(res => res.data.data)
}

export const updateOrderById = (id, order) => {
    const url = getApiOrderUrlWithId(id);
    return put(url, order);
}

// to be continued
export const changeOrderStatusByClient = (orderId, clientId) => {
    return null;
}

// to be continued
export const changeOrderStatusByBusiness = (orderId, businessesId) => {
    return null;
}
