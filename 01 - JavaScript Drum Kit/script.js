

window.addEventListener("keydown", function(e){

   const audio = document.querySelector(`audio[data-key="${e.key}"]`);
   const key = document.querySelector(`.key[data-key="${e.key}"]`);

   if(!audio) return;
   audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}); 

function removeTransition(e){
    if(e.propertyName!== 'transform')return;
    this.classList.remove("playing");

}

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

document.querySelector(".boton").addEventListener("click", function(){

    const input = document.querySelector(".input").value;
    const key = document.querySelector(`.key[data-key="a"]`);
    const kbd = document.querySelector(".kbd1").innerHTML=`${input.toUpperCase()}`;
    const audio = document.querySelector(`audio[data-key="a"]`);

    console.log(kbd);
    key.setAttribute("data-key",input);
    audio.setAttribute("data-key",input);
    

});


