const createArticles = function () {

  var newQuote = {
    author: document.getElementById('author').value,
    chapter: document.getElementById('saison').value,
    content: document.getElementById('quote').value,
    image: document.getElementById('img').value,
    episode: document.getElementById('episod').value,
    date: new Date()
  };

  var req = new XMLHttpRequest
  req.open('POST', 'http://localhost:3000/articles');
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  req.send(JSON.stringify(newQuote));
  window.location.href = 'index.html';
}
