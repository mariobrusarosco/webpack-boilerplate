// Enables Hot Module Replacement
if(module && module.hot) {
    module.hot.accept()
}

document.body.insertAdjacentHTML('afterbegin', `Starting Webpack: ${process.env.NODE_ENV}`)

// CSS support
import 'css-support'

// Image support
import 'images-support'

// Font support
// import 'fonts-support'

// Hot Module Replacement support
// import 'hmr-support'

//  Tree Shaking support
import { treeShakingExample } from 'utils/tree-shaking.example'
treeShakingExample()

// React support
import 'react-support'

// Code Splitting

/* Importing lodash in this entry point to check
*  if Static Code Splitting optimization is working!!!
*/
import _ from 'lodash'
console.log(_.join(['main', 'entry', 'point, made with lodash!!!!!!']))

import 'code-splitting-support'

// Resolving some absolute paths
import 'resolving-paths-support'

// Babel and ES new features
import 'babel-support'
