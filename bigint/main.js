const numberToBigint = require('./number.js'),
      stringToBigint = require('./string.js'),
      bufferToBigint = require('./buffer.js');

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

module.exports = Bigint;
