const BACKEND_URL = "http://localhost:3000";

getQuotes();

function getQuotes() {
    console.log("Getting quotes ...");
    const request = new XMLHttpRequest();

    request.open('get', `${BACKEND_URL}/quotes`, true);
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) { // OK
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

function deleteQuote(quoteId) {

    console.log(`Deleting quote #${quoteId} ...`);
    const request = new XMLHttpRequest();

    request.open('delete', `${BACKEND_URL}/quotes/${quoteId}`, true);
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) { // OK
                removeQuoteFromPage(quoteId);
                displayDeletionSuccess(quoteId);
            } else {
                console.error(`🚨 Error when deleting quote #${quoteId} 🚨`);
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
    $('.modal').modal({
        show: false
    });
}

function displayDeletionSuccess(quoteId) {
    console.log(`Deleted quote #${quoteId}`);
    // TODO : alert or bootstrap message
}

function displayErrors(request) {
    // TODO : alert or bootstrap message
}

function buildQuote(quote) {
    console.log(`Building quote #${quote.id}`);
    let quoteDiv = document.createElement('div');
    quoteDiv.className = "col-sm-6 col-md-4";
    quoteDiv.id = `quote-${quote.id}`;
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
            <p class="item-actions">
                <a href="#" class="btn btn-danger" role="button" onclick="event.preventDefault();deleteQuote(${quote.id})">Supprimer</a>
                <a href="#" class="btn btn-kaamelott" role="button" data-toggle="modal" data-target="modal-quote-${quote.id}" onclick="$('#modal-quote-${quote.id}').modal('show');">Voir plus</a>
            </p>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="modal-quote-${quote.id}" tabindex="-1" role="dialog" aria-labelledby="modal-quote-${quote.id}-label">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="modal-quote-${quote.id}-label">Citation de ${quote.author}</h4>
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

function removeQuoteFromPage(quoteId) {
    let quoteDiv = document.getElementById(`quote-${quoteId}`);
    quoteDiv.parentNode.removeChild(quoteDiv);
}
