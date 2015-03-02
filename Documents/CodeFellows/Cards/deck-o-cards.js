function Card(rank, suit) {
  this.rank = rank;
  this.suit = suit;
  this.toHTML = function() {
    return "<li class='card'>" + this.rank + "-" + this.suit + "</li>";
  }
};

function Deck() {
  var thisDeck = this;
  this.suits = ['Fi','S','T','Fo'];
  this.ranks = ['1','2','3','4'];

  $.each(this.suits, function(index, suit) {
    $.each(thisDeck.ranks, function(index, rank) {
      card = new Card(rank, suit);
      $('#deck').append(card.toHTML());
    })
  })
};

$(document).ready(function() {
    $('.scramble').on('click', function() {
      var shuffle = function(m) {
        var rand, $rand;

        rand = Math.floor(Math.random() * m--);

        $("li:eq("+ m +")").
        after($("li:eq("+ rand +")")).
        insertBefore($("li:eq("+ rand +")"))

        if(m) {
          setTimeout(shuffle,50,m);
        }
      }
      shuffle($('li').length);
    })
  });

var deck = new Deck();
$( "li:contains('1-Fi')" ).addClass( 'oneFi' );
$( "li:contains('2-Fi')" ).addClass( 'twoFi' );
$( "li:contains('3-Fi')" ).addClass( 'threeFi' );
$( "li:contains('4-Fi')" ).addClass( 'fourFi' );
$( "li:contains('1-S')" ).addClass( 'oneS' );
$( "li:contains('2-S')" ).addClass( 'twoS' );
$( "li:contains('3-S')" ).addClass( 'threeS' );
$( "li:contains('4-S')" ).addClass( 'fourS' );
$( "li:contains('1-T')" ).addClass( 'oneT' );
$( "li:contains('2-T')" ).addClass( 'twoT' );
$( "li:contains('3-T')" ).addClass( 'threeT' );
$( "li:contains('4-T')" ).addClass( 'fourT' );
$( "li:contains('1-Fo')" ).addClass( 'oneFo' );
$( "li:contains('2-Fo')" ).addClass( 'twoFo' );
$( "li:contains('3-Fo')" ).addClass( 'threeFo' );
$( "li:contains('4-Fo')" ).addClass( 'fourFo' );

$(document).ready(function() {
  $('li').draggable();
});

$('.solve').click(function() {
    location.reload();
});

var optimizedResize = (function() {

    var callbacks = [],
        running = false;

    // fired on resize event
    function resize() {

        if (!running) {
            running = true;

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(runCallbacks);
            } else {
                setTimeout(runCallbacks, 66);
            }
        }

    }

    // run the actual callbacks
    function runCallbacks() {

        callbacks.forEach(function(callback) {
            callback();
        });

        running = false;
    }

    // adds callback to loop
    function addCallback(callback) {

        if (callback) {
            callbacks.push(callback);
        }

    }

    return {
        // initalize resize event listener
        init: function(callback) {
            window.addEventListener('resize', resize);
            addCallback(callback);
        },

        // public method to add additional callback
        add: function(callback) {
            addCallback(callback);
        }
    }
}());

// start process
optimizedResize.init(function() {
    console.log('Resource conscious resize callback!')
});
