const query = "SELECT name, focus FROM analysts WHERE curiosity = TRUE;";
const output = "name: Naetoja Ebere Ezerioha\nfocus: Excel · SQL · Power BI · Python";

const typedEl = document.getElementById('typed-query');
const outputEl = document.getElementById('query-output');

let i = 0;
function typeQuery() {
  if (i <= query.length) {
    typedEl.textContent = query.slice(0, i);
    i++;
    setTimeout(typeQuery, 28);
  } else {
    setTimeout(revealOutput, 300);
  }
}

function revealOutput() {
  outputEl.textContent = output;
  outputEl.style.opacity = 0;
  outputEl.style.transition = 'opacity 0.6s ease';
  requestAnimationFrame(() => { outputEl.style.opacity = 1; });
}

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    typedEl.textContent = query;
    revealOutput();
  } else {
    typeQuery();
  }
});
