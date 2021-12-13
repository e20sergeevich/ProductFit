// Brands

new Swiper(".brands__slider", {
	navigation: {
		nextEl: ".brands__slider-btn-next",
		prevEl: ".brands__slider-btn-prev"
	},
	breakpoints: {
		767: {
			slidesPerView: 3,
			freeMode: true
		}
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 70
});

// Advantages

new Swiper(".advantages__slider", {
	navigation: {
		nextEl: ".advantages__slider-btn-next",
		prevEl: ".advantages__slider-btn-prev"
	},
	breakpoints: {
		1200: {
			slidesPerView: 5,
			spaceBetween: 48
		},
		992: {
			slidesPerView: 3,
		},
		767: {
			slidesPerView: 2,
		}
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 75
});

// Projects

new Swiper(".projects__slider", {
	navigation: {
		nextEl: ".projects__slider-btn-next",
		prevEl: ".projects__slider-btn-prev"
	},
	grid: {
		rows: 1
	},
	breakpoints: {
		992: {
			grid: {
				rows: 2
			},
			slidesPerView: 3,
		},
		767: {
			grid: {
				rows: 2
			},
			slidesPerView: 2,
		}
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 46
});

// Events

new Swiper(".events__slider", {
	navigation: {
		nextEl: ".events__slider-btn-next",
		prevEl: ".events__slider-btn-prev"
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 70
});

// Goods

new Swiper(".goods__slider", {
	navigation: {
		nextEl: ".goods__slider-btn-next",
		prevEl: ".goods__slider-btn-prev"
	},
	breakpoints: {
		1200: {
			slidesPerView: 4,
			grid: {
				rows: 2
			},
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 2
			},
		},
		767: {
			slidesPerView: 2,
			grid: {
				rows: 2
			},
		}
	},
	grid: {
		rows: 1
	},
	loop: false,
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 50
});






