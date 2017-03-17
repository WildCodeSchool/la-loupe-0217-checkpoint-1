function input() {
    ville = document.getElementById('').value;
    req.open('GET',      false);
    req.send(null);
    if (req.status == 200) {
			console.log(req.responseText);
      var resultat = JSON.parse(req.responseText);
      var toto = resultat.main.temp;
      document.getElementById('temperature').innerHTML = `${toto}`;
    }
}

document.getElementById('submit').addEventListener('click', input);
