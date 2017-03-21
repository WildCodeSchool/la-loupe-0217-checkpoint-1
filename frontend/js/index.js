const getArticles = function () {
  var quotes = document.getElementById('quotes_in_html')
  var req = new XMLHttpRequest
  req.open('GET', 'http://localhost:3000/articles', true);
  req.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
      if(this.status === 200) {

        var articles = JSON.parse(req.responseText);

        articles.forEach(function (article) {
          let div = document.createElement('div');
          div.className += "col-sm-6 col-md-4"
          div.innerHTML = `
              <div class="thumbnail">
                <div class="img-box">
                  <img class="kaamelott-underline" src="${article.image}" alt="${article.author}, ${article.chapter}, ${article.episode}">
                </div>
                <div class="quote">
                  <blockquote>
                    "${article.content}"
                  </blockquote>
                  <p class="source">
                    ${article.author},
                    <i>${article.chapter}, ${article.episode}</i>
                  </p>
                  <span class="hider"></span>
                </div>
                <p class="item-actions"><a onclick="deleteArticles(${article.id})" class="btn btn-danger" role="button">Supprimer</a> <a href="#" class="btn btn-kaamelott" role="button" data-toggle="modal" data-target="#${article.id}">Voir plus</a></p>
              </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="${article.id}" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                    <blockquote>
                      "${article.content}"
                    </blockquote>
                    <p class="source">
                      ${article.author},
                      <i>${article.chapter}, ${article.episode}</i>
                    </p>
                  </div>
                </div>
              </div>
            `
            quotes.appendChild(div);
        });

      } else {
        // error
      }
    }
  };
  req.send()
}

getArticles()

const deleteArticles = function (id) {
  var req = new XMLHttpRequest
  req.open('DELETE', 'http://localhost:3000/articles/' + id);
  req.send();
  location.reload();
}
