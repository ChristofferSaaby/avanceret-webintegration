document.addEventListener ("DOMContentLoaded", function (event) {
    
    galleryObject1.addImages ([
        "images/image_01.jpg",
        "images/image_02.jpg",
        "images/image_03.jpg",
        "images/image_04.jpg",
        "images/image_05.jpg",
        "images/image_06.jpg",
        "images/image_07.jpg",
        
    ]);

    galleryObject2.addImages ([
        "images/image_01.jpg",
        "images/image_02.jpg",
        "images/image_03.jpg",
        "images/image_04.jpg",
        "images/image_05.jpg",
        "images/image_06.jpg",
        "images/image_07.jpg"
        
    ]);

    galleryObject1.updateImage();
    galleryObject2.updateImage();
    
});

let galleryObject;
galleryObject1 = new OOPGallery ("#gallery01");
galleryObject2 = new OOPGallery ("#gallery02");
let firstButton = document.querySelector(".oopgallery-control-first");
let lastButton = document.querySelector(".oopgallery-control-last");
let previousButton = document.querySelector(".oopgallery-control-previous");
let nextButton = document.querySelector (".oopgallery-control-next");



firstButton.addEventListener("click", ()=>{
    galleryObject1.gotoImageFirst()
});

lastButton.addEventListener("click", ()=>{
    galleryObject1.gotoImageLast()
});

nextButton.addEventListener("click", ()=>{
    galleryObject1.gotoImageNext()
});

previousButton.addEventListener("click", ()=>{
    galleryObject1.gotoImagePrevious()
});

//====================================================================================================================================\\

firstButton.addEventListener("click", ()=>{
    galleryObject2.gotoImageFirst()
});

lastButton.addEventListener("click", ()=>{
    galleryObject2.gotoImageLast()
});

nextButton.addEventListener("click", ()=>{
    galleryObject2.gotoImageNext()
});

previousButton.addEventListener("click", ()=>{
    galleryObject2.gotoImagePrevious()
});


//galleryObject.setWrap (false);
//galleryObject.initializeGalleryByElementSelector ("#gallery01")