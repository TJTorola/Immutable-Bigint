const numberToBigint = number => ({
	length   : findNumLength(Math.abs(number)),
	digitAt  : enumerateNumber(Math.abs(number)),
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

module.exports = numberToBigint
