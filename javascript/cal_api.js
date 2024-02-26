function getResponse(response){
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
}
function displayData(data){
    console.log(data);
}
function displayError(error){
    console.error('There was a problem with the fetch operation:', error);
}
 
fetch('http://10.30.33.23:5000/meaning/hello')
  .then(response => getResponse(response))  
  .then(data => displayData(data))
  .catch(error => displayError(error));