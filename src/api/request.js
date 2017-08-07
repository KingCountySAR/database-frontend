export function get(url) { // eslint-disable-line import/prefer-default-export
    return fetch(url, {
        credentials: 'same-origin',
        method: 'GET',
    })
   .then(response => response.json())
   .catch(error => console.log(error));
}

export function getApi(relativeUrl) {
    return get('http://localhost:8080' + relativeUrl)
}