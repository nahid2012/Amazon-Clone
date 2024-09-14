// Scroll Bar
const scrollcontainer = document.querySelectorAll(".products")
for (const item of scrollcontainer) {
    item.addEventListener('wheel', (e) => {
        e.preventDefault()
        item.scrollLeft += e.deltaY
    })
}