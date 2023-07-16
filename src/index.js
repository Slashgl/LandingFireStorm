import './index.html';
import './index.scss';

document.addEventListener("DOMContentLoaded", () => {
    const cardsFront = document.querySelectorAll('.cards-front');
    const cardsBack = document.querySelectorAll('.cards-back');

    window.addEventListener('scroll',  () => {
        const height = document.documentElement.scrollTop;
        if(height > 300) {
            cardsFront.forEach(cards => {
                cards.style.transform = 'rotateY(180deg)'
            })

            cardsBack.forEach(cards => {
                cards.style.transform = 'rotateY(0deg)'
            })
        }else {
            console.log('false')
        }
    })

});