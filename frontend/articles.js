
function getArticles() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'db.json', true);}

    xhr.onreadystatechange = function() {
            if (xhr.readyState == 4)
                if (xhr.status == 200) {
                    var article = JSON.parse(xhr.responseText);
                    console.log(article);


                }};
xhr.send();
