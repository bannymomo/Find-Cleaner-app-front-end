import { 
    newOrder, 
    cancelledByClient, 
    accepted, 
    cancelledByBusiness, 
    done 
} from "../utils/variables";

const getStatusText = status => {
    let statusText;
    if (status === newOrder) {
        statusText = "Placed Order";
    } else if (status === cancelledByClient) {
        statusText = "Cancelled by Client";
    } else if (status === accepted) {
        statusText = "Assigned";
    } else if (status === cancelledByBusiness) {
        statusText = "Cancelled by Business";
    } else if (status === done) {
        statusText = "Completed";
    }
    return statusText;
}

export default getStatusText;