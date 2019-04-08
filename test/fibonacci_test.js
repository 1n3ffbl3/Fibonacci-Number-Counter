var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert
const Fibonacci = require('../src/logic/fibonacci');
const fibonacciCalculator = new Fibonacci();

describe('Fibonacci sequence tests', function () {

	it('should return correct value for fibonacci(0)', function () {
		const result = fibonacciCalculator.getFibonacci(0);
		assert.equal(result, 1);
	});

	it('should return correct value for fibonacci(1)', function () {
		const result = fibonacciCalculator.getFibonacci(1);
		assert.equal(result, 1);
	});

	it('should return correct value for fibonacci(2)', function () {
		const result = fibonacciCalculator.getFibonacci(2);
		assert.equal(result, 2);
	});

	it('should return correct value for fibonacci(3)', function () {
		const result = fibonacciCalculator.getFibonacci(3);
		assert.equal(result, 3);
	});

	it('should return correct value for fibonacci(4)', function () {
		const result = fibonacciCalculator.getFibonacci(4);
		assert.equal(result, 5);
	});

	it('should return correct value for fibonacci(5)', function () {
		const result = fibonacciCalculator.getFibonacci(5);
		assert.equal(result, 8);
	});

	it('should return correct value for fibonacci(6)', function () {
		const result = fibonacciCalculator.getFibonacci(6);
		assert.equal(result, 13);
	});

	it('should return correct value for fibonacci(7)', function () {
		const result = fibonacciCalculator.getFibonacci(7);
		assert.equal(result, 21);
	});

	it('should return correct value for fibonacci(8)', function () {
		const result = fibonacciCalculator.getFibonacci(8);
		assert.equal(result, 34);
	});

	it('should return correct value for fibonacci(9)', function () {
		const result = fibonacciCalculator.getFibonacci(9);
		assert.equal(result, 55);
	});
});