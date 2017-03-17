$(document).ready(function() {

    var auteur = $("#auteur").val;
    var citation = $("#citation").val;
    var saison = $("#saison").val;
    var episode = $("#episode").val;
    var date = $("#date").val;


    $('#submit').click(function() {
        var jsonObj = '{"citation" : [{"auteur" : auteur,"citation" : citation,"saison" : saison,"episode" : episode,"date : date"}]}';
        var obj = $.parseJSON(jsonObj);

        $.ajax({
            type: "POST",
            url: "http://localhost:3000/articles",
            dataType: "json",
            success: function(msg) {
                if (msg) {
                    alert("ok");
                    location.reload(true);
                } else {
                    alert("Cannot add to list !");
                }
            },

            data: jsonObj
        });
    });
});
