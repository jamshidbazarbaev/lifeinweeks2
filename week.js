function calculateWeeks() {
  const birthdate = new Date(document.getElementById('birthdate').value);
  const now = new Date();
  const weeksLived = Math.floor((now - birthdate) / (1000 * 60 * 60 * 24 * 7));
  const totalWeeks = 80 * 52;
  const weeksContainer = document.getElementById('weeks-container');
  const weeksLivedElement = document.getElementById('weeks-lived');
  
  weeksContainer.innerHTML = '';
  weeksLivedElement.style.opacity = '0';
  
  for (let i = 0; i < totalWeeks; i++) {
    const week = document.createElement('div');
    week.classList.add('week');
    weeksContainer.appendChild(week);
    
    if (i < weeksLived) {
      setTimeout(() => {
        week.classList.add('lived');
      }, i * 10); 
    }
  }
  
  setTimeout(() => {
    weeksLivedElement.textContent = `You've lived ${weeksLived} weeks so far!`;
    weeksLivedElement.style.opacity = '1';
  }, 1000);
}

function adjustWeeksContainerSize() {
  const container = document.getElementById('weeks-container');
  const maxWidth = Math.min(container.parentElement.clientWidth, 800); 
  const weekSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--week-size'));
  const weekMargin = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--week-margin'));
  const weeksPerRow = Math.floor(maxWidth / (weekSize + 2 * weekMargin));
  container.style.width = `${weeksPerRow * (weekSize + 2 * weekMargin)}px`;
}

window.addEventListener('load', adjustWeeksContainerSize);
window.addEventListener('resize', adjustWeeksContainerSize);