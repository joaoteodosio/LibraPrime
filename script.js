const slides = document.querySelectorAll(".slide")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const dotsContainer = document.querySelector(".dots")

let index = 0

slides.forEach((_,i)=>{

const dot = document.createElement("div")
dot.classList.add("dot")

if(i === 0) dot.classList.add("active")

dot.addEventListener("click",()=>{

index = i
showSlide()

})

dotsContainer.appendChild(dot)

})

const dots = document.querySelectorAll(".dot")

function showSlide(){

document.querySelector(".slides").style.transform =
`translateX(-${index * 100}%)`

dots.forEach(dot=>dot.classList.remove("active"))
dots[index].classList.add("active")

}

next.addEventListener("click",()=>{

index++

if(index >= slides.length){
index = 0
}

showSlide()

})

prev.addEventListener("click",()=>{

index--

if(index < 0){
index = slides.length - 1
}

showSlide()

})

/* autoplay */

setInterval(()=>{

index++

if(index >= slides.length){
index = 0
}

showSlide()

},5000)
