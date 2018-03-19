class OOPGallery {
    constructor(selector) {
        this.galleryElement = document.querySelector(selector);
        this.imageArray = [];
        this.img = this.galleryElement.querySelector(".oopgallery-image");
        this.i = 0;
    }

    currentNumber () {
        this.currentNumber.querySelector(".oopgallery-image-number");
        console.log(`${this.i}/${this.imageArray.length}`)
    }

    gotoImageFirst (){
        this.i = 0;
        console.log(`der er strykket ${this.i} gange`);
        console.log(`${this.i}/${this.imageArray.length}`)
        this.updateImage();
    }
    
    gotoImageLast() {
        this.i = 6;
        console.log(`der er strykket ${this.i} gange`);
        console.log(`${this.i}/${this.imageArray.length}`)
        this.updateImage();
    }

    gotoImagePrevious () {
        this.i--;
        if(this.i < 0) {
            this.i = 6;
        }
        console.log(`der er strykket ${this.i} gange`);
        console.log(`${this.i}/${this.imageArray.length}`)
        this.updateImage();
    }

    gotoImageNext () {
        this.i++;
        if(this.i > 6) {
            this.i = 0;
        }
        console.log(`der er strykket ${this.i} gange`);
        console.log(`${this.i}/${this.imageArray.length}`)
        this.updateImage();
    }

    updateImage () {
        this.img.setAttribute('src', this.imageArray[this.i])
    }

    addImage (string) {
        
    }

    addImages (images) {
        this.imageArray = images;
    } 
}