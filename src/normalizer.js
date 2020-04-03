// remove empty header values;
const cleanEmptyHeaders = request => {
    if (request.headers) {
        return request.headers.filter(x=> x.name !== '');
    }
    return request;
};

// remove empty header array
const cleanHeaders = request => {
    if (request.headers && request.headers.length === 0) {
        delete request.headers
    }

    return request;
}


module.exports = function normalize(data) {
    return data.requests
        .filter(cleanEmptyHeaders)
        .filter(cleanHeaders);
}