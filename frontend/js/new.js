const newArticle = function  () {
  return {
    author: document.getElementById('author').value,
    chapter: document.getElementById('chapter').value,
    episode: document.getElementById('episode').value,
    content: document.getElementById('quote').value,
    date: new Date(),
    image: document.getElementById('img').value
  }
}


function postArticles() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:3000/articles");
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(newArticle()));
  window.location.href = 'index.html';
}
