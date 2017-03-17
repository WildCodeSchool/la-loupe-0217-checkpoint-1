const BACKEND_URL = "http://localhost:3000";

getQuotes(BACKEND_URL);

function getQuotes(url) {
    const request = new XMLHttpRequest();

    console.log("Getting quotes ...");
    request.open('get', `${url}/quotes`, true);
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status == 200) { // OK
                console.log("Done");
                displayQuotes(JSON.parse(request.responseText));
            } else {
                console.error("🚨 Error getting the quotes from the server 🚨");
                displayErrors(request);
            }
        }
    };
    request.send();
}

function displayQuotes(quotes) {
    let quoteContainer = document.getElementById('quotes');

    console.log("Displaying quotes");
    quotes.forEach(function(quote) {
        quoteContainer.appendChild(buildQuote(quote));
    });
}

function buildQuote(quote) {
    console.log("Building quote", quote);
    let quoteDiv = document.createElement('div');
    quoteDiv.className = "col-sm-6 col-md-4";
    quoteDiv.innerHTML = `<div class="thumbnail">
            <div class="img-box">
                <img class="kaamelott-underline" src="${quote.image}" alt="${quote.author}, ${quote.chapter}, ${quote.episode}">
            </div>
            <div class="quote">
                <blockquote>
                    ${quote.content}
                </blockquote>
                <p class="source">
                    ${quote.author},
                    <i>${quote.chapter}, ${quote.episode}</i>
                </p>
                <span class="hider"></span>
            </div>
            <p class="item-actions"><a href="#" class="btn btn-danger" role="button" onclick="deleteQuote(${quote.id})"">Supprimer</a> <a href="#" class="btn btn-kaamelott" role="button" data-toggle="modal" data-target="#${quote.id}">Voir plus</a></p>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="${quote.id}" tabindex="-1" role="dialog" ">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <blockquote>
                        ${quote.content}
                    </blockquote>
                    <p class="source">
                        ${quote.author},
                        <i>${quote.chapter}, ${quote.episode}</i>
                    </p>
                </div>
            </div>
        </div>`;
    return quoteDiv;
}
