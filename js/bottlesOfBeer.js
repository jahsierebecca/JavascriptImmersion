//************************************************************//
// Title:    Excercise 2 - Loops
// Site:     day_01.html
// Author:   Nic Wolf
// Sources:  http://portlandcodeschool.github.io/jsi/2015/01/06/
// Revision: 1.0 (1/6/2015)
//************************************************************//
/* Description:
   Setup a loop to count down from 99
*/

window.onload = Init;

function Init() {

	//DECLARED OUR VARIABLE
	var bottlesOfBeer = 99;
	//GRABBED THE HTML ELEMENT WE'RE ABOUT TO USE
	var paragraph = document.getElementById("paragraph");
	//WRITE OUR FUNCTION TO DISPLAY THE VARIABLE IN HTML
	paragraph.style.background = "red";

	while (bottlesOfBeer > 0) {
		
		paragraph.innerHTML += " " + bottlesOfBeer;
		bottlesOfBeer--;
	}

}//end Init()