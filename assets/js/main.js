



const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*=============== SHOW MENU ===============*/
/* validate if constant exists  */
if(navToggle)
{
  navToggle.addEventListener('click', () => {
    navMenu.classList.add("show-menu")
  })
}


const navLinks = document.querySelectorAll(".nav-link");
const lastNavLink = navLinks[navLinks.length - 1];

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  const lastNavLink = document.querySelector(".nav-link:last-of-type");

  if (this !== lastNavLink) {
    navMenu.classList.remove("show-menu");
  }
}

navLinks.forEach((n) => n.addEventListener("click", linkAction));

lastNavLink.addEventListener("click", () => {
  navLinks.forEach((n) => n.classList.remove("active-link"));
  lastNavLink.classList.add("active-link");
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
  const header = document.getElementById("header")
  // when the scroll is greater than 80 viewport height, add the class scroll header to the tag header
  if(this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".testimonial-wrapper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
// If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
  document
    .querySelector(".nav-menu a[href*=" + sectionId + "]")
    .classList.add("active-link");
} else {
  document
    .querySelector(".nav-menu a[href*=" + sectionId + "]")
    .classList.remove("active-link");
}
    // add active class to the last section's navigation link
  })
}

/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;
      
      for(let i=0; i<totalFilterBtn; i++)
      {
        filterBtns[i].addEventListener("click", function()
        {
          filterContainer.querySelector(".active").classList.remove("active");
          this.classList.add("active");

          const filterValue = this.getAttribute("data-filter");
          for(let k=0; k<totalPortfolioItem; k++)
          {
            if(filterValue === portfolioItems[k].getAttribute("data-category"))
            {
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
            else
            {
              portfolioItems[k].classList.add("hide");
              portfolioItems[k].classList.remove("show");
            }
            if(filterValue === "all")
            {
              portfolioItems[k].classList.remove("hide");
              portfolioItems[k].classList.add("show");
            }
          }
        })
      }

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// open modal
const openThemeModal = () => {
  themeModal.style.display = 'grid';
}
// close modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme'))
  {
    themeModal.style.display = 'none';
  }
}
theme.addEventListener("click", openThemeModal);
themeModal.addEventListener("click", closeThemeModal);

/*===== FONTS =====*/

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1'))
    {
      fontSize = '12px';
    }
    else if(size.classList.contains('font-size-2'))
    {
      fontSize = '14px';
    }
    else if(size.classList.contains('font-size-3'))
    {
      fontSize = '16px';
    }
    else if(size.classList.contains('font-size-4'))
    {
      fontSize = '18px';
    }
    // change font size of the root html element 
    document.querySelector('html').style.fontSize = fontSize;

  })
})

/*===== PRIMARY COLORS =====*/

// remove active class from colors
const changeActiveColorClass = () => {
  colorPalette.forEach(colorPicker => {
    colorPicker.classList.remove('active');
  })
}
colorPalette.forEach(color => {
  color.addEventListener('click', () => {
    let primaryHue;
    changeActiveColorClass();

    if(color.classList.contains('color-1'))
    {
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2'))
    {
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3'))
    {
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4'))
    {
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5'))
    {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty('--primary-color-hue', primaryHue);
  })
})



// // Get canvas element and context
// var canvas = document.getElementById("tree");
// var ctx = canvas.getContext("2d");

// // Set canvas styles
// ctx.strokeStyle = "green";
// ctx.lineWidth = 2;

// // Set variables
// var multiplicity = 4;
// var ratio = 0.65;
// var animationStartTime;
// var requestId;

// // Set animation functions
// var startAnimation = function () {
//   animationStartTime = window.performance.now();
//   requestId = window.requestAnimationFrame(animate);
// };

// var animate = function animate(time) {
//   requestId = window.requestAnimationFrame(animate);
//   var timeDifference = time - animationStartTime;
//   var angleDeg = timeDifference / 25;
//   var angle = angleDeg * (Math.PI / 180);
//   draw(multiplicity, ratio, angle);
// };

// var stopAnimation = function () {
//   if (requestId) {
//     window.cancelAnimationFrame(requestId);
//   }
//   requestId = undefined;
// };

// // Draw function
// var draw = function (multiplicity, ratio, angle) {
//   // Clear canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Set starting point
//   var startX = canvas.width / 2;
//   var startY = canvas.height;

//   // Draw first line
//   ctx.beginPath();
//   ctx.moveTo(startX, startY);
//   ctx.lineTo(startX, startY - 100);
//   ctx.stroke();

//   // Draw tree recursively
//   var drawTree = function (x, y, length, angle, depth) {
//     // Check depth
//     if (depth <= 0) {
//       return;
//     }

//     // Calculate end point
//     var endX = x + length * Math.sin(angle);
//     var endY = y - length * Math.cos(angle);

//     // Draw line
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(endX, endY);
//     ctx.stroke();

//     // Draw branches
//     drawTree(
//       endX,
//       endY,
//       length * ratio,
//       angle + Math.PI / multiplicity,
//       depth - 1
//     );
//     drawTree(
//       endX,
//       endY,
//       length * ratio,
//       angle - Math.PI / multiplicity,
//       depth - 1
//     );
//   };

//   drawTree(startX, startY - 100, 80, -Math.PI / 2, 8);
// };

// // Start animation
// startAnimation();

