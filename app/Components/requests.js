export function sendGETRequest() {
    const url = 'https://meg-backend-46.herokuapp.com/Megan/';
  
    fetch(url, {
        method: 'GET'
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed.');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        console.log(jsonResponse);
    })
};

export function sendPOSTRequest() {
    const url = 'https://meg-backend-46.herokuapp.com/Megan/';
    const data = JSON.stringify({
        "stage": "1",
        "response_type": "closed",
        "text": "None"
    });

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    }).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed.');
    }, networkError => console.log(networkError.message)
    ).then(jsonResponse => {
        console.log(jsonResponse);
    });
};