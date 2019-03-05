function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
var element;
function f(e) {
	element = e;
	var randVal = Math.floor(Math.random() * 5);

	if(randVal == 0){
		rotate();
	}
	else if(randVal == 1){
		skewFuncX();
	}
	else if(randVal == 2){
		skewFuncY();
	}
	else if(randVal == 3){
		scaleFuncX();
	}
	else if(randVal == 4){
		scaleFuncY();
	}

}

async function rotate(){
	var i = 0;

	// noinspection InfiniteLoopJS
	while (true) {
		await sleep(150);
		var rotateVal = .25 * i + "deg);";
		document.getElementById(element).setAttribute("style", "transform: rotate(" + rotateVal);
		i++;
	}
}

async function skewFuncX() {
	var i = 0;

	// noinspection InfiniteLoopJS
	while(true){
		await sleep(150);
		var skewVal = .25 * i +"deg);";
		document.getElementById(element).setAttribute("style", "transform: skewX(" +  skewVal);
		i++;
	}
}

async function skewFuncY() {
	var i = 0;

	// noinspection InfiniteLoopJS
	while(true){
		await sleep(150);
		var skewVal = .25 * i +"deg);";
		document.getElementById(element).setAttribute("style", "transform: skewy(" +  skewVal);
		i++;
	}
}

async function scaleFuncY() {
	var i = 0;

	// noinspection InfiniteLoopJS
	while(true){
		await sleep(150);
		var skewVal = 1 + .05 * i +");";
		document.getElementById(element).setAttribute("style", "transform: scaleY(" +  skewVal);
		i++;
	}
}

async function scaleFuncX() {
	var i = 0;

	// noinspection InfiniteLoopJS
	while(true){
		await sleep(150);
		var skewVal = 1 + .05 * i +");";
		document.getElementById(element).setAttribute("style", "transform: scaleX(" +  skewVal);
		i++;
	}
}

function login() {

	//TODO this
	if(document.getElementById("username")) {
		document.cookie = "session=john doe";
	}
}

//TODO this
function loadUser() {
	var session = document.cookie;
}