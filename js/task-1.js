function makeTransaction(quantity, pricePerDroid) {
	let totalPrice = quantity * pricePerDroid;
	return `Your ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));