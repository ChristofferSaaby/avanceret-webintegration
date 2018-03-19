document.addEventListener ("DOMContentLoaded", function (event) {
    
    let resourceImages = [
        "images/image_01.jpg",
        "images/image_02.jpg",
        "images/image_03.jpg",
        "images/image_04.jpg",
        "images/image_05.jpg",
        "images/image_06.jpg",
        "images/image_07.jpg"
    ];
    let galleri_1 = new Gallery("gallery01", resourceImages);

    let galleri_2 = new Gallery("gallery02", resourceImages);

});