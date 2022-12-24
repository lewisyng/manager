const apiHandler = async (url, body, method, headers) => {
    return await fetch(url, {
        body,
        method,
        headers,
    });
};

export default apiHandler;
