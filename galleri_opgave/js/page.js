document.addEventListener ("DOMContentLoaded", function (event) {
    
    
    galleryObject.addImages ([
        "images/image_01.jpg",
        "images/image_02.jpg",
        "images/image_03.jpg",
        "images/image_04.jpg",
        "images/image_05.jpg",
        "images/image_06.jpg",
        "images/image_07.jpg"
        
    ]);
    
});

let galleryObject;
galleryObject = new OOPGallery ();
let i = 0;
let img = document.querySelector(".oopgallery-image")
let imgAttribute = img.setAttribute('src', galleryObject.imageArray[i]);
let firstButton = document.querySelector(".oopgallery-control-first");
let lastButton = document.querySelector(".oopgallery-control-last");
let previousButton = document.querySelector(".oopgallery-control-previous");
let nextButton = document.querySelector (".oopgallery-control-next");
let imagesCount = document.querySelector(".oopgallery-image-number");



firstButton.addEventListener ("click", function (event) {
   imgAttribute.gotoImageFirst(i = 0);
    // i=0;
    
    //     img.setAttribute('src', galleryObject.imageArray[i])
    });


    previousButton.addEventListener ("click", function (event) {
        i--;
        if(i < 0) {
            i=6;
        }
        imgAttribute;
        console.log(`der er trykket ${i}`);
    });


    nextButton.addEventListener ("click", function (event) {
        i++;
        if(i > 6) {
            i=0;
        }
        imgAttribute;
        console.log(`der er trykket ${i}`);
    }); 


    lastButton.addEventListener ("click", function (event) {
        i = 6;
        console.log(`der er trykket ${i}`);
        imgAttribute;
    });

//galleryObject.setWrap (false);
//galleryObject.initializeGalleryByElementSelector ("#gallery01")