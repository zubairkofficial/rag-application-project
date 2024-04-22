import { API_BASE_URL } from "./constants";

export async function backendRequest(method, url, body, multipart = false) {
    url = API_BASE_URL + url;

    if (multipart) {
        const response = await fetch(url, { method, body });
        return await response.json();
    }

    if (body instanceof FormData) {
        body = JSON.stringify(
            Object.fromEntries(body)
        );
    } else if (typeof body === "object") {
        body = JSON.stringify(body);
    }

    const headers = {
        "Content-Type": "application/json"
    };

    let token;
    if ( token = localStorage.getItem("token") ) {
        headers["Authentication"] = `Bearer ${token}`;
    }

    const response = await fetch(url, { method, body, headers });
    return await response.json();
}