class Gallery {
	constructor(name, images) {
		this.name = name;
		this.images = images;
		this.pos = 0;
		this.setEventHandlers();
	}

	setEventHandlers() {
		let that = this;
		document.querySelector(`#${this.name} .oopgallery-control-first`).addEventListener("click", function () {
            document.querySelector(`#${that.name} .oopgallery-image`).src = that.getFirst();
		})

		document.querySelector(`#${this.name} .oopgallery-control-last`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.getLast();
		})

		document.querySelector(`#${this.name} .oopgallery-control-next`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.getNext();
		})

		document.querySelector(`#${this.name} .oopgallery-control-previous`).addEventListener("click", function () {
			document.querySelector(`#${that.name} .oopgallery-image`).src = that.getPrev();
		})

		document.querySelector(`#${that.name} .oopgallery-image`).src = this.getFirst();
	}

	getFirst() {
		this.pos = 0;
		return this.images[this.pos];
	}

	getLast() {
		this.pos = this.images.length - 1;
		return this.images[this.pos];
	}

	getNext() {
		if (this.pos < this.images.length - 1) {
			this.pos++;
		}
		return this.images[this.pos];
	}

	getPrev() {
		if (this.pos > 0) {
			this.pos--;
		}
		return this.images[this.pos];
	}

}