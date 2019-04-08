const express = require('express');
const app = express();
const port = 3000;
const Fibonacci = require('./logic/fibonacci');
const fibonacciCalculator = new Fibonacci();

app.get('/fibonacci/:n?', function (req, res) {
	let fibonacciNumber = req.params.n;
	console.log(`FibonacciNumber from Url: ${fibonacciNumber}`);
	if (!fibonacciNumber) {
		let currentMinute = new Date().getMinutes();
		if (currentMinute < 10) {
			fibonacciNumber = currentMinute;
		} else {
			fibonacciNumber = Number.parseInt(currentMinute.toString().substring(1));
		}
		console.log(`FibonacciNumber from Date: ${currentMinute} equals: ${fibonacciNumber}`);
	}
	res.status(200);
	res.send({ fibonacciNumber: fibonacciCalculator.getFibonacci(fibonacciNumber) });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))