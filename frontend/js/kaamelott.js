var citations = null;
var mon_div = null;
var nouveauDiv = null;
var container = null;
console.log(citations);

var req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/articles', true);
req.onreadystatechange = function(aEvt) {
    if (req.readyState == 4) {
        if (req.status == 200)
            citations = JSON.parse(req.responseText);
            console.log(citations[2].image);
            ajout();
    } else {
        console.log("Erreur pendant le chargement de la page.\n");
    }
};
req.send();

console.log(citations);

function ajout(){

var node = document.getElementById("template").cloneNode(true);
$(".kaamelott-underline").attr("src") === citations[2].image ;
console.log(citations);
node.id = ""; // Don't forget :)
// modify node contents with DOM manipulation
citations.appendChild(node);
}
