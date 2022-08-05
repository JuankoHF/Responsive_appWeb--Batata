const prev = document.querySelector('.leftJs')
const next = document.querySelector('.rightJs')
const slider = document.querySelector('.plans-continer--slaider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 200
    
})

next.addEventListener('click', () => {
    slider.scrollLeft += 200
})