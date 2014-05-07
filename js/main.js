/**
 * show modal dialog for coin values
 * @param bucket
 *     the bucket object the coin was dropped on
 */
function showCoinModal(bucket) {
	// save bucket object so we can use it later
	$('#coinModal').data('bucket', bucket);
	// show dialog
	$('#coinModal').modal();
}

/**
 * hide the modal coin value dialog after an option has been selected.
 * @param value
 *     the selected value or null
 */
function hideCoinModal(value) {
	if (value === null || value == 0) {
		// nothing
	} else {
		var bucket = $('#coinModal').data('bucket');
		// drop coin into the bucket
		coinDropped(value, bucket);
	}

	$('#coinModal').modal('hide');
}

/**
 * input:
 *   guessed: array of number
 *   correct: array of number
 * output:
 *   average absolute deviation between guessed and correct
 */
function averageDeviation(guessed, correct) {
    var sum = 0;
    for (var i = 0; i < guessed.length; i++) {
        sum += Math.abs(guessed[i] - correct[i]);
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

function coinDropped(coinValue, bucket) {

	var bucketValue = $(bucket).data('guessed');

	console.log(coinValue);

    if (typeof bucketValue === 'undefined' || bucketValue === '')
        bucketValue = 0;

    // add coin to bucket:
    bucketValue += coinValue;

    // update bucket and display:
    $(bucket).data('guessed', bucketValue);
    $(bucket).siblings('.guessed').text(bucketValue);

    // update sum:
    var totalVal = parseInt($('.total .distributed').text());
    totalVal += coinValue;
    $('.total .distributed').text(totalVal);

    // enable "check" button when 100 coins have been distributed:
    if (totalVal === 100)
    	$('#checkBtn').removeAttr('disabled');
}

function dragCoin(coinItem, event) {
	console.log("dragCoin");
}

function dropCoin(bucketItem, event) {
      var totalValue = $('.total .distributed').text()
  if(totalValue < 100){
      	// show dialog for selecting coin value:
	showCoinModal(bucketItem);
  } 


	// tell browser that we are handled this event:
	event.preventDefault();
}

/**
 * this code runs when page finished loading:
 */
$(document).ready(function() {
	// init modal dialog:

	// onclick handlers for value panels:
	$('#coinModal .valuePanel').each(
		function(index,item) {
			$(item).on('click',function(){
				var coinValue = $(item).data('value');
				console.log(coinValue);
				hideCoinModal(coinValue)
			});
		}
	);

	$('#coinModal .valueCustomPanel .btn').on('click',function(){
		var coinValue = $('#coinModal .valueCustomPanel input').val();
		if (typeof coinValue === 'undefined' || coinValue === '') {
			hideCoinModal(null);
		} else {
			hideCoinModal(parseInt(coinValue));
		}
	});

	$('#coinModal .valuePanelCustom').on('click', function(){
		console.log("custom");
	});

	// check button handler: do scoring, display results:
	$('#checkBtn').on('click',function(){
		score();
	});
});

//Flippy

$("#checkBtn").click(function() {

	$("#wages-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:"<img src='img/coin.jpg' />",
		recto:"Hier steht noch mehr Zeug"
 	});

 	$("#wages-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

 	setTimeout(function(){
 		$("#materials-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:"<img src='img/coin.jpg' />",
		recto:"Hier steht noch mehr Zeug"
	 	});
	 }, 1500);

	$("#materials-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

	  	setTimeout(function(){
 		$("#logistics-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:"<img src='img/coin.jpg' />",
		recto:"Hier steht noch mehr Zeug"
	 	});
	 }, 2500);

	$("#logistics-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

	  	setTimeout(function(){
 		$("#taxes-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:"<img src='img/coin.jpg' />",
		recto:"Hier steht noch mehr Zeug"
	 	});
	 }, 3500);

	$("#taxes-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

	  	setTimeout(function(){
 		$("#profit-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:"<img src='img/coin.jpg' />",
		recto:"Hier steht noch mehr Zeug"
	 	});
	 }, 4500);

	$("#profit-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

	  	setTimeout(function(){
 		$("#marketing-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:"<img src='img/coin.jpg' />",
		recto:"Hier steht noch mehr Zeug"
	 	});
	 }, 5500);

	$("#marketing-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

 });
