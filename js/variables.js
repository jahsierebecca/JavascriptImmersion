//************************************************************//
// Title:    Excercise 1 - Variables
// Site:     day_01.html
// Author:   Nic Wolf
// Sources:  http://portlandcodeschool.github.io/jsi/2015/01/06/
// Revision: 1.0 (1/6/2015)
//************************************************************//
/* Description:
   Create some variables, print to the screen.
*/

window.onload = Init;

function Init() {
	var name = "Jahsie";
	var age = 27;
	var favColor = "yellow";
	var hobby = "graphic design";

	document.getElementById("paragraph").innerHTML = name + " " + age + " " + favColor + " " + hobby;
}//end Init()