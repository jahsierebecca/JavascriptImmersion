//************************************************************//
// Title:    Excercise 5 - PersonValue
// Site:     day_01.html
// Author:   Nic Wolf
// Sources:  http://portlandcodeschool.github.io/jsi/2015/01/06/
// Revision: 1.0 (1/6/2015)
//************************************************************//
/* Description:
   Evaluate whether a person is a teacher or a student
*/

var Persons = [
	{
		name: "Nic",
		role: "student",
		age: 29,
		favColor: "cerulean",
		hobby: "music",
	},
	{
		name: "Jahsie",
		role: "student",
		age: 27,
		favColor: "Blue",
		hobby: "Graphic Design",
	},
	{
		name: "Andrew",
		role: "teacher",
		age: 30,
		favColor: "Black",
		hobby: "Javascript",
	},
];

window.onload = Init; 

//function to determine role
function isTeacher(Person) {
	if (Person.role.toLowerCase === "teacher") {
		paragraph.innerHTML(person.name + " is a teacher at PCS!");
	} else {
		paragraph.innerHTML(person.name + " is a LOSAR");
	}
}


function atPCS(Persons, userInput) {
	for (var i = 0; i < Persons.length; i++) {
		var tempName = Persons[i].name;
		if (tempName === userInput) {
			alert(tempName + " is at PCS!");
			return tempName;
		} else {
			alert("Nobody here named " + userInput);
			return false;
		}
	}
	return false;
}

function Init() {
	var userInput = prompt("Enter a name");
	var paragraph = document.getElementById('paragraph')
	
	var dude = atPCS(Persons, userInput);
	isTeacher(dude);
}