async function loadComponent(id,file){

  const response=await fetch(file);
  const html=await response.text();

  document.getElementById(id).innerHTML=html;

  if(id==="navbar") initNavbar();
  if(id==="projects") initProjects();
  if(id==="achievements") initAchievements();
  if(id==="activities")initActivities();
  if(id==="contact")initContact();
  if(id==="footer")initFooter();

}

loadComponent("navbar","components/navbar.html");
loadComponent("hero","components/hero.html");
loadComponent("about","components/about.html");
loadComponent("education","components/education.html");
loadComponent("skills","components/skills.html");
loadComponent("projects","components/projects.html");
loadComponent("achievements","components/achievements.html");
loadComponent("activities","components/activities.html");
loadComponent("contact","components/contact.html");
loadComponent("footer","components/footer.html");