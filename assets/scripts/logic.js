
/*--
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
  $('#hide').toggle();
  $('#button3').css('background-color' ,'#4caf50');
})
$('#button2').click(function(){
  $('#hide').html('');
  $('#hide').prepend("Hello, let's have some fun with jQuery");


  //$('#hide').empty();
})
$('#button3').click(function(){
console.log($('#input').val());

})

});
*/
$(document).ready(function(){
  $('#red').click(function(){
    $('#ipsum').append("<span class='red'>Bacon ipsum dolor amet short ribs filet mignon tenderloin kielbasa brisket pork landjaeger tail prosciutto sirloin salami kevin pork belly meatball. Tri-tip rump corned beef, burgdoggen ribeye prosciutto beef bresaola tenderloin bacon brisket meatloaf drumstick. Flank bacon sirloin jowl, sausage t-bone hamburger. Pastrami meatloaf capicola beef picanha chuck.</span>")
  })
  $('#green').click(function(){
    $('#ipsum').append("<span class='green'>Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! How much did you make me? I don't 'need' to drink. I can quit anytime I want! And then the battle's not so bad? You can crush me but you can't crush my spirit! </span>")

  })
  $('#blue').click(function(){

    $('#ipsum').append("<span class='blue'>You have to allow the paint to break to make it beautiful. There are no mistakes. You can fix anything that happens. We'll throw some old gray clouds in here just sneaking around and having fun. It's hard to see things when you're too close. Take a step back and look. Use what happens naturally, don't fight it. That's a crooked tree. We'll send him to Washington.</span>")
  })
  $('#redshow').click(function(){
  $('.red').show();
})
  $('#greenshow').click(function(){
  $('.green').show();

  })
  $('#blueshow').click(function(){
    $('.blue').show();
  })
  $('#redhide').click(function(){
  $('.red').hide();
})
  $('#greenhide').click(function(){
  $('.green').hide();

  })
  $('#bluehide').click(function(){
    $('.blue').hide();
  })

})
