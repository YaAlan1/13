const img = document.querySelector('.img')
const btns = document.querySelectorAll('button[data-color]')
const pictures = {

    SpaceGrey: "./img/spece.jpg",
    White: "./img/white.jpg",
}

btns.forEach((btn) => {
    btn.onclick = () => {
        img.style.backgroundImage = `url(${pictures[btn.getAttribute('data-color')]})`

    }
})
