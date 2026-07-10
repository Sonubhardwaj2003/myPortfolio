function initProjects() {
  const container = document.getElementById("projects-container");

  if (!container) return;

  container.innerHTML = projects
    .map((project) => createProjectCard(project))
    .join("");
}

function createProjectCard(project) {
  return `
<div class="glass rounded-3xl overflow-hidden hover-card">

<img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover" />

<div class="p-6">

<h3 class="text-2xl font-bold">${project.title}</h3>

<p class="mt-4 text-slate-400 leading-7">${project.description}</p>

<div class="flex flex-wrap gap-2 mt-6">
${project.tech.map((skill) => `<span class="project-badge">${skill}</span>`).join("")}
</div>

<ul class="mt-6 space-y-2">
${project.features
  .map(
    (feature) => `
<li class="flex items-center gap-2">
<i class="fa-solid fa-circle-check text-green-400"></i>
<span>${feature}</span>
</li>
`,
  )
  .join("")}
</ul>

<div class="flex gap-4 mt-8">

<a href="${project.github}" target="_blank" class="project-btn">
<i class="fa-brands fa-github"></i>
<span>GitHub</span>
</a>

<a href="${project.live}" target="_blank" class="project-btn bg-blue-600 border-blue-600">
<i class="fa-solid fa-arrow-up-right-from-square"></i>
<span>Live Demo</span>
</a>

</div>

</div>

</div>
`;
}
