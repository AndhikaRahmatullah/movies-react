export const capitalLetter = (word) => {
	let x = word;
	x = x.toLowerCase().replace(/\b[a-z]/g, function (letter) {
		return letter.toUpperCase();
	});
	return x;
};
