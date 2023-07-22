const buttonHeight = 50;
const buttonWidth = 150;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {
 const button = document.getElementById('button');
 
 button.addEventListener('click', () => alert('You caught me off-guard!'))

 button.addEventListener('mouseover', () => {
    console.log('You trying to catch me?');
    button.style.left = Math.floor(Math.random() * maxWidth + 1) + 'px';
    button.style.top = Math.floor(Math.random() * maxHeight + 1) + 'px';
    })

});
