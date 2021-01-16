function sendGETRequest() {
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

export default sendGETRequest;