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

<<<<<<< HEAD
    var bucketValue = $(bucket).data('guessed');
=======
	var bucketValue = $(bucket).data('guessed');
>>>>>>> 88bf9d9dedfe2a46476ea888f6bdf9ce2929d6bb

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
    	$('#checkBtn').prop('disabled', false);
}

function dragCoin(coinItem, event) {
    console.log("dragCoin");
}

function dropCoin(bucketItem, event) {
    var totalValue = $('.total .distributed').text();
    if (totalValue < 100) {
        // show dialog for selecting coin value:
        showCoinModal(bucketItem);
    }


    // tell browser that we are handled this event:
    event.preventDefault();
}

/**
 * initialize the game by filling product data and resetting status
 * @param productDescription
 */
function initGame(productDescription) {

	console.log(productDescription);

	// load product base data
	$('#productImage').attr('src', productDescription.imageUrl);

	// TODO: use productDescription.name;

	// load the costs, reset buckets:
	for (costKey in productDescription.costs) {
		var costBucket = $('#buckets [id$='+costKey+'-bucket]');

		console.log(costBucket);

		costBucket.find('img.bucket')
			.data('correct', productDescription.costs[costKey])
			.data('guessed', 0);

		costBucket.find('.guessed').text( 0 );
	}

	// reset play status:
	$('.total .distributed').text(0);
	$('#checkBtn').prop('disabled', true);

}

/**
 * initialize the game by filling product data and resetting status
 * @param productDescription
 */
function initGame(productDescription) {

	console.log(productDescription);
	
	// load product base data
	$('#productImage').attr('src', productDescription.imageUrl);

	// TODO: use productDescription.name;
	
	// load the costs, reset buckets:
	for (costKey in productDescription.costs) {
		var costBucket = $('#buckets [id$='+costKey+'-bucket]');
		
		console.log(costBucket);
		
		costBucket.find('img.bucket')
			.data('correct', productDescription.costs[costKey])
			.data('guessed', 0);
		
		costBucket.find('.guessed').text( 0 );
	}
	
	// reset play status:
	$('.total .distributed').text(0);
	$('#checkBtn').prop('disabled', true);
	
}

/**
 * this code runs when page finished loading:
 */
$(document).ready(function() {
<<<<<<< HEAD

	// initialize game with first product:
	initGame(productData[0]);
    // init modal dialog:

    // onclick handlers for value panels:
    $('#coinModal .valuePanel').each(
            function(index, item) {
                $(item).on('click', function() {
                    var coinValue = $(item).data('value');
                       var totalValue = $('.distributed').text();

                    var currentTotal = parseInt(coinValue) + parseInt(totalValue);
                     console.log(currentTotal);
                    if(( currentTotal) <= 100){
                       hideCoinModal(coinValue);
                    }

                });
            }
    );

    $('#coinModal .valueCustomPanel .btn').on('click', function() {
        var coinValue = $('#coinModal .valueCustomPanel input').val();
        if (typeof coinValue === 'undefined' || coinValue === '') {
            hideCoinModal(null);
        } else {
            hideCoinModal(parseInt(coinValue));
        }
    });

    $('#coinModal .valuePanelCustom').on('click', function() {
        console.log("custom");
    });

    // check button handler: do scoring, display results:
    $('#checkBtn').on('click', function() {
        score();
    });

=======
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
	
	// initialize game with first product:
	initGame(productData[0]);
>>>>>>> 88bf9d9dedfe2a46476ea888f6bdf9ce2929d6bb
});

//Flippy

$("#checkBtn").click(function() {

<<<<<<< HEAD
    $("#wages-bucket").flippy({
        direction: "RIGHT",
        duration: "500",
        depth: 0,
        verso: "<img src='img/coin.jpg' />",
        recto: "Hier steht noch mehr Zeug"
    });

    $("#wages-bucket").hover(function() {
        $(this).flippyReverse();
    });

    setTimeout(function() {
        $("#materials-bucket").flippy({
            direction: "RIGHT",
            duration: "500",
            depth: 0,
            verso: "<img src='img/coin.jpg' />",
            recto: "Hier steht noch mehr Zeug"
        });
    }, 1500);

    $("#materials-bucket").hover(function() {
        $(this).flippyReverse();
    });

    setTimeout(function() {
        $("#logistics-bucket").flippy({
            direction: "RIGHT",
            duration: "500",
            depth: 0,
            verso: "<img src='img/coin.jpg' />",
            recto: "Hier steht noch mehr Zeug"
        });
    }, 2500);

    $("#logistics-bucket").hover(function() {
        $(this).flippyReverse();
    });

    setTimeout(function() {
        $("#taxes-bucket").flippy({
            direction: "RIGHT",
            duration: "500",
            depth: 0,
            verso: "<img src='img/coin.jpg' />",
            recto: "Hier steht noch mehr Zeug"
        });
    }, 3500);

    $("#taxes-bucket").hover(function() {
        $(this).flippyReverse();
    });

    setTimeout(function() {
        $("#profit-bucket").flippy({
            direction: "RIGHT",
            duration: "500",
            depth: 0,
            verso: "<img src='img/coin.jpg' />",
            recto: "Hier steht noch mehr Zeug"
        });
    }, 4500);

    $("#profit-bucket").hover(function() {
        $(this).flippyReverse();
    });

    setTimeout(function() {
        $("#marketing-bucket").flippy({
            direction: "RIGHT",
            duration: "500",
            depth: 0,
            verso: "<img src='img/coin.jpg' />",
            recto: "Hier steht noch mehr Zeug"
        });
    }, 5500);

    $("#marketing-bucket").hover(function() {
        $(this).flippyReverse();
    });

});
=======
	$("#wages-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:'<span class="lead headline">Lohn</span><div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
		recto:'<span class="lead headline">Lohn</span>Hier steht noch mehr Zeug'
 	});

 	$("#wages-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

 	setTimeout(function(){
 		$("#materials-bucket").flippy({
    	direction:"RIGHT",
	    duration: "500",
	    depth:0,
	    verso:'<span class="lead headline">Material</span><div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
		recto:'<span class="lead headline">Material</span>Hier steht noch mehr Zeug'
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
	    verso:'<span class="lead headline">Logistik</span><div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
		recto:'<span class="lead headline">Logistik</span>Hier steht noch mehr Zeug'
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
	    verso:'<span class="lead headline">Steuern</span><div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
		recto:'<span class="lead headline">Steuern</span>Hier steht noch mehr Zeug'
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
	    verso:'<span class="lead headline">Profit</span><div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
		recto:'<span class="lead headline">Profit</span>Hier steht noch mehr Zeug'
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
	    verso:'<span class="lead headline">Marketing</span><div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
		recto:'<span class="lead headline">Marketing</span>Hier steht noch mehr Zeug'
	 	});
	 }, 5500);

	$("#marketing-bucket").hover(function(){
 		$(this).flippyReverse();
 	});

 });
>>>>>>> 88bf9d9dedfe2a46476ea888f6bdf9ce2929d6bb
