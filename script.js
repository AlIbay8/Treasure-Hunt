$(".choiceX").hide();
$(".hardChoice").hide();
$(".My-Cherished-Items").hide();

$("#tickle").click(function() {
    $(".dbl").html("<h1>Stop, it tickles. Please don't do it faster.</h1>");
    $(".Tom").hide();
});

$(".dbl").dblclick(function() {
    $(".greedyButton").fadeIn();
    $(".dbl").html("<h1>Can you just click the button instead?</h1>");
});

var greedyClick = 0;

$(".greedyButton").click(function() {
    $(".greedyButtonText").text("Oh yes, please click me 5 more times.");
    greedyClick += 1;
    $(".dbl").hide();
    $(".no").show();
    
    if (greedyClick > 5) {
        $(".greedyButtonText").text("I'm not satisfied after just 6 clicks, I need 10 more.");
    }  
    
    if (greedyClick > 15) {
        $(".clickX").show();
        $(".greedyButton").hide();
        $(".buttonText").text("Click the X at the top!");
        $(".x").slideDown();
    }
    
    if (greedyClick > 100) {
        $(".buttonText").text("Congrats, you clicked this 100 times!");
    }
});

$(".no").click(function() {
    $(".no").html("<h1>I am immune to all clicks now.</h1>");
});

$(".x").hover(function() {
    $(".x").hide();
    $(".b").show();
    $(".clickX").hide();
    $(".bButton").show();
    $(".buttonText").text("I guess it's a B now. It might need a double click.");
});

$(".b").dblclick(function() {
    $(".b").hide();
    $(".bButton").hide();
    $(".no").hide();
    $(".iSee").show();
});

var iSeeClick = 0;

$(".iSee").click(function() {
    iSeeClick += 1;
    
    if (iSeeClick > 0) {
        $(".dialogue").text("No one would do all of that coincidentally.");
    }
    if (iSeeClick > 1) {
        $(".dialogue").text("Follow my instructions to get to the treasure.");
    }
    if (iSeeClick > 2) {
        $(".dialogue").text("Click the red X.");
        $(".choiceX").show();
    }
});

var dialogueX1Click = 0;
var dialogueX2Click = 0;
var dialogueX3Click = 0;
var dialogueX4Click = 0;

$(".x1").click(function() {
    $(".choiceX").hide();
    $(".FeelingFineP").hide();
    $(".narratorX1").show();
});

$(".dialogueX1").click(function() {
    dialogueX1Click += 1;
    
    if (dialogueX1Click > 0) {
        $(".dialogueX1").text("You are straightforward and direct.");
    }
    if (dialogueX1Click > 1) {
        $(".dialogueX1").text("Let's shake things up a little.");
    }
    if (dialogueX1Click > 2) {
        $(".dialogueX1").text("Find my hidden link in the following website.");
    }
    if (dialogueX1Click > 3) {
        $(".dialogueX1").hide();
        $(".My-Cherished-Items").show();
        $("body").css("background-image", "url('https://media.istockphoto.com/photos/rough-wall-texture-wall-background-house-facade-with-spatula-picture-id928718792')");
    }
});

// Cherished Items Blog jQuery ====================================
$(".subH").click(function() {
    $(".Home").show();
    $(".About").hide();
    $(".Profile").hide();
    $(".DontClick").hide();
});

$(".subA").click(function() {
    $(".Home").hide();
    $(".About").show();
    $(".Profile").hide();
    $(".DontClick").hide();
});

$(".subP").click(function() {
    $(".Home").hide();
    $(".About").hide();
    $(".Profile").show();
    $(".DontClick").hide();
});

$(".subD").click(function() {
    $(".Home").hide();
    $(".About").hide();
    $(".Profile").hide();
    $(".DontClick").show();
});

$(".hiddenLink").click(function() {
    $(".hiddenLink").hide();
    $(".treasureHolder").html("<p>YOU FOUND THE TREASURE!</p> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiO9oxPK79PXMdTwUVxNawYbThKrZHJmJ9Luk3uiIMkeB7p9yl'>");
});
// Cherished Items Blog jQuery ====================================

$(".x2").click(function() {
    $(".choiceX").hide();
    $(".FeelingFineP").hide();
    $(".narratorX2").show();
});

$(".dialogueX2").click(function() {
    dialogueX2Click += 1;
    
    if (dialogueX2Click > 0) {
        $(".dialogueX2").text("In order to get to the treasure, you need to comply with me.");
    }
    if (dialogueX2Click > 1) {
        $(".dialogueX2").text("Do as I say.");
    }
    if (dialogueX2Click > 2) {
        $(".dialogueX2").text("Scream 'PANCAKES ARE THE TRUE CULPRIT' out loud right now.");
    }
    if (dialogueX2Click > 3) {
        $(".dialogueX2").text("Or you can just type it in here;");
        $(".screamInput").show();
    }
});

$(".dialogueX22").click(function() {
    $(".dialogueX22").text("Or you can just type it in here;");
    $(".screamInput").show();
});

$(".pancakesSubmit").click(function() {
    var phrase = $(".pancakes").val().toLowerCase();
    if (phrase === "pancakes are the true culprit") {
        $(".narratorX2").text("You found the treasure!");
        $(".screamInput").hide();
        $(".treasure").show();
        $(".treasure").html("<img src='https://www.rd.com/wp-content/uploads/2018/03/shutterstock_606386186.jpg'>");
    }
});

$(".x3").click(function() {
    $(".choiceX").hide();
    $(".FeelingFineP").hide();
    $(".narratorX3").show();
});

$(".dialogueX3").click(function() {
    dialogueX3Click += 1;
    
    if (dialogueX3Click > 0) {
        $(".dialogueX3").text("You want to find the treasure, huh?");
    }
    if (dialogueX3Click > 1) {
        $(".dialogueX3").text("Only clever people will get to the treasure.");
    }
    if (dialogueX3Click > 2) {
        $(".dialogueX3").text("And to get to the treasure, you must click the button.");
        $(".tab").show();
    }
});

setInterval(function() {
    $(".move").css('left', Math.random() * 700);
    $(".move").css('top', Math.random() * 700);
}, 500);

$(".tab").click(function() {
    $(".narratorX3").text("I see that you are a clever one. You deserve this treasure.");
        $(".tab").hide();
        $(".click").hide();
        $(".treasure").show();
        $(".treasure").html("<img src='https://images-na.ssl-images-amazon.com/images/I/71vDVbJGotL._SX466_.jpg'>");
});

$(".click").click(function() {
    $(".narratorX3").text("I guess that works as well.");
        $(".tab").hide();
        $(".click").hide();
        $(".treasure").show();
        $(".treasure").html("<img src='https://images-na.ssl-images-amazon.com/images/I/71vDVbJGotL._SX466_.jpg'>");
});

$(".tab").mouseenter(function() {
    $(".tab").hide();
    $(".click").show();
});


$(".x4").click(function() {
    $(".choiceX").hide();
    $(".FeelingFineP").hide();
    $(".narratorX4").show();
});

$(".dialogueX4").click(function() {
    dialogueX4Click += 1;
    
    if (dialogueX4Click > 0) {
        $(".dialogueX4").text("Now, to get to the treasure, you have to make another correct choice.");
    }
    if (dialogueX4Click > 1) {
        $(".dialogueX4").text("No one has ever reached this treasure because this choice is so hard.");
        $(".hardChoice").show();
    }
});

$(".choice").click(function() {
    $(".dialogueX4").hide();
    $(".narratorX42").show();
});


var dialogueX42Click = 0;

$(".dialogueX42").click(function() {
    
    dialogueX42Click += 1;
    
    if (dialogueX42Click > 0) {
        $(".dialogueX42").text("You probably gave up and decided to risk it all...");
    }
    if (dialogueX42Click > 1) {
        $(".dialogueX42").text("...knowing that you can just reload the page and see what the other choice gets you.");
    }
    if (dialogueX42Click > 2) {
        $(".dialogueX42").text("Just go ahead and take your win so you don't have to come back here again.");
        $(".treasure").html("<p>You got the treasure!</p><img src='https://image.shutterstock.com/display_pic_with_logo/540268/606386231/stock-photo-open-treasure-chest-filled-with-gold-coins-high-contrast-image-606386231.jpg'>");
        $(".hardChoice").hide();
        $(".treasure").show();
    }
});