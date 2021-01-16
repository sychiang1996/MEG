export function sendGETRequest() {
    const url = 'https://meg-backend-46.herokuapp.com/Megan/';
  
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          let response = xhr.response;
          console.log(JSON.stringify(response));
        }
    };
  
    xhr.open('GET', url);
    xhr.send()
}

export function sendPOSTRequest() {
    const url = 'https://meg-backend-46.herokuapp.com/Megan/';
    const data = JSON.stringify({
        'stage': '1',
        'response_type': 'closed',
        'text': 'None'
    })

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let response = xhr.response;
            console.log(xhr.response);
        }
    };

    xhr.open('POST', url);
    xhr.send(data);
}