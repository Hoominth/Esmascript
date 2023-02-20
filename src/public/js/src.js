
const showUserProfile = document.querySelector('.header-profile')
const userProfile = document.querySelector('.user')
showUserProfile?.addEventListener('click', (e) => {
      e.preventDefault()
      userProfile.classList.toggle('active')
})

// Slider
const slider = function () {
      const slides = document.querySelectorAll('.slide');
      const btnLeft = document.querySelector('.slider__btn--left');
      const btnRight = document.querySelector('.slider__btn--right');
      const dotContainer = document.querySelector('.dots');

      let curSlide = 0;
      const maxSlide = slides.length;

      // Functions
      const createDots = function () {
            slides.forEach(function (_, i) {
                  dotContainer.insertAdjacentHTML(
                        'beforeend',
                        `<button class="dots__dot" data-slide="${i}"></button>`
                  );
            });
      };

      const activateDot = function (slide) {
            // Remove all active
            if (slide) {
                  document
                        .querySelectorAll('.dots__dot')
                        .forEach(dot => dot.classList.remove('dots__dot--active'));

                  document
                        .querySelector(`.dots__dot[data-slide="${slide}"]`)
                        .classList.add('dots__dot--active');
            }
      };

      const goToSlide = function (slide) {
            slides.forEach(
                  (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
            );
      };

      // Next slide
      const nextSlide = function () {
            if (curSlide === maxSlide - 1) {
                  curSlide = 0;
            } else {
                  curSlide++;
            }

            goToSlide(curSlide); // 1st slide -100%, 2nd 0%, 3rd 100%, 4th 200%
            activateDot(curSlide);
      };

      const prevSlide = function () {
            if (curSlide === 0) {
                  curSlide = maxSlide - 1;
            } else {
                  curSlide--;
            }
            goToSlide(curSlide);
            activateDot(curSlide);
      };

      const init = function () {
            goToSlide(0); // 1st slide 0%, 2nd 100%, 3rd 200%, 4th 300%
            createDots();
            activateDot(0); // So the first one is active always
      };

      init();

      // Event handlers
      btnRight?.addEventListener('click', nextSlide);
      btnLeft?.addEventListener('click', prevSlide);

      document.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
      });

      dotContainer?.addEventListener('click', function (e) {
            if (e.target.classList.contains('dots__dot')) {
                  const slide = e.target.dataset.slide;
                  goToSlide(slide);
                  activateDot(slide);
            }
      });
};
slider();




const tabsContainer = document.querySelector('.navbar__tab-container')
const tabsContent = document.querySelectorAll('.tab__content');
const tabs = document.querySelectorAll('.navbar__tab');
tabsContainer?.addEventListener('click', function (e) {
      e.preventDefault();
      const clicked = e.target.closest('.navbar__tab');
      // closest so that we dont target span

      if (!clicked) return;

      // Remove active classes
      tabs.forEach(t => t.classList.remove('navbar__tab--active'));

      tabsContent.forEach(tc => tc.classList.remove('tab__content--active'));

      // Activate tab
      clicked.classList.add('navbar__tab--active');

      // Activate content area
      document
            .querySelector(`.tab__content--${clicked.dataset.tab}`)
            .classList.add('tab__content--active');
});


const inputFile = document.querySelector('#file')
const imgArea = document.querySelector('.form__image-area')
const fileUpdate = document.querySelector('#fileUpdate')

inputFile?.addEventListener('change', () => {
      const image = inputFile.files[0]
      const reader = new FileReader()
      reader.addEventListener('load', () => {
            const allImg = imgArea.querySelectorAll('img')
            allImg.forEach(item => item.remove())
            const imgUrl = reader.result
            const img = document.createElement('img')
            img.src = imgUrl
            imgArea.appendChild(img)
            imgArea.classList.add('active')
            imgArea.dataset.img = image.name
            if (inputFile.value == '') {
                  return console.log('error')
            }
      })
      reader.readAsDataURL(image)
})



