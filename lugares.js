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

/* */
$(document).ready(function(){
          
    $(".content-box").click(function(){
       
        $(".content-box").animate({
            width:`300px`,
            height:`100px`
        }, 1000);
        $(".content-after").show().animate({
            opacity: "1"}, 3000);
    });

});

function mostrarPremio(){
    document.getElementById(`premio`).style.display=`block`;
}
function ocultarPremio(){
    document.getElementById(`premio`).style.display=`none`;
}
