import React from 'react'
import ReactDOM from 'react-dom'

import styles from './app.scss'
import ted from '../../images/ted.png'

ReactDOM.render(
  <div>
    <h1>React Component</h1>
    {
      // TODO: <img src="images/ted.png" alt="TED" />
    }
    <img className={styles.img} src={ted} alt="TED" />
  </div>,
  document.querySelector('#app')
)
