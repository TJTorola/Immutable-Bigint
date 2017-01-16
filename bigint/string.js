const stringToBigint = string => {
	const stripped = string.replace(/\D/g,''),
	      negative = string[0] === '-';

	return {
		length   : stripped.length,
		digitAt  : enumerateString(stripped),
		toString : (negative ? `-${ stripped }` : stripped),
		negative
	}
};

const enumerateString = string => digit => (
	(digit < string.length) ? Number(string[string.length - 1 - digit]) : 0
);

module.exports = stringToBigint;
