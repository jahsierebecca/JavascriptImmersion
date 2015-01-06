//************************************************************//
// Title:    Excercise 3 - Refactoring
// Site:     day_01.html
// Author:   Nic Wolf
// Sources:  http://portlandcodeschool.github.io/jsi/2015/01/06/
// Revision: 1.0 (1/6/2015)
//************************************************************//
/* Description:
   Create a function for the loop actions
*/

window.onload = Init;

function singAboutBottles(bottleCount) {
	paragraph.innerHTML += " " + bottleCount;
	bottleCount--;
}//end singAboutBottles()

function Init() {

	var bottlesOfBeer = 99;

	var paragraph = document.getElementById("paragraph");

	while (bottlesOfBeer > 0) {
		singAboutBottles(bottlesOfBeer);
	}

}//end Init()
