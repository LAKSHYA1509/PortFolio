const smMenuBtn = document.querySelector('.main-header__sm-scr-nav-btn')
const smMenu = document.querySelector('.main-header__sm-menu')
const smMenuCloseBtn = document.querySelector('.main-header__sm-menu-close')

const smMenuLinks = document.querySelectorAll('.main-header__sm-menu-link')
const smMenuLink1 = document.querySelector('.main-header__sm-menu-link--1')
const smMenuLink2 = document.querySelector('.main-header__sm-menu-link--2')
const smMenuLink3 = document.querySelector('.main-header__sm-menu-link--3')
const smMenuLink4 = document.querySelector('.main-header__sm-menu-link--4')

smMenuBtn.addEventListener('click', () => {
  smMenu.style.transitionDelay = '0s'
  smMenu.classList.add('main-header__sm-menu--active')

  smMenuLink1.style.transitionDelay = '.5s'
  smMenuLink1.style.transform = 'translateY(0)'
  smMenuLink1.style.opacity = '1'

  smMenuLink2.style.transitionDelay = '.8s'
  smMenuLink2.style.transform = 'translateY(0)'
  smMenuLink2.style.opacity = '1'

  smMenuLink3.style.transitionDelay = '1.1s'
  smMenuLink3.style.transform = 'translateY(0)'
  smMenuLink3.style.opacity = '1'

  smMenuLink4.style.transitionDelay = '1.4s'
  smMenuLink4.style.transform = 'translateY(0)'
  smMenuLink4.style.opacity = '1'
})

smMenuLinks.forEach((ele) => {
  ele.addEventListener('click', () => {
    smMenuLink4.style.transitionDelay = '0s'
    smMenuLink4.style.transform = 'translateY(50px)'
    smMenuLink4.style.opacity = '0'

    smMenuLink3.style.transitionDelay = '.3s'
    smMenuLink3.style.transform = 'translateY(50px)'
    smMenuLink3.style.opacity = '0'

    smMenuLink2.style.transitionDelay = '.6s'
    smMenuLink2.style.transform = 'translateY(50px)'
    smMenuLink2.style.opacity = '0'

    smMenuLink1.style.transitionDelay = '.9s'
    smMenuLink1.style.transform = 'translateY(50px)'
    smMenuLink1.style.opacity = '0'

    smMenu.style.transitionDelay = '1.2s'
    smMenu.classList.remove('main-header__sm-menu--active')

    setTimeout(() => {
      document.getElementById(ele.name).scrollIntoView()
    }, 1300)
  })
})

smMenuCloseBtn.addEventListener('click', () => {
  smMenuLink4.style.transitionDelay = '0s'
  smMenuLink4.style.transform = 'translateY(50px)'
  smMenuLink4.style.opacity = '0'

  smMenuLink3.style.transitionDelay = '.3s'
  smMenuLink3.style.transform = 'translateY(50px)'
  smMenuLink3.style.opacity = '0'

  smMenuLink2.style.transitionDelay = '.6s'
  smMenuLink2.style.transform = 'translateY(50px)'
  smMenuLink2.style.opacity = '0'

  smMenuLink1.style.transitionDelay = '.9s'
  smMenuLink1.style.transform = 'translateY(50px)'
  smMenuLink1.style.opacity = '0'

  smMenu.style.transitionDelay = '1.2s'
  smMenu.classList.remove('main-header__sm-menu--active')
})





// ---
const themeColorSelector = document.querySelector('.themeClrSelector')
const themeColorSelectorInput = document.querySelector(
  '.themeClrSelector__input'
)
const root = document.documentElement;



const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

const eventFire = (el, etype) => {
  if (el.fireEvent) {
    el.fireEvent('on' + etype)
  } else {
    let evObj = document.createEvent('Events')
    evObj.initEvent(etype, true, false)
    el.dispatchEvent(evObj)
  }
}

themeColorSelector.addEventListener('click', () => {
  eventFire(themeColorSelectorInput, 'input')
})

const setDynamicColor = (color) => {

  const { r, g, b } = hexToRgb(`${color}`)
  
  root.style.setProperty('--themeColor', `${r},${g},${b}`);
  //localStorage.setItem('color', color)
}

themeColorSelectorInput.addEventListener('input', (e) => {
  setDynamicColor(e.target.value)
})

// if (localStorage.getItem('color')) {
//   let userSelectedColor = localStorage.getItem('color')
//   themeColorSelectorInput.value = userSelectedColor
//   setDynamicColor(userSelectedColor)
// }

// ---
const headerLogoConatiner = document.querySelector('.main-header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})




const texts = [
  "Hello 👋",
  "Hola 🌞",
  "Swagath 🌼",
  "Bonjour 🌸",
  "Ciao 🍕",
  "Hallo 🍻",
  "Olá 🎉",
  "こんにちは 🍣",
  "안녕하세요 🌺",
  "नमस्ते 🙏"
];

let currentIndex = 0;

function changeText() {
  const heading = document.querySelector('.heading-primary__sm');
  heading.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}
setInterval(changeText, 1000);

const aboutTexts = [
  "About 🦄",
  "Acerca de 🌍",
  "À propos 🏞️",
  "Über 🚀",
  "Circa 🌌",
  "Sobre 🌟",
  "について 🗾",
  "关于 🏯",
  "Hakkında 🌈",
  "बारे में 🎇"
];

let aboutIndex = 0;

function changeAboutText() {
  const aboutHeading = document.querySelector('.heading-secondary__sm_1');
  aboutHeading.textContent = aboutTexts[aboutIndex];
  aboutIndex = (aboutIndex + 1) % aboutTexts.length;
}

setInterval(changeAboutText, 1000);

const projectTexts = [
  "Projects 🛠️",
  "Proyectos 🔧",
  "Projets 🛠️",
  "Progetti 🚀",
  "Projekte 🔨",
  "Projetos 🏗️",
  "プロジェクト 🛠️",
  "项目 🛠️",
  "Projeler 🛠️",
  "परियोजनाएं 🔧"
];

let projectIndex = 0;

function changeProjectText() {
  const projectHeading = document.querySelector('.heading-secondary__sm_2');
  projectHeading.textContent = projectTexts[projectIndex];
  projectIndex = (projectIndex + 1) % projectTexts.length;
}

setInterval(changeProjectText, 1000);

const contactTexts = [
  "Contact 📞",
  "Contacto 📱",
  "Contactez 📞",
  "Contatto 📱",
  "Kontakt 📞",
  "Contato 📱",
  "連絡 📞",
  "联系 📱",
  "İletişim 📞",
  "संपर्क 📱"
];

let contactIndex = 0;

function changeContactText() {
  const contactHeading = document.querySelector('.heading-secondary__sm_3');
  contactHeading.textContent = contactTexts[contactIndex];
  contactIndex = (contactIndex + 1) % contactTexts.length;
}

setInterval(changeContactText, 1000);





// const themeSelector = document.querySelector('.btn-theme');
// const colors = ["#1DA1F2", "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#F2C200", "#1DF2B6"];
// let colorIndex = 0;

// function changeColor() {
//     themeSelector.style.backgroundColor = colors[colorIndex];
//     colorIndex = (colorIndex + 1) % colors.length;
// }

// setInterval(changeColor, );




const texts1 = ["Lakshya Bhardwaj", "A Dev", "A Writer"];
let index = 0;
let hoveredOnce = false; // Flag to track if text has been hovered at least once

document.addEventListener('DOMContentLoaded', () => {
  const logoText = document.querySelector('.main-header__logo-text');
  
  logoText.addEventListener('mouseover', () => {
    if (!hoveredOnce) {
      hoveredOnce = true; // Set the flag to true once hovered
      return; // Exit function without changing text on first hover
    }
    
    index = (index + 1) % texts1.length;
    logoText.textContent = texts1[index];
  });
  
  logoText.addEventListener('mouseout', () => {
    
  });
});


document.getElementById('downloadCV').addEventListener('click', function() {
  // Create an anchor element
  var link = document.createElement('a');
  link.href = 'assets/Lakshya_Bhardwaj_Resume_.pdf';  // Path to your PDF file
  link.download = 'Lakshya_Bhardwaj_Resume_.pdf';     // Name of the downloaded file

  // Append the anchor to the body
  document.body.appendChild(link);

  // Programmatically trigger a click on the anchor
  link.click();

  // Remove the anchor from the document
  document.body.removeChild(link);
});
