
const infoTitle = document.getElementsByClassName('info__title');
const accTitle = document.getElementsByClassName('accordeon__title');
let i;

for (let i = 0; i < infoTitle.length; i++) {
    infoTitle[i].onclick = function () {
        this.nextElementSibling.classList.toggle('active');
    }
    
}

for (let i = 0; i < accTitle.length; i++) {
    accTitle[i].onclick = function () {
        this.nextElementSibling.classList.toggle('active');
    }
    
}