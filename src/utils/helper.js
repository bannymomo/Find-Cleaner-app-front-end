export const convertValue = (value, key) => {
    switch (key) {
        case "bedrooms":
        case "bathrooms":
            return parseInt(value);
        case "endOfLease":
        case "oven":
        case "windows":
        case "cabinets":
        case "carpet":
            return Boolean(value);
        default:
            return value;
    }
}

