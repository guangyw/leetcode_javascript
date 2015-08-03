function fibonacci(n) {
	var fibs = [];
	fibs[0] = 0;
	fibs[1] = 1;
	for (var i = 2; i < n; i++) {
		fibs[i] = fibs[i-2] + fibs[i-1];
	}
	return fibs[n];
}