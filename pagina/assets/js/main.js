const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

/**
 * Toggle .header-scrolled class to #header when page is scrolled
 */
let selectHeader = document.getElementById('header')
if (selectHeader) {
  let headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled')
    } else {
      selectHeader.classList.remove('header-scrolled')
    }
  }
  
  window.addEventListener('load', headerScrolled)
  onscroll(document, headerScrolled)
}

let logoBox = document.getElementById('logoBox')
if (logoBox) {
  let logoScrolled = () => {
    if (window.scrollY > 100) {
      logoBox.classList.add('header-scrolled')
    } else {
      logoBox.classList.remove('header-scrolled')
    }
  }
  
  window.addEventListener('load', logoScrolled)
  onscroll(document, logoScrolled)
}

// let headerDropdown = document.getElementById('header-dropdown-list')
// if (headerDropdown) {
//   let dropdownScrolled = () => {
//     if (window.scrollY > 100) {
//       headerDropdown.classList.add('header-scrolled')
//     } else {
//       headerDropdown.classList.remove('header-scrolled')
//     }
//   }
  
//   window.addEventListener('load', dropdownScrolled)
//   onscroll(document, dropdownScrolled)
// }

function openMenu() {
  document.getElementById("container-links").classList.add("active")
  document.getElementById("hover-interactive-header").classList.add("active")
}

function closeMenu() {
  document.getElementById("container-links").classList.remove("active")
  document.getElementById("hover-interactive-header").classList.remove("active")
}

addEventListener("resize", (event) => {
  if (window.innerWidth > 991 && document.getElementById("container-links").classList.contains("active")) {
    closeMenu()
  }
});

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }