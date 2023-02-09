import { Swiper, Parallax, Mousewheel, Controller, Pagination } from 'swiper'
Swiper.use([ Parallax, Mousewheel, Controller, Pagination ])

document.addEventListener('DOMContentLoaded', () => {

	const swiperIMG = new Swiper('.slider-img',{
		loop: false,
		speed: 2400,
		parallax: true,
		})

	const swiperText = new Swiper('.slider-text', {
		loop: false,
		speed: 2400,
		mousewheel: {
			invert: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
	})

	swiperText.controller.control = swiperIMG
	swiperIMG.controller.control = swiperText

})
