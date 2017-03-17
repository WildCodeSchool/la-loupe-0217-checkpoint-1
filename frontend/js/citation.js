function getArticles() {
    const xhr = new XMLHttpRequest();
    // citation = document.getElementById('thumbnail').value;
    xhr.open("GET", "http://localhost:3000/articles", true);

    // xhr.open("POST", "http://localhost:3000/articles", true);


    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          console.log('coucou');
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);

                // var author = response.articles[0].author;
                // var chapter = response.articles[0].chapter;
                // var episode = response.articles[0].episode;
                var content = response.content;
                // var image = response.articles[0].image;

                console.log(response);
                document.getElementById("quote").innerHTML = "<blockquote>" + content + "</blockquote>";
                document.getElementById("source").innerHTML = author + "<i>" + chapter + ", " + episode + "</i>";
                var sources = author + "<i>" + chapter + ", " + episode + "</i>";
                document.getElementById("img-box").innerHTML = '<img class="kaamelott-underline" src="' + image + '" alt="' + sources + '">';
            }
        }
    };
    xhr.send();
}

getArticles();
