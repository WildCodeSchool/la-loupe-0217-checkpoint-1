function getArticles() {
  console.log(this.responseText);

	const req = new XMLHttpRequest();
  req.onload = reqListener;
req.open('get', 'http://localhost:3000/articles', true);
req.send();


function reqListener() {

    var resultat = JSON.parse(this.responseText);

    var author = resultat.author;
    var chapter = resultat.chapter;
    var episode = resultat.episode;
    var content = resultat.content;
    var date = resultat.date;
    var image = resultat.images;

    document.getElementByClassName("author").innerHTML = author;
    document.getElementByClassName("chapter").innerHTML = chapter;
    document.getElementByClassName("episode").innerHTML = episode;
    document.getElementByClassName("content").innerHTML = content;
    document.getElementByClassName("date").innerHTML = date;
    document.getElementByClassName("images").innerHTML = images;

}
}
