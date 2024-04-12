var screen = document.querySelectorAll(".screen")

var btn = document.querySelector("button")

var allelems = document.querySelectorAll(".elem")

var gamescr = document.querySelector(".gamepart")

var timer = document.querySelector(".timer h3")

var score = document.querySelector(".score h3")

var gameover = document.querySelector("#gameover")

var imgx = document.querySelector("#imgx")

var png1 = document.querySelector("#img1")

var png2 = document.querySelector("#img2")

var png3 = document.querySelector("#img3")

var png4 = document.querySelector("#img4")

var img1src = png1.getAttribute("src")
var img2src = png2.getAttribute("src")
var img3src = png3.getAttribute("src")
var img4src = png4.getAttribute("src")




btn.addEventListener("click", function () {
    screen[1].style.transform = "translateY(-100%)"

})


allelems[0].addEventListener("click", function (img) {
    screen[2].style.transform = "translateY(-200%)"
    imgx.setAttribute("src", img1src)

})
allelems[1].addEventListener("click", function () {
    screen[2].style.transform = "translateY(-200%)"
    imgx.setAttribute("src", img2src)
})
allelems[2].addEventListener("click", function () {
    screen[2].style.transform = "translateY(-200%)"
    imgx.setAttribute("src", img3src)
})
allelems[3].addEventListener("click", function () {
    screen[2].style.transform = "translateY(-200%)"
    imgx.setAttribute("src", img4src)
})





var grow = 0;


var time = 10
var flag = true;
function starttimer() {
    setInterval(function () {
        if (time > 0) {
            time--;
            timer.innerHTML = time;
            flag= false
        }
    }, 1000)
}

gamescr.addEventListener("click",function(){
    if (flag){
        starttimer();
        flag= false
    }
    if (time == 0) {
        gameover.style.display = "initial"
        imgx.style.display = "none"
    }

})


imgx.addEventListener("click", function () {
   

    
    
    grow += 10
    score.innerHTML = grow
    imgx.style.top = Math.floor(Math.random() * 80) + "%"
    imgx.style.left = Math.floor(Math.random() * 80) + "%"
    imgx.style.rotate = Math.floor(Math.random() * 360) + "deg"
})

var re = document.querySelector("#restart")



function resetGame() {
   grow = 0;
   time = 1;
   flag = true;
   timer.innerHTML = time;
   score.innerHTML = grow;
   gameover.style.display = "none";
   imgx.style.display = "initial";
   screen[1].style.transform = "translateY(0%)";
   screen[2].style.transform = "translateY(0%)";
}



re.addEventListener('click',function(){
   resetGame();
})



