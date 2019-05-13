import $ from 'jquery';

const BASE_URL = 'http://books-by-suyashkale.herokuapp.com/APIs/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNSIsImlhdCI6MTU1NjUyOTg0Nn0.tEQVbqs_XhlyWrc2yp4Y7SZvPbRETS6I4ip0ofsATeg';

export const ajaxHelper = ({ type, contentType, dataType, url, data, postUrl })=> {
    url = BASE_URL + url;
    if (type === 'POST' || type === 'PUT') {
        if (!data) { data = {}; }
        data.token = TOKEN;
    } else { // GET;
        url = url + `?token=${TOKEN}`;
    }
    if (postUrl) {
        url = url + postUrl;
    }
    let ajax = $.ajax({
        type: (type || 'GET'),
        contentType: (contentType || 'application/json'),
        dataType: (dataType || 'json'),
        url: url,
        data: (data ? JSON.stringify(data) : undefined)
    });
    ajax.then(({ m })=> {
        if (m && m.length) {
            alert(m.join(', '));
        }
    });
    return ajax;
}