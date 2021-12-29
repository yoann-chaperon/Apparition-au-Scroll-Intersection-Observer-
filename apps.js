const images = document.querySelectorAll(".images-container img")

let options = {
    // root: null,
    rootMargin: "-10% 0px",
    threshold: 0
}

function handLeIntersect(entries){
    console.log(entries);

    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
        }
    })
}

const observer = new IntersectionObserver(handLeIntersect, options)

images.forEach(images => {
    observer.observe(images)
})