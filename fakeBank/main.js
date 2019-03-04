function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function f() {
	var i = 0;

	// noinspection InfiniteLoopJS
	while (true) {
		await sleep(150);
		var rotateVal = 2 * i + "deg);";
		document.getElementById("loginBox").setAttribute("style", "transform: rotate(" + rotateVal);
		i++;
	}
}