	fetch('https://boiling-reaches-93648.herokuapp.com/week-3/party?fbclid=IwAR1ind3ScGF6PBrv5kjO9Ee987nCGxLQjtVcUE9T39pQDZ6M4kpycrEpHjY')
	.then(function(response) {
		return response.json();
	})
	.then(response => {
		response.forEach(value => displayPerson(value));
	});

	function displayPerson(value) {
		const table = document.createElement("table");
		document.body.append(table);

		value.sort(function(a, b) {
		  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
		  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
		  if (nameA < nameB) {
		    return -1;
		  }
		  if (nameA > nameB) {
		    return 1;
		  }
		  return 0;
		});

		const tr = document.createElement("tr");
		const td = document.createElement("td");
		console.log(value);
		td.append(value.name);
		tr.append(td);

		table.append(tr);

		//value.sort();	
		console.log(value.name);
	}
	// Homework sort from A to B add comments in with github link