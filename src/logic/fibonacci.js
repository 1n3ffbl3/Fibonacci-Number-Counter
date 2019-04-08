class Fibonacci {
	constructor() {
		this.fibonacciList = [1, 1]
	}

	getFibonacci(n) {
		if (this.fibonacciList[n] !== undefined) {
			return this.fibonacciList[n];
		}
		let lastIndex = this.fibonacciList.length - 1;
		for (let it = lastIndex; it < n; it++) {
			const newValue = this.fibonacciList[it] + this.fibonacciList[it - 1];
			this.fibonacciList.push(newValue);
		}
		return this.fibonacciList[n];
	}
}

module.exports = Fibonacci;