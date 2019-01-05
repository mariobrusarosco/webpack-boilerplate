// Enables Hot Module Replacement
if(module && module.hot) {
    module.hot.accept()
}

document.body.insertAdjacentHTML('afterbegin', `Starting Webpack: ${process.env.NODE_ENV}`)

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

// React support
import '../src/boilterplate-features/react'

// Code Splitting

/* Importing lodash in this entry point to check
*  if Static Code Splitting optimization is working!!!
*/
import _ from 'lodash'
console.log(_.join(['main', 'entry', 'point, made with lodash!!!!!!']))

import '../src/boilterplate-features/dynamic-code-splitting'
