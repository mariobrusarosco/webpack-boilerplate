// Enables Hot Module Replacement
if(module && module.hot) {
    module.hot.accept()
}

// CSS support
import '../src/boilterplate-features/css'

// Image support
import '../src/boilterplate-features/images'

// Font support
import '../src/boilterplate-features/fonts'

// Hot Module Replacement support
import '../src/boilterplate-features/hmr'

//  Tree Shaking support
import { treeShakingExample } from '../src/boilterplate-features/utils/tree-shaking.example'
treeShakingExample()

// import { deadCodeFunction, } from '../src/boilterplate-features/utils/tree-shaking.example'
// deadCodeFunction()

const elem = document.createElement('div')
elem.innerHTML = "Starting Webpack!!!"
document.body.appendChild(elem)
