function initAchievements() {
  const container = document.getElementById("achievements-container");

  if (!container) return;

  container.innerHTML = achievements
    .map((achievement) => createAchievementCard(achievement))
    .join("");
}

function createAchievementCard(achievement) {
  return `
<div class="glass rounded-3xl p-8 hover-card">

<div class="achievement-icon">
<i class="${achievement.icon}"></i>
</div>

<h3 class="mt-6 text-4xl font-bold text-blue-400">${achievement.value}</h3>

<h4 class="mt-3 text-2xl font-semibold">${achievement.title}</h4>

<p class="mt-4 text-slate-400 leading-7">${achievement.description}</p>

</div>
`;
}
