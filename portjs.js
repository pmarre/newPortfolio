const sideBar = document.querySelector('.moreInfo');
const sideBtn_1 = document.querySelector('.sideBar-1');
const sideBtn_2 = document.querySelector('.sideBar-2');

function showSideBar(e){
    if (e.target === sideBtn_1 || e.target === sideBtn_2) {
        e.preventDefault();
        sideBar.classList.remove('slideOut');
        sideBar.classList.add('slideIn');
    } else if (e.target !== sideBtn_1 || e.target !== sideBtn_2){
        sideBar.classList.remove('slideIn');
        sideBar.classList.add('slideOut');
    }
}

document.addEventListener('click', showSideBar);

