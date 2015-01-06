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
		favColor: "Plaid",
		hobby: "Javascript",
	},
];

window.onload = Init; 

//function to determine role
function isTeacher(dude) {
	if (dude.role.toLowerCase() === "teacher") {
		paragraph.innerHTML = dude.name + " is a teacher at PCS!";
	} else {
		paragraph.innerHTML = dude.name + " is a LOSAR (aka student)";
	}
}


function atPCS(Persons, userInput) {
	for (var i = 0; i < Persons.length; i++) {
		var tempName = Persons[i].name;
		if (tempName.toLowerCase() === userInput.toLowerCase()) {
			alert(tempName + " is at PCS!");
			var attendee = Persons[i];
			return attendee;
			}
		} 
		alert("Nobody here named " + userInput);
		return false;
}

function Init() {
	var userInput = prompt("Enter a name");
	var paragraph = document.getElementById('paragraph')
	
	var dude = atPCS(Persons, userInput);
	isTeacher(dude);
}
