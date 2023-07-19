import './index.html';
import './index.scss';

document.addEventListener("DOMContentLoaded", () => {
    const cardsFront = document.querySelectorAll('.cards-front');
    const cardsBack = document.querySelectorAll('.cards-back');

    window.addEventListener('scroll',  () => {
        const height = document.documentElement.scrollTop;
            if(height > 350) {
                cardsFront.forEach((element, index) => {
                     setTimeout(() => element.style.transform = 'rotateY(180deg)', 250 * (index + 1))
                })

                cardsBack.forEach((element, index) => {
                    setTimeout(() => element.style.transform = 'rotateY(0deg)', 250 * (index + 1));
                });
            }
    })
});
