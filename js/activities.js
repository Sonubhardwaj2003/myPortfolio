function initActivities() {
  const container = document.getElementById("activities-container");

  if (!container) return;

  container.innerHTML = activities
    .map((activity) => createActivity(activity))
    .join("");
}

function createActivity(activity) {
  return `
<div class="relative pl-20 pb-14">

<div class="activity-dot">
<i class="${activity.icon}"></i>
</div>

<div class="glass rounded-3xl p-7 hover-card">

<span class="text-blue-400 text-sm font-medium">${activity.time}</span>

<h3 class="mt-3 text-2xl font-semibold">${activity.title}</h3>

<p class="mt-4 text-slate-400 leading-7">${activity.description}</p>

</div>

</div>
`;
}
