function initNavbar(){

  const menuBtn=document.getElementById("menu-btn");
  const mobileMenu=document.getElementById("mobile-menu");

  if(!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click",()=>{

    mobileMenu.classList.toggle("hidden");

  });

  document.querySelectorAll(".mobile-link").forEach(link=>{

    link.addEventListener("click",()=>{

      mobileMenu.classList.add("hidden");

    });

  });

}