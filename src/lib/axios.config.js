const config = {
    headers_multipart: {
        'Content-Type': 'multipart/form-data'
    },
    headers_json: {
        'Content-Type': 'application/json',
    },
    headers_w_token: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('user') ? `Viscape ${JSON.parse(localStorage.getItem('user')).token}` : 'null'
    }
}

export default config;