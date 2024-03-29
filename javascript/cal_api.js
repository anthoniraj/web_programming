function getResponse(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
}
function displayData(data) {
    console.log(data['meanings']);
}
function displayError(error) {
    console.error('There was a problem with the fetch operation:', error);
}

fetch('http://127.0.0.1:5000/meaning/fetch')
    .then(response => getResponse(response))
    .then(data => displayData(data))
    .catch(error => displayError(error.message));

/* Simplified fecth function */
fetch('http://127.0.0.1:5000/meaning/fetch')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
    })
    .then(data => console.log(data['meanings']))
    .catch(error => console.error('There was a problem with the fetch operation:', error));


/* Output 
[
    'the action of fetching',
    'go or come after and bring or take back',
    'be sold for a certain price',
    'take away or remove'
    ]
    [
    'the action of fetching',
    'go or come after and bring or take back',
    'be sold for a certain price',
    'take away or remove'
    ]
*/