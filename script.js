const btnEl = document.querySelector('#btn-el')
const activityEL = document.getElementById('activity-el')

btnEl.addEventListener('click', ()=> {
  fetch('https://apis.scrimba.com/bored/api/activity')
  .then(res => res.json())
  .then(data => {
    activityEL.textContent = data.activity
    document.querySelector('.container__title').textContent = '🦾 HappyBot 🦾'    
    document.body.classList.add('fun')
  })
})