/**
 * input:
 *   guessed: array of number
 *   correct: array of number
 * output:
 *   average absolute deviation between guessed and correct
 */
function averageDeviation(guessed, correct) {
	var sum = 0;
	for (var i=0; i<guessed.length; i++) {
		sum += Math.abs(guessed[i]-correct[i]);
	}
	return sum / guessed.length;
}
