module.exports = (left, right, callback, acc = null) => {
	const maxLength = Math.max(left.length, right.length);

	const recur = (idx, acc) => {
		if (idx >= maxLength) return acc;

		const leftDigit = left.digitAt(idx),
		      rightDigit = right.digitAt(idx);

		return recur(idx + 1, callBack(leftDigit, rightDigit, acc));
	}

	return recur(0, acc);
}
