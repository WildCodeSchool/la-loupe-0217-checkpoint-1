var request = new XMLHttpRequest();
var table = document.getElementById('articles');

request.onreadystatechange = function() { //si l'état change alors:
    if (request.readyState == 4) { // ==4 => requete terminée
        if (request.status == 200) { //status 200 == tout s'est bien passé
            console.log("IM IN BOSS");
            var articles = JSON.parse(request.responseText);
            console.log(articles);
            articles.forEach(function(article) {
                let tr = document.createElement('tr'); //tr c'est une ligne
                let img = "/home/wolfy/Documents/checkpoint/la-loupe-0217-checkpoint-1/frontend" + article.image;
                tr.innerHTML = `<img src="${img}"/>
                            <p>Author:</p>${article.author}
                            <p>Chapter:</p>${article.chapter}
                            <p>Episode:</p>${article.episode}
                            <p>Content:</p>${article.content}
                            `;
                table.appendChild(tr);
            });
        } else {
            console.log("Erreur pendant le chargement de la page.\n");
        }
    }
};

function getDate() {
    let date = document.getElementById("date").value;
    console.log(date);
    request.open('GET', "http://localhost:3000/articles", true);
    request.send();
}

function getAuthor() {
    let author = document.getElementById("auteur").value;
    console.log(author);
}

function getCitation() {
    let citation = document.getElementById("citation").value;
    console.log(citation);
}

function getEpisode() {
    let episode = document.getElementById("episode").value;
    console.log(episode);
}

function getSeason() {
    let saison = document.getElementById("saison").value;
    console.log(saison);
}
