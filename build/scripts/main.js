(() => {
  // src/scripts/functions.js
  function addClassOnClick(itemClick, classToItem, nameOfClass) {
    document.querySelector(itemClick).addEventListener("click", () => {
      document.querySelectorAll(classToItem).forEach((item) => {
        item.classList.toggle(nameOfClass);
      });
    });
  }
  function addClassOnScroll(item, topOffset, nameOfClass) {
    window.addEventListener("scroll", function() {
      if (scrollY > topOffset) {
        document.querySelector(item).classList.add(nameOfClass);
      } else {
        document.querySelector(item).classList.remove(nameOfClass);
      }
    });
    if (scrollY > topOffset) {
      document.querySelector(item).classList.add(nameOfClass);
    }
  }
  function linksPreventDefault() {
    document.querySelectorAll("a[href='#']").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  }
  function scrollToTop() {
    let $scrollTopElement = document.querySelector(".scroll-top");
    window.addEventListener("scroll", function() {
      let hasClass = $scrollTopElement.classList.contains("_active"), isScrolled = scrollY > 35;
      if (isScrolled && !hasClass) {
        $scrollTopElement.classList.add("_active");
      } else if (!isScrolled && hasClass) {
        $scrollTopElement.classList.remove("_active");
      }
    });
    $scrollTopElement.addEventListener("click", () => {
      let currentScrollTop = window.scrollY;
      animate({
        duration: 300,
        timing: linear,
        draw: function(progress) {
          window.scrollTo(0, currentScrollTop - currentScrollTop * progress);
        }
      });
    });
    if (scrollY > 35 && !$scrollTopElement.classList.contains("_active")) {
      $scrollTopElement.classList.add("_active");
    }
  }
  function animate({
    timing,
    draw,
    duration
  }) {
    let start = performance.now();
    requestAnimationFrame(function animate2(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1)
        timeFraction = 1;
      let progress = timing(timeFraction);
      draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate2);
      }
    });
  }
  function linear(timeFraction) {
    return timeFraction;
  }

  // src/scripts/main.js
  linksPreventDefault();
  scrollToTop();
  addClassOnScroll(".header", 35, "_scrolled");
  addClassOnClick(".burger", ".header", "_menu-opened");
  var swiper = new Swiper(".swiper", {
    loop: false,
    rewind: true,
    grabCursor: true,
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
})();
//# sourceMappingURL=main.js.map
