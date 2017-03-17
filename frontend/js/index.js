var home = document.getElementById('quotes')

function getArticles() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/articles', true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if(this.status == 200) {
        var quotes = JSON.parse(this.responseText);
        quotes.forEach(function (quote) {
          let div = document.createElement('div');
          div.className += "col-sm-6 col-md-4";
          div.innerHTML = `
          <div class="thumbnail">
            <div class="img-box">
              <img class="kaamelott-underline" src="${quote.image}" alt="${quote.author}, ${quote.chapter}, ${quote.episode}">
            </div>
            <div class="quote">
              <blockquote>
                "${quote.content}"
              </blockquote>
              <p class="source">
                ${quote.author},
                <i>${quote.chapter}, ${quote.episode}</i>
              </p>
              <span class="hider"></span>
            </div>
            <p class="item-actions"><a href="#" class="btn btn-danger" role="button">Supprimer</a> <a href="#" class="btn btn-kaamelott" role="button" data-toggle="modal" data-target="#${quote.id}">Voir plus</a></p>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="${quote.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              </div>
              <div class="modal-body">
                <blockquote>
                  "${quote.content}"
                </blockquote>
                <p class="source">
                  ${quote.author},
                  <i>${quote.chapter},${quote.episode}</i>
                </p>
              </div>
            </div>
          </div>`;
          home.appendChild(div);
        });
      }

      else
      alert("Erreur pendant le chargement de la page.\n");
    }
  };
  xhr.send();
}

getArticles()
