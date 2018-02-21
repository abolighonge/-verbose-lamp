
function run1(){

	document.cal.display.value += "1";
}
function run2(){

	document.cal.display.value += "2";
}
function run3(){

	document.cal.display.value += "3";
}
function run4(){

	document.cal.display.value += "4";
}
function run5(){

	document.cal.display.value += "5";
}

function run6(){

	document.cal.display.value += "6";
}

function run7(){

	document.cal.display.value += "7";
}

function run8(){

	document.cal.display.value += "8";
}

function run9(){

	document.cal.display.value += "9";
}

function run0(){

	document.cal.display.value += "0";
}

function runPlus(){

	document.cal.display.value += "+";
}

function runSub(){

	document.cal.display.value += "-";
}

function runDiv()
{

	document.cal.display.value += "/";
}
function runMul(){

	document.cal.display.value += "*";
}

function runC(){

	document.cal.display.value = "";
}


function runEquals() {
	var equals = eval(document.cal.display.value)
	document.cal.display.value = equals;
}
