var config = {
	core: 'medicalData',	
	port: '8983'
}

function getResponses(query) {
	//example query: directed_by:'Gary Lennon', q=id:"USD"
  var xhttp = new XMLHttpRequest();
  console.log(query);
  var url = 'http://93ee75a7.ngrok.io'+'/solr/'+ config.core +'/browse?q='+query;
	//var url = 'http://localhost:8983/solr/testCore/select?q=id:"USD"';
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	document.getElementById("results").innerHTML = this.response;
        //window.location = 'http://localhost:'+ config.port +'/solr/'+ config.core +'/browse?q='+query;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}