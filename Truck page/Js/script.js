//grabs the div holding the background image
const bgImageEl = document.getElementById('bg-image')
const vidEl = document.getElementById("smoke")
// creates the sroll event
window.addEventListener('scroll', () => {
    updateImage()
})

function updateImage() {
    //the opacity starts at 1 and it decrease on scroll 
    bgImageEl.style.opacity = 1 - window.pageYOffset / 800
    bgImageEl.style.backgroundSize = 160 - window.pageYOffset / 12 + "%"
}

vidEl.onended = () => {
    setTimeout(() => {
        vidEl.play();

    }, 10000)
}
vidEl.play()