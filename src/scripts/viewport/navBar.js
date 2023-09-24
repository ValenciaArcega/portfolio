const viewPort = window.matchMedia("(max-width: 664px)")
const nvDesktop = document.querySelector('.navBar-desktop')
const nvMobile = document.querySelector('.topBar')

const mediaScreen = y => {
  if (y.matches) {
    nvDesktop.classList.add('hidden')
    nvMobile.classList.remove('hidden')
  } else {
    nvDesktop.classList.remove('hidden')
    nvMobile.classList.add('hidden')
  }
}
mediaScreen(viewPort)
viewPort.addListener(mediaScreen)