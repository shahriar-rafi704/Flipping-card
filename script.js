/* script.js */
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
    });

    card.addEventListener('mouseout', () => {
        card.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
    });
});
