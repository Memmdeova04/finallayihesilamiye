const buttons = document.getElementById('toggle_button');
const moreInfoo = document.getElementById('more_info');

buttons.addEventListener('click', () => {
    if (moreInfoo.style.display === 'none' || moreInfoo.style.display === '') {
        moreInfoo.style.display = 'block';
        buttons.textContent = 'Bağla'; 
    } else {
        moreInfoo.style.display = 'none'; 
        buttons.textContent = 'Daha çox oxu'; 
    }
});



