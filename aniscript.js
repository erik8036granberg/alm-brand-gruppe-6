let button = document.querySelector("#boxContainer .one");

document.addEventListener("DOMContentLoaded", start);

function start() {

    console.log("start er kørt");

    button.addEventListener("click", slide1);

    function slide1() {
        console.log("slide1 er kørt");
        document.querySelector(".one").classList.add("slideanimation");

        document.querySelector(".button2").addEventListener("click", slide2);
    }

    function slide2() {
        console.log("slide2 er kørt");
        document.querySelector(".two").classList.add("slideanimation");

        document.querySelector(".button3").addEventListener("click", slide3);
    }

    function slide3() {
        console.log("slide3 er kørt");
        document.querySelector(".three").classList.add("slideanimation");

        document.querySelector(".button4").addEventListener("click", slide4);
    }

    function slide4() {
        console.log("slide4 er kørt");
        document.querySelector(".four").classList.add("slideanimation");
    }

}
