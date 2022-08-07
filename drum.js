
var numberOfDrum = document.querySelectorAll('.drum').length;

for (i = 0; i < numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        // switch (buttonInnerHTML) {

        //     case 'A <i class="fa-solid fa-drum"></i>':
        //         var drum2 = new Audio("./drum2.mp3");
        //         drum2.play();
        //         break;
        //     case 'W <i class="fa-solid fa-drum"></i>':
        //         var drum1 = new Audio("./drum1.mp3");
        //         drum1.play();
        //         break;

        //     case 'D <i class="fa-solid fa-drum"></i>':
        //         var drum3 = new Audio("./drum3.mp3");
        //         drum3.play();
        //         break;

        //     case 'F <i class="fa-solid fa-drum"></i>':
        //         var drum4 = new Audio("./drum4.mp3");
        //         drum4.play();
        //         break;

        //     case 'I <i class="fa-solid fa-drum"></i>':
        //         var drum5 = new Audio("./drum5.mp3");
        //         drum5.play();
        //         break;

        //     case 'J <i class="fa-solid fa-drum"></i>':
        //         var drum6 = new Audio("./drum6.mp3");
        //         drum6.play();
        //         break;

        //     case 'K <i class="fa-solid fa-drum"></i>':
        //         var drum7 = new Audio("./drum7.mp3");
        //         drum7.play();
        //         break;

        //     case 'L <i class="fa-solid fa-drum"></i>':
        //         var drum8 = new Audio("./drum8.mp3");
        //         drum8.play();
        //         break;

        //     default:
        //         console.log(InnerHTML);
        //         break;
        // }
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
})

function makesound(key) {
    switch (key) {

        case 'A':
            var drum2 = new Audio("./drum2.mp3");
            drum2.play();
            break;
        case 'W':
            var drum1 = new Audio("./drum1.mp3");
            drum1.play();
            break;

        case 'D':
            var drum3 = new Audio("./drum3.mp3");
            drum3.play();
            break;

        case 'F':
            var drum4 = new Audio("./drum4.mp3");
            drum4.play();
            break;

        case 'I':
            var drum5 = new Audio("./drum5.mp3");
            drum5.play();
            break;

        case 'J':
            var drum6 = new Audio("./drum6.mp3");
            drum6.play();
            break;

        case 'K':
            var drum7 = new Audio("./drum7.mp3");
            drum7.play();
            break;

        case 'L':
            var drum8 = new Audio("./drum8.mp3");
            drum8.play();
            break;

        default:
            console.log(InnerHTML);
            break;
    }
}
