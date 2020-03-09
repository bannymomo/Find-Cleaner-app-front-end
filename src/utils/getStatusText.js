import { 
    NEW_ORDER,
    CANCELLED_BY_CLIENT,
    ACCEPTED,
    CANCELLED_BY_BUSINESS,
    DONE
} from "../utils/variables";

const getStatusText = status => {
    let statusText;
    switch(status) {
        case NEW_ORDER:
            statusText = "Placed Order";
            break;
        case CANCELLED_BY_CLIENT:
            statusText = "Cancelled by Client";
            break;
        case ACCEPTED:
            statusText = "Assigned";
            break;
        case CANCELLED_BY_BUSINESS:
            statusText = "Cancelled by Business";
            break;
        case DONE:
            statusText = "Completed";
            break;
        default:
            statusText = "";
    }
    return statusText;
}

export default getStatusText;