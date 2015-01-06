//************************************************************//
// Title:    Excercise 5 - Student Inf Array
// Site:     day_01.html
// Author:   Nic Wolf
// Sources:  http://portlandcodeschool.github.io/jsi/2015/01/06/
// Revision: 1.0 (1/6/2015)
//************************************************************//
/* Description:
   Create a data structure for students; print data via loops.
*/

var Student = [
	{
		name: "Jahsie",
		age: 27,
		favColor: "yellow",
		hobby: "graphic design",
	},
	{
		name: "Fart",
		age: 23,
		favColor: "brown",
		hobby: "movie critic",
	},
];

window.onload = Init;

function studentCounter(Student, index) {
	paragraph.innerHTML += Student[index].name + "<br>";
	paragraph.innerHTML += Student[index].age + "<br>";
	paragraph.innerHTML += Student[index].favColor + "<br>";
	paragraph.innerHTML += Student[index].hobby + "<br>";
	paragraph.innerHTML += "<br><br>";
}//end studentCounter()

function Init() {
	for (var i = 0; Student.length; i++) {
		studentCounter(Student, i);
	}
}//end Init()