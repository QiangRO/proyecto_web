const images = document.querySelectorAll(`.img`);
const containerImage = document.querySelector(`.container-img`);
const imageContainer = document.querySelector(`.img-show`);
const copy = document.querySelector(`.copy`);
const closemodal = document.querySelector(`.bx.bx-x`);

images.forEach(image => {
    image.addEventListener(`click`,()=>{
        addImage(image.getAttribute(`src`),image.getAttribute(`alt`))
    })
})

const addImage = (src, alt) =>{
    containerImage.classList.toggle(`move`);
    imageContainer.classList.toggle(`show`);
    imageContainer.src = src;
    copy.innerHTML = alt;
}

closemodal.addEventListener(`click`, ()=>{
    containerImage.classList.toggle(`move`);
    imageContainer.classList.toggle(`show`);
})

