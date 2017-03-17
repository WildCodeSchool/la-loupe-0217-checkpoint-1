function request(oSelect) {

    var value = oSelect.options[oSelect.selectedIndex].value;

    var xhr   = getXMLHttpRequest();



    xhr.onreadystatechange = function() {

        if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {

            readData(xhr.responseXML);

            document.getElementById("loader").style.display = "none";

        } else if (xhr.readyState < 4) {

            document.getElementById("loader").style.display = "inline";

        }

    };



    xhr.open("POST", "XMLHttpRequest_getListData.php", true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send("IdEditor=" + value);

}


function readData(oData) {

    var nodes   = oData.getElementsByTagName("item");

    var oSelect = document.getElementById("softwaresSelect");

    var oOption, oInner;



    oSelect.innerHTML = "";

    for (var i=0, c=nodes.length; i<c; i++) {

        oOption = document.createElement("option");

        oInner  = document.createTextNode(nodes[i].getAttribute("name"));

        oOption.value = nodes[i].getAttribute("id");



        oOption.appendChild(oInner);

        oSelect.appendChild(oOption);

    }

}


angular.module('app')
  function($scope){
    $scope.query = ''
    $scope.addCita = function() {
      var emptyCita = {done: false, value: ''}
      emptyCita.value = $scope.query;
      $scope.citas.push(emptyCita);
      $scope.query = '';

    }
  });
