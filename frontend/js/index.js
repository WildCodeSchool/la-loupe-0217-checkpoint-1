function getArticles() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/articles', true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if(this.status == 200) {
        var quotes = JSON.parse(this.responseText);
        console.log(quotes);
      }

      else
      alert("Erreur pendant le chargement de la page.\n");
    }
  };
  xhr.send();
}

getArticles()
