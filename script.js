// SAFE Intro Script

window.addEventListener("load", function(){

// Typing Effect SAFE
const introText = "Welcome Ajay Kumar";
let i = 0;

function type(){
const el = document.getElementById("intro-text");

if(!el) return; // 🔥 important safety

if(i < introText.length){
el.innerHTML += introText.charAt(i);
i++;
setTimeout(type, 80);
}
}

type();

// Hide intro after 3 sec (always runs)
setTimeout(()=>{
const intro = document.getElementById("intro");

if(intro){
intro.style.opacity = "0";
intro.style.transition = "1s";

setTimeout(()=>{
intro.style.display = "none";
},1000);
}

},3000);

});