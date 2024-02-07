let drums = document.querySelectorAll(".drum");

for(let i=0;i<drums.length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var c = this.innerHTML;
        playSound(c);
        btnAnimation(c);
    });
}

document.addEventListener("keydown", function() {
    
    playSound(event.key);
    btnAnimation(c);
})

function playSound(key){
    switch(key){
        case "w":
            let sound1 = new Audio("./tom-1.mp3");
            sound1.play();
            break;

        case "a":
            let sound2 = new Audio("./tom-2.mp3");
            sound2.play();
            break;

        case "s":
            let sound3 = new Audio("./tom-3.mp3");
            sound3.play();
            break;

        case "d":
            let sound4 = new Audio("./tom-4.mp3");
            sound4.play();
            break;

        case "j":
            let sound5 = new Audio("./snare.mp3");
            sound5.play();
            break;

        case "k":
            let sound6 = new Audio("./crash.mp3");
            sound6.play();
            break;

        case "l":
            let sound7 = new Audio("./kick-bass.mp3");
            sound7.play();
            break;
        
        default: "Invalid";
        }
    }

    function btnAnimation(key){
        let button = document.querySelector("." + key);

        button.classList.add("pressed");

        setTimeout(() => {
            button.classList.remove("pressed");
        }, 100);
    }