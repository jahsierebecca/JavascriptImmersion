//************************************************************//
// Title:    Excercise 4 - Objects & Arrays
// Site:     day_01.html
// Author:   Nic Wolf
// Sources:  http://portlandcodeschool.github.io/jsi/2015/01/06/
// Revision: 1.0 (1/6/2015)
//************************************************************//
/* Description:
   Create some objects and arrays and display data using loops
*/

var Student = {
		name: "Jahsie",
		age: 27,
		favColor: "yellow",
		hobby: "graphic design",
	};

var authors = [
	"Margaret Atwood",
	"Jane Austen",
	"Bill Bryson",
	"Roald Dahl",
	"Tom Holt",
	"Terry Pratchett",
	"J.K. Rowling",
];

window.onload = Init;

function Init() {

	var paragraph = document.getElementById("paragraph");
	paragraph.innerHTML += Student.name + "<br>" + Student.age;
	paragraph.innerHTML += "<br><br>";

	for (var i = 0; i < authors.length; i++ ) {
		paragraph.innerHTML += authors[i] + ", ";
	}

	authors.forEach( function(author) {
		alert(author);
	});

}//end Init()