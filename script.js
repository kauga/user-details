const btEl = document.querySelector('.search-profilePicture');
const openBtn = document.querySelector('.openMenu');
const closedBtn = document.querySelector('.closedMenu');

openBtn.addEventListener('click', function() {
    btEl.classList.add('hidden');
    console.log(`kauga`)
})
closedBtn.addEventListener('click', function() {
    btEl.classList.remove('hidden');
    console.log(`kauga`)
})