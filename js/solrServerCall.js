var config = {
	core: 'medicalData',	
	port: '8983'
}

function getResponses(query) {
	//example query: directed_by:'Gary Lennon', q=id:"USD"
  var xhttp = new XMLHttpRequest();
  console.log(query);
  var url = 'http://ae2caf79.ngrok.io'+'/solr/'+ config.core +'/browse?q='+query+'&wt=xml';
	//var url = 'http://localhost:8983/solr/testCore/select?q=id:"USD"';
	//var urlTest = 'http://1a9d5d38.ngrok.io/solr/medicalData/browse?&q=night+sweats&wt=xml';
   xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		document.getElementById("results").innerHTML = "";
		
		var documents = this.responseText; 

		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(documents,"text/xml");
		console.log(xmlDoc)
		for (var i = 0; i < xmlDoc.getElementsByName("dc_title").length; i++){
			
			var title = xmlDoc.getElementsByName("dc_title")[i].childNodes[0].nextElementSibling.innerHTML;
			var score =  xmlDoc.getElementsByName("score")[i].childNodes[0].textContent;
			var link = xmlDoc.getElementsByName("og_url")[i].childNodes[0].nextElementSibling.innerHTML; //has space in directory
			var description = xmlDoc.getElementsByName("description")[i].childNodes[0].nextElementSibling.innerHTML;

			var docValue =	'<div class="card" style="margin:10px;"><div class="card-header">#'+(i+1)+'</div><div class="card-block" style="margin:4px;"><h4 class="card-title">' + title + '</h4><p class="card-text">Score: ' + score +'<br>'+ description +'... </p><a href="'+ link +'" class="btn btn-primary">View Page</a></div></div>';
			
			
			document.getElementById("results").innerHTML += docValue;
				//'<div class="card"><div class="card-block"><a href='+ link +'>' + title + '<br> score: ' + score + '<br>' + '</a></div></div>';
				 
		}
        
	}
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}