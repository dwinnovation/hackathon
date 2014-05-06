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
   /*   var node = document.getElementById("yes-drop").cloneNode(true);
            $('#buckets').prepend(node);*/
	var bucketValue = $(bucket).data('guessed');

	console.log(coinValue);

    if (typeof bucketValue === 'undefined' || bucketValue === '')
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

	$('#coinModal .valuePanelCustom').on('click', function(){
		console.log("custom");
	});

	// showCoinModal();

	// check button handler: do scoring, display results:
	$('#checkBtn').on('click',function(){
		score();
	});
});

interact('.dropzone')
// enable draggables to be dropped into this
.dropzone(true)
// only accept elements matching this CSS selector
.accept('#yes-drop')
// listen for drop related events
.on('dragenter', function(event) {
    var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

    // feedback the possibility of a drop
    dropzoneElement.classList.add('drop-target');
    draggableElement.classList.add('can-drop');
})
.on('dragleave', function(event) {
    // remove the drop feedback style
    event.target.classList.remove('drop-target');
    event.relatedTarget.classList.remove('can-drop');
})
.on('drop', function(event) {
    var targetElement = event.target;
    var bucket = $(targetElement).find('.bucket');
	showCoinModal(bucket);
});


	// check button handler: do scoring, display results:
    $('#checkBtn').on('click', function() {
        score();
    });

interact('.dropzone')
        // enable draggables to be dropped into this
        .dropzone(true)
        // only accept elements matching this CSS selector
        .accept('#yes-drop')
        // listen for drop related events
        .on('dragenter', function(event) {
            var draggableElement = event.relatedTarget,
                    dropzoneElement = event.target;
            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
        })
        .on('dragleave', function(event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
        })
        .on('drop', function(event) {
            var targetElement = event.target;
            var bucket = $(targetElement).find('.bucket');
            var coinElement = event.relatedTarget;
            var coin = $(coinElement);


            coinDropped(coin, bucket);


        });

interact('.drag-drop')
        .draggable({
            onmove: function(event) {
                var target = event.target;

                target.x = (target.x | 0) + event.dx;
                target.y = (target.y | 0) + event.dy;

                target.style.webkitTransform = target.style.transform =
                        'translate(' + target.x + 'px, ' + target.y + 'px)';
            }
        })
        .inertia(true)
        .restrict({drag: 'parent'});
