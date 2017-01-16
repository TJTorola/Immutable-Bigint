const Bigint = input => {
	const { toString } = Object.prototype;

	switch(toString.call(input)) {
		case '[object Number]':
			return numberToBigint(input);
		case '[object String]':
			return stringToBigint(input);
		case '[object ArrayBuffer]':
			return bufferToBigint(input);
	}
};

const numberToBigint = number => ({
	length   : findNumLength(Math.abs(number)),
	digitAt  : enumerateNumber(number),
	negative : (number < 0),
	toString : (number).toString()
});

const findNumLength = (number, length = 1) => {
	if (Math.pow(10, length) > number) return length;
	return findNumLength(number, length + 1);
};

const enumerateNumber = number => digit => (
	Math.floor(number / Math.pow(10, digit)) % 10
);

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

const bufferToBigint = (length, enumerator) => {
	
};

module.exports = Bigint;