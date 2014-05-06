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

function coinDropped(coin, bucket) {
    var coinValue = $(coin).data('value');

    var bucketValue = $(bucket).data('guessed');

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
    // check button handler: do scoring, display results:
    $('#checkBtn').on('click', function() {
        score();
    })
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
            draggableElement.textContent = 'Dragged in';
        })
        .on('dragleave', function(event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
            event.relatedTarget.textContent = 'Dragged out';
        })
        .on('drop', function(event) {
            event.relatedTarget.textContent = 'Dropped';
            var targetElement = event.target;
            var bucket = $(targetElement).find('.bucket');
            var coinElement = event.relatedTarget;
            var coin = $(coinElement);
            coinDropped(coin, bucket);
            console.log(coin);
            console.log(bucket);


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
