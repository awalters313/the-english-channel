//This code tells the user the value of the stock they're viewing
var Stock = function(n, d, p) {
  this.name = n;
  this.demand = d;
  this.price = p;
  this.value = 0;
  this.report = function() {
    return this.name + " is worth $" + this.value;
  };
  this.buy = function() {
      this.value += (this.price * this.demand);
  }
  this.notOverValued = function() {
    if(this.value < overValued) {
    return true; 
  } else {
    return false;
  }
}
}
var overValued = 100;

var AAPL = new Stock("Apple", Math.floor(Math.random()*10), 7),
    TSLA = new Stock("Tesla", Math.floor(Math.random()*10), 5),
    SBUX = new Stock("Starbucks", Math.floor(Math.random()*10), 8);

while(AAPL.notOverValued() && TSLA.notOverValued() && SBUX.notOverValued()) {
  AAPL.buy();
  TSLA.buy();
  SBUX.buy();
}

console.log(AAPL.report());
console.log(TSLA.report());
console.log(SBUX.report());

$(document).ready(function() {
  $('#currentStatus').append('<h3>' + "Current Status: " + AAPL.report() + '</h3>');
});

$(document).ready(function() {
  $('button').on('click', function() {
    $(this).toggle('fast');
  });
});

$(document).ready(function() {
  $('img').on('mousedown', function() {
    $(this).slideUp([500]);
  })
})