var req = new XMLHttpRequest();
req.open("GET", "http://localhost:3000/articles" , false);
req.send(null);
if (req.status == 200) {
  var resultat = JSON.parse(req.responseText);
  var content = resultat[1].content;
  var author = resultat[1].author;
  var chapter = resultat[1].chapter;
  var episode = resultat[1].episode;

  document.getElementById('jsquote').innerHTML = `${content}`;
  document.getElementsByClassName('jssource').innerHTML = `${author}`;

}







alert(author);
