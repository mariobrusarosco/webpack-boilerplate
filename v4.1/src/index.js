// Enables Hot Module Replacement
if(module && module.hot) {
    module.hot.accept()
}

const elem = document.createElement('div')
elem.innerHTML = "Starting Webpack!!!"
document.body.appendChild(elem)

// CSS support
import '../src/boilterplate-features/css'

// Image support
import '../src/boilterplate-features/images'

// Font support
import '../src/boilterplate-features/fonts'

// Hot Module Replacement support
import '../src/boilterplate-features/hmr'