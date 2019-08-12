
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyApLpHFoSaRai8N_WX0fcNNrtmHIivEtUI",
    authDomain: "deno-2c79c.firebaseapp.com",
    databaseURL: "https://deno-2c79c.firebaseio.com",
    projectId: "deno-2c79c",
    storageBucket: "",
    messagingSenderId: "558430969532",
    appId: "1:558430969532:web:6fd2264d3c70d800"
  };
  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

// db.collection("deno")
// 	.get()
// 	.then(snapshot => {
// 		snapshot.docs.forEach(doc => {
// 			console.log(doc);
// 		});
// 	});

// const dbRef = firebase.database().ref();
// const peopleRef = dbRef.child("people");

// const peopleTable = document.getElementById("peopleTall");


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

// Getting data

db.collection("user").get().then(snapshot => {
	snapshot.docs.forEach((doc, index) => {
	displayData(doc, index);
	});
});

/**
* 
*/
function displayData(doc, index) {
	console.log(doc.data().name);
	const peopleTable = document.getElementById("pTable");

	const tr = document.createElement("tr");
	tr.setAttribute("data-id", doc.id); // id is generated automatically

	const td0 = document.createElement("td");
	const td = document.createElement("td");
	const td2 = document.createElement("td");
	const td3 = document.createElement("td");
	const td4 = document.createElement("td");
	const td5 = document.createElement("td");
	const td6 = document.createElement("td");


	const del = document.createTextNode("delete");
	const name = document.createTextNode(doc.data().name);
	const surname = document.createTextNode(doc.data().surname);
	const email = document.createTextNode(doc.data().email);
	const nation = document.createTextNode(doc.data().nationality);

	td0.append(index);
	td.append(name);
	td2.append(surname);
	td3.append(email);
	td5.append(nation);
	td6.append(del);

	td6.addEventListener("click", e => {
		e.stopPropagation;
		let id = e.target.parentElement.getAttribute("data-id");
		db.collection("user")
		.doc(id)
		.delete()
	});

function add() {
	const name = document.getElementById("name").value;
	const surname = document.getElementById("surname").value;
	const email = document.getElementById("email").value;
	const national = document.getElementById("nationality").value;

	db.collection("user").add({
		name: name,
		surname: surname,
		email: email,
		nationality: national
	});
}

// works but in add.html
// const addNewUser = document.getElementById("send");
// addNewUser.addEventListener("click", add);

tr.append(td0, td, td2, td3, td4, td6);
peopleTable.append(tr);

}