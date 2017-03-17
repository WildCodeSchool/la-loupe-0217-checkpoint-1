// Write yout Javascript code in this files
var request = new XMLHttpRequest();
var table =document.getElementById('citations');

request.open('GET', 'backend/db.json', true);

request.onreadystatechange = function() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            var citations = JSON.parse(request.responseText);

            citations.forEach(function (student) {

              let tr = document.createElement('tr');

              tr.innerHTML = `<td>${citations.id}</td>
                              <td>${citations.auhtor}</td>
                              <td>${citations.chapter}</td>`;

            table.appendChild(tr);
console.log(citations);
          });

        } else {

            alert("Erreur");

        }
    }
};
request.send();
