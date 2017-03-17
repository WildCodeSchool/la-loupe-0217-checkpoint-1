const BACKEND_URL = "http://localhost:3000";

function postQuote(form) {
    console.log("Send quote ...");
    const request = new XMLHttpRequest();

    let quoteData = new FormData(form);
    quoteData = addImage(quoteData);


    request.open('post', `${BACKEND_URL}/quotes`, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 201) { // Created
                console.log("Done");
                // TODO : redirect ?
            } else {
                console.error("🚨 Error sending the quote to the server 🚨");
                console.error(request);
            }
        }
    };
    request.send(toJSON(quoteData));
}

// Pas la méthode la plus propre mais je n'ai pas le temps de lire la doc du plugin que j'ai utilisé
function addImage(quoteData) {
    quoteData.delete('image');
    let thumbnailBase64 = document.getElementsByClassName('kv-file-content')[1].children[0].src;
    quoteData.append('image', thumbnailBase64);
    return quoteData;
}

function toJSON(formData) {
    let obj = {};

    for (var [key, value] of formData.entries()) {
        obj[key] = value;
    }
    return JSON.stringify(obj);
}
