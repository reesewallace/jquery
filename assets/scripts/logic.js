

function flip() {
var random = Math.random();

var coinSide;

if (random > 0.5) {
  coinSide = "Heads";
}
else {
  coinSide = "Tails";
}
console.log(coinSide);

document.getElementById('result').innerHTML = coinSide;

}

$(document).ready(function(){
  $('.btn').click(function(){
    console.log($(this).attr('id'));
  });

$('#button1').click(function(){
  $('#hide').hide();
})
$('#button2').click(function(){
  $('#hide').show();

})
$('#button3').click(function(){
  $('#hide').toggle();
})
});
