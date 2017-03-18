function doLevel1(){
	var answer =prompt("how are you");
if(answer == "good"){
	addPoints(10);
}
	hide("level1");
	show("level2");
	
}

function doLevel2(){
	prompt("how many planes are there");
	
	hide("level2");
	show("level3");
}
function doLevel3(){
	prompt("Is this a town");


hide("level3");
}	
function show(id){
		var el = document.getElementById(id);
		el.classList.remove("hidden");
}function hide(id){
	var el = document.getElementById(id);
	el.classList.add("hidden")
}
var score = 0;
function addpoints (points){
		score = score + points;
		document.getElementById("score").innerHTML = score;
}