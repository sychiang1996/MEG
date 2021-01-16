//XMLHttpRequest GET
const xhr = new XMLHttpRequest();
const url = 'http://dummy.url';

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // Code
    }
};

xhr.open('GET', url);
xhr.send()

//XMLHttpRequest POST
const xhr = new XMLHttpRequest();
const url = 'http://dummy.url';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        // Code
    }
};

xhr.open('POST', url);
xhr.send(data)