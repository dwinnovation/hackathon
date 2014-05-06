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

function score() {
	var guessed = [], correct = [];
	$('#buckets').find('.bucket').each(
		function(index, item) {
			var bucket = $(item);
			guessed.push(bucket.data('guessed'));
			correct.push(bucket.data('correct'));
		});
	
	var result = averageDeviation(guessed, correct);
	
	console.log(result);
}

function coinDropped(coin, bucket) {
	var coinValue = $(coin).data('value');
	
	var bucketValue = $(bucket).data('guessed');
	
	if (typeof bucketValue == 'undefined')
		bucketValue = 0;
	
	// add coin to bucket:
	bucketValue += coinValue;
	
	// update bucket and display:
	$(bucket).data('guessed', bucketValue);
	$(bucket).siblings('.guessed').text(bucketValue);
}

/**
 * this code runs when page finished loading:
 */
$(document).ready(function() {
	// check button handler: do scoring, display results:
	$('#checkBtn').on('click',function(){
		score();
	})
});