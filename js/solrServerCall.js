var config = {
	core: "testCore",	
	port: "8983"
}

function getResponses(query) {
	//example query: directed_by:'Gary Lennon'
  var xhttp = new XMLHttpRequest();
  var url = "http://localhost:"+ config.port +"/solr/"+ config.core +"/select?indent=on&q="+query+"&wt=json";
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	document.getElementById("results").innerHTML = this.response;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}