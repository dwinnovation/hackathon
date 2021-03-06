var Constants = {
    coinDropSound: 'sounds/cash_register_x.wav',
    coinDragImage: 'img/coin.png',
}

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

    // console.log(result);
}

function coinDropped(coinValue, bucket) {

	// play sound on coin drop:
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', Constants.coinDropSound);
    audioElement.play();
	
	var bucketValue = $(bucket).data('guessed');

    if (typeof bucketValue === 'undefined' || bucketValue === '')
        bucketValue = 0;

    // add coin to bucket:
    bucketValue += coinValue;

    // update bucket and display:
    $(bucket).data('guessed', bucketValue);
    $(bucket).find('.guessed').text(bucketValue);

    // update sum:
    var totalVal = parseInt($('.total .distributed').text());
    totalVal += coinValue;
    $('.total .distributed').text(totalVal);

    // enable "check" button when 100 coins have been distributed:
    if (totalVal === 100)
        $('#checkBtn').prop('disabled', false);
}

function dragCoin(coinItem, event) {
    // set the drag image (does not work in IE)
	var image = new Image();
    image.src = Constants.coinDragImage;
    event.dataTransfer.setDragImage(image, 0, 0);
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
 * preload an image to make sure it's in the browser cache when we need it:
 * @param imageUrl
 */
function preloadImage(imageUrl) {
	var img = new Image();
	img.src = imageUrl;
}

/**
 * initialize the game by filling product data and resetting status
 * @param productDescription
 */
function initGame(productDescription) {

    // load product base data
    $('#productImage').attr('src', productDescription.imageUrl);

    // set name and price:
    $('#productInfoPanel').find('.productName').text(productDescription.name);
    $('#productInfoPanel').find('.productPrice').text(productDescription.price);

    // TODO: gray overlay while resetting

    // load the costs, reset buckets:
    for (costKey in productDescription.costs) {
        var costBucket = $('#buckets [id$=' + costKey + '-bucket]');

        costBucket
                .data('correct', productDescription.costs[costKey])
                .data('guessed', 0);

        costBucket.find('.guessed').show().text(0);

        costBucket.find('.flipper').remove();
        costBucket.find('img').show();
    }

    // reset play status:
    $('.total .distributed').text(0);
    $('#checkBtn').prop('disabled', true);

    // hide level navigator:
    $('#levelNavigator').addClass("hidden");
}

/**
 * this code runs when page finished loading:
 */
$(document).ready(function() {

    // initialize game with first product:
    initGame(productData[currentProductIndex]);

    // preload images:
    preloadImage(Constants.coinDragImage);
    
    // init modal dialog:

    // onclick handlers for value panels:
    $('#coinModal .valuePanel').each(
            function(index, item) {
                $(item).on('click', function() {
                    var coinValue = $(item).data('value');
                    var totalValue = $('.distributed').text();

                    var currentTotal = parseInt(coinValue) + parseInt(totalValue);
                    //     console.log(currentTotal);
                    if ((currentTotal) <= 100) {
                        hideCoinModal(coinValue);
                    }

                });
            }
    );

    // onclick handler for custom value button
    $('#coinModal .valueCustomPanel .btn').on('click', function() {
        var coinValue = $('#coinModal .valueCustomPanel input').val();

        if (typeof coinValue === 'undefined' || coinValue === '') {
            hideCoinModal(null);
        } else {
            var totalVal = parseInt($('.total .distributed').text()) + parseInt(coinValue);

            if (totalVal > 100) {
            	$('#coinModal valueCustomPanel');
            } else {
                hideCoinModal(parseInt(coinValue));
            }
        }
    });

    // enter key handler
    $('#coinModal .valueCustomPanel input').on('keyup', function(e){
	    if (e.keyCode == 13) {
	    	$('#coinModal .valueCustomPanel .btn').click();
	    }
    });

    $('#coinModal .valuePanelCustom').on('click', function() {
        console.log("custom");
    });

    // check button handler: do scoring, display results:
    $('#checkBtn').on('click', function() {
        $('#checkBtn').prop('disabled', true);

    	score();

        // show level navigator:
        $('#levelNavigator').removeClass("hidden");
    });

    $('#nextLevelBtn').on('click', function() {
        initGame(productData[++currentProductIndex]);
    });

    // initialize game with first product:
    initGame(productData[0]);
});

//Flippy

$("#checkBtn").click(function() {

    var myBucketValue = new Array("wages", "materials", "logistics", "taxes", "profit", "marketing");

    for (var i = 0; i < myBucketValue.length; i++) {
        var guessedValue = $("#" + myBucketValue[i] + "-bucket").data("guessed");
        var correctValue = productData[currentProductIndex].costs[myBucketValue[i]];
        var textValue = productData[currentProductIndex].texts[myBucketValue[i]];
        console.log(guessedValue);
        console.log(correctValue);

        $("#" + myBucketValue[i] + "-bucket img").hide();
        $("#" + myBucketValue[i] + "-bucket .guessed").hide();

        var div = $('<div>').addClass('flipper').addClass('row');

        div.flippy({
            direction: "RIGHT",
            duration: "500",
            depth: 0,
            verso: '<div class="col-md-6">'+
                   '    <div class="diagramm left">'+
                   '        <div class="bar guessed" style="height:' + guessedValue + '%;"></div>'+
                   '        <span class="number number-guessed">' + guessedValue + '%</span>'+
                   '    </div>'+
                   '</div>'+
                   '<div class="col-md-6">'+
                   '    <div class="diagramm right">'+
                   '        <div class="bar correct" style="height:' + correctValue + '%;"></div>'+
                   '        <span class="number number-correct">' + correctValue + '%</span>'+
                   '    </div>'+
                   '</div>',
            recto: textValue
        });

        div.hover(function() {
            $(this).flippyReverse();
        });

    /*    setTimeout(function() {
           div.flippy({
                direction: "RIGHT",
                duration: "500",
                depth: 0,
                verso: '<div class="diagramm"><div class="diagramm-default red"><div style="height:90%;"></div><!--- Hier die Differenz 100% - geratener Wert eintragen --><span id="diagramm-guess">10%</span><!-- Geratener Wert --></div><div class="diagramm-label-left">Guess</div><div class="diagramm-default blue"><div style="height:70%;"></div><!-- Hier die Differenz 100% - realer Wert eintragen --><span id="diagramm-correct">33%</span><!-- Realer Wert --></div><div class="diagramm-label-right">Reality</div></div>',
                recto: 'Hier steht noch mehr Zeug'
            });
        }, 1500);*/

        $("#" + myBucketValue[i] + "-bucket").append(div);
    }
});
