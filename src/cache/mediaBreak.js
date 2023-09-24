const viewPort = window.matchMedia("(max-width: 664px)")
const nvDesktop = document.querySelector('.navBar-desktop')
const nvMobile = document.querySelector('.topBar')

const mediaScreen = y => {
  if (y.matches) {
    view_DESKTOP.classList.add('hidden')
    view_MOBILE.classList.remove('hidden')
  } else {
    view_DESKTOP.classList.remove('hidden')
    view_MOBILE.classList.add('hidden')
  }
}
mediaScreen(viewPort)
viewPort.addListener(mediaScreen)