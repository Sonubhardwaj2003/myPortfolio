const roles=[
  "Full Stack Developer",
  "Java Developer",
  "Frontend Developer",
  "Problem Solver"
];

let roleIndex=0;
let charIndex=0;
let isDeleting=false;

function type(){

  const element=document.getElementById("typing");

  if(!element) return;

  const currentRole=roles[roleIndex];

  if(isDeleting){
    charIndex--;
  }else{
    charIndex++;
  }

  element.textContent=currentRole.substring(0,charIndex);

  let speed=isDeleting?70:120;

  if(!isDeleting && charIndex===currentRole.length){
    speed=1500;
    isDeleting=true;
  }

  if(isDeleting && charIndex===0){
    isDeleting=false;
    roleIndex=(roleIndex+1)%roles.length;
  }

  setTimeout(type,speed);

}

window.addEventListener("load",type);