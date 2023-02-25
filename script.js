 // home button
 var sn = document.getElementById("top")

 window.onscroll = function () {
  if(pageYOffset >=700){

    sn.style.display="block";

     } else{

    sn.style.display="none";

    }
} 

// chat button
sn.onclick = function () {
  window.scrollTo(0,0);
}

function openForm() {
            document.getElementById("myForm").style.cssText = "display: block;";
        }
        function closeForm() {
            document.getElementById("myForm").style.cssText = "display: none;";
        }

// cat animation
        function init() { 
const catWrapper = document.querySelector('.cat_wrapper')
const wrapper = document.querySelector('.wrapper')
const cat = document.querySelector('.cat')
const head = document.querySelector('.cat_head')
const legs = document.querySelectorAll('.leg')
const pos = {
x: null,
y: null
}

const walk = () =>{
cat.classList.remove('first_pose')
legs.forEach(leg=>leg.classList.add('walk'))
}

const handleMouseMotion = e =>{
pos.x = e.clientX
pos.y = e.clientY
walk()
}

const handleTouchMotion = e =>{
if (!e.targetTouches) return
pos.x = e.targetTouches[0].offsetX
pos.y = e.targetTouches[0].offsetY
walk()
}

const turnRight = () =>{
cat.style.left = `${pos.x - 90}px`
cat.classList.remove('face_left')
cat.classList.add('face_right')
}

const turnLeft = () =>{
cat.style.left = `${pos.x + 10}px`
cat.classList.remove('face_right')
cat.classList.add('face_left')
}

const decideTurnDirection = () =>{
cat.getBoundingClientRect().x < pos.x ?
  turnRight()
  :
  turnLeft()
}

const headMotion = () =>{
pos.y > (wrapper.clientHeight - 100) ?
  head.style.top = '-15px'
  :
  head.style.top = '-30px'
}

const jump = () =>{
catWrapper.classList.remove('jump')
if (pos.y < (wrapper.clientHeight - 250)) {
  setTimeout(()=>{
    catWrapper.classList.add('jump')
  },100)
} 
}

const decideStop = ()=>{
if (cat.classList.contains('face_right') && pos.x - 90 === cat.offsetLeft ||
    cat.classList.contains('face_left') && pos.x + 10 === cat.offsetLeft) {
  legs.forEach(leg=>leg.classList.remove('walk'))    
}
}

setInterval(()=>{
if (!pos.x || !pos.y) return
decideTurnDirection()
headMotion()
decideStop()
},100)

setInterval(()=>{
if (!pos.x || !pos.y) return
jump()
},1000)

document.addEventListener('mousemove', handleMouseMotion)
document.addEventListener('mousemove', handleTouchMotion)
}

window.addEventListener('DOMContentLoaded', init)


