//use of an anonymous function

//---------------------------------------------------------------
// "addEventListener" function 
//Takes 2 input
// first one checks what event It should listen to 
// second one see what it should do when that particular event occurs
//----------------------------------------------------------------

for(var i=0; i<document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    makeSound(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();   
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();                
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();     
            break;
    
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();                
            break;
    
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();                
            break;

        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();                
            break;
    
    }
}

function buttonAnimation(currentKey) {
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 100);
}


// var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();


// constructor function
// function HouseKeeper(name, yearOfExperience, cleaningRepertoire) {
//     this.name = name;
//     this.yearOfExperience = yearOfExperience;
//     this.cleaningRepertoire = cleaningRepertoire;
// }